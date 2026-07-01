import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = 'bryanschippers.bs@gmail.com'

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

  try {
    const origin = new URL(req.url).origin
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // FormSubmit rejects requests that don't look like they came from a real webpage.
        Referer: `${origin}/`,
        Origin: origin,
      },
      body: JSON.stringify({
        name,
        _replyto: email,
        bedrijf: company ?? '',
        bericht: message,
        _subject: 'Nieuw contactverzoek - digitaalvooruitzicht.nl',
        _captcha: 'false',
      }),
    })

    const data = await res.json().catch(() => null)
    // FormSubmit returns HTTP 200 even when it rejects a submission, so the
    // actual outcome is only knowable from the "success" field in the body.
    if (!res.ok || !data || String(data.success) !== 'true') {
      return NextResponse.json({ ok: false, error: 'upstream_failed', detail: data?.message }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'upstream_failed' }, { status: 502 })
  }
}
