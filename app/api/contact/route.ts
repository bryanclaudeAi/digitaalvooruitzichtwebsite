import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Where contact submissions are delivered. Swap to info@digitaalvooruitzicht.nl
// once that domain is verified in Resend.
const CONTACT_EMAIL = 'bryanschippers.bs@gmail.com'
// Until the real domain is verified in Resend, use their shared test sender.
// After verifying digitaalvooruitzicht.nl, change to e.g. 'Digitaal Vooruitzicht <info@digitaalvooruitzicht.nl>'.
const FROM_ADDRESS = 'Digitaal Vooruitzicht <onboarding@resend.dev>'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LEN = 2000

// Best-effort in-memory limiter: resets on cold start, not shared across regions.
// Good enough to blunt a single client hammering the form; real protection is Vercel Firewall.
const submissionsByIp = new Map<string, number[]>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (timestamps.length >= MAX_PER_WINDOW) {
    submissionsByIp.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  submissionsByIp.set(ip, timestamps)
  return false
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 })
  }

  const { name, company, email, message, website } = body as Record<string, string | undefined>

  // Honeypot: real visitors never fill this in. Pretend success so bots don't retry.
  if (typeof website === 'string' && website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  if (
    typeof name !== 'string' || name.trim().length === 0 || name.length > MAX_LEN ||
    typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > MAX_LEN ||
    typeof message !== 'string' || message.trim().length === 0 || message.length > MAX_LEN ||
    (company !== undefined && company.length > MAX_LEN)
  ) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 400 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 500 })
  }

  const safeName = escapeHtml(name.trim())
  const safeCompany = escapeHtml((company ?? '').trim())
  const safeEmail = escapeHtml(email.trim())
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>')

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `Nieuw contactverzoek - ${name.trim()}`,
      text: `Naam: ${name.trim()}\nBedrijf: ${company ?? ''}\nE-mail: ${email.trim()}\n\nBericht:\n${message.trim()}`,
      html: `
        <h2>Nieuw contactverzoek via digitaalvooruitzicht.nl</h2>
        <p><strong>Naam:</strong> ${safeName}</p>
        <p><strong>Bedrijf:</strong> ${safeCompany || '-'}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Bericht:</strong><br>${safeMessage}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: 'send_failed', detail: error.message }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }
}
