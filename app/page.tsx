'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [fabOpen, setFabOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, message, website }),
      })
      if (res.ok) setSent(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <div style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-280px', left: '50%', transform: 'translateX(-50%)', width: '1100px', height: '760px', background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.16), rgba(34,211,238,0) 62%)', pointerEvents: 'none' }} />

        <header style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(20px,3vw,30px) clamp(24px,6vw,80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none" style={{ transformOrigin: 'center', animation: 'dv-blink 7s ease-in-out infinite' }}>
              <path d="M3 24 C12 11, 36 11, 45 24 C36 37, 12 37, 3 24 Z" stroke="#22D3EE" strokeWidth="3" fill="none" strokeLinejoin="round" />
              <circle cx="24" cy="24" r="7" fill="#22D3EE" />
            </svg>
            <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.01em' }}>Digitaal Vooruitzicht</span>
          </div>
          <a href="#contact" className="btn-nav" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none', border: '1px solid rgba(148,163,184,0.3)', padding: '11px 20px', borderRadius: '999px', transition: 'border-color .2s, color .2s' }}>
            Plan een gesprek
          </a>
        </header>

        <main style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(40px,6vw,80px) clamp(24px,6vw,80px) clamp(60px,10vw,90px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(148,163,184,0.2)', padding: '8px 16px', borderRadius: '999px', marginBottom: '36px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22D3EE', boxShadow: '0 0 10px #22D3EE' }} />
            <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#94A3B8', letterSpacing: '0.01em' }}>Websites voor vakmensen die meer willen</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(44px,8vw,92px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0, maxWidth: '14ch' }}>
            Meer <span style={{ color: '#22D3EE' }}>klussen</span> voor<br />jouw bedrijf.<br />Zonder gedoe.
          </h1>

          <p style={{ fontSize: 'clamp(17px,2.2vw,21px)', lineHeight: 1.6, color: '#94A3B8', maxWidth: '56ch', margin: '32px 0 0' }}>
            Een strakke, snelle website die 24/7 nieuwe aanvragen binnenhaalt. Klaar in ongeveer een week.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '44px' }}>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#22D3EE', color: '#020617', fontWeight: 700, fontSize: '17px', padding: '17px 32px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 12px 40px rgba(34,211,238,0.28)', transition: 'background .2s, box-shadow .2s' }}>
              Plan een gesprek <span style={{ fontSize: '19px', lineHeight: 1 }}>&rarr;</span>
            </a>
            <a href="#diensten" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#0F172A', color: '#FFFFFF', fontWeight: 600, fontSize: '17px', padding: '17px 30px', borderRadius: '12px', textDecoration: 'none', border: '1px solid rgba(148,163,184,0.22)', transition: 'border-color .2s' }}>
              Bekijk wat ik doe
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '28px', marginTop: '64px', color: '#94A3B8', fontSize: '14.5px', fontWeight: 500 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}><span style={{ color: '#22D3EE', fontSize: '16px' }}>&#10003;</span> Binnen 1 week live</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(148,163,184,0.4)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}><span style={{ color: '#22D3EE', fontSize: '16px' }}>&#10003;</span> Persoonlijk en lokaal</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(148,163,184,0.4)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}><span style={{ color: '#22D3EE', fontSize: '16px' }}>&#10003;</span> Geen gedoe met techniek</span>
          </div>
        </main>
      </div>

      {/* ─── PROBLEEM ─── */}
      <section id="probleem" style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', padding: 'clamp(80px,12vw,150px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', marginBottom: '20px' }}>Herken je dit?</span>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0, maxWidth: '18ch' }}>
            Je bent goed in je vak. Online ziet niemand dat.
          </h2>
          <p style={{ fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.6, color: '#94A3B8', maxWidth: '54ch', margin: '24px 0 0' }}>
            Het werk komt nu vooral via via. Maar er lopen elke week klanten langs je heen die je nooit gevonden hebben. Dat is zonde, want het kan anders.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px', marginTop: '56px' }}>
            {[
              { icon: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>, title: 'Je loopt klussen mis', body: 'Mensen vinden je niet online, of nemen je niet serieus als ze wel langskomen. Zo glipt werk dat van jou had kunnen zijn er ongemerkt tussendoor.' },
              { icon: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></>, title: 'De concurrent wint', body: 'Een ander met een nette site pakt de klus die eigenlijk van jou was. Niet omdat hij beter is, maar omdat hij er online beter uitziet.' },
              { icon: <><path d="M4 4h16v12H5.2L4 17.5V4z"/><path d="M9 9h6M9 12h3"/></>, title: 'Aanvragen blijven liggen', body: 'Je kunt niet altijd de telefoon pakken als je op de steiger of onder de gootsteen ligt. Een gemiste oproep is vaak een gemiste klus.' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ background: '#0F172A', border: '1px solid rgba(148,163,184,0.12)', borderRadius: '16px', padding: '34px 30px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34,211,238,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '21px', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#94A3B8', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#0F172A', border: '1px solid rgba(34,211,238,0.25)', borderRadius: '16px', padding: '24px 28px', marginTop: '20px' }}>
            <span style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '11px', background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <p style={{ fontSize: 'clamp(15.5px,1.8vw,18px)', lineHeight: 1.55, color: '#FFFFFF', margin: 0, fontWeight: 500 }}>Met een goede site komt elke aanvraag netjes binnen. Ook als je op de weg zit.</p>
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─── */}
      <section id="diensten" style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', padding: 'clamp(20px,4vw,40px) clamp(24px,6vw,80px) clamp(80px,12vw,150px)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', marginBottom: '20px' }}>Wat ik voor je doe</span>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0, maxWidth: '16ch' }}>
            Een website die het werk voor je doet.
          </h2>

          <div className="card-featured" style={{ background: '#0F172A', border: '1px solid rgba(34,211,238,0.25)', borderRadius: '20px', padding: 'clamp(28px,4vw,48px)', marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,4vw,52px)', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#22D3EE', background: 'rgba(34,211,238,0.1)', padding: '6px 12px', borderRadius: '999px', marginBottom: '22px' }}>Hoofddienst</span>
              <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(26px,3.4vw,38px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>Een website die klussen oplevert</h3>
              <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: '#94A3B8', margin: '20px 0 28px', maxWidth: '46ch' }}>Professioneel, mobiel en supersnel. Met een werkend offerte- en contactformulier, zodat aanvragen direct bij jou binnenkomen. Je hoeft er zelf niks voor te doen.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {['Strak ontwerp dat past bij jouw vak', 'Werkt perfect op de telefoon', 'Formulier dat aanvragen meteen doorstuurt'].map((item) => (
                  <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', fontSize: '15.5px', color: '#FFFFFF' }}><span style={{ color: '#22D3EE', fontSize: '17px' }}>&#10003;</span> {item}</span>
                ))}
              </div>
            </div>
            <div style={{ aspectRatio: '4/3', borderRadius: '14px', background: 'repeating-linear-gradient(135deg, #0B1220, #0B1220 11px, #0e1626 11px, #0e1626 22px)', border: '1px solid rgba(148,163,184,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {/* Swap this div for a screenshot of a client site when you have one */}
              <span style={{ fontFamily: 'monospace', fontSize: '13px', letterSpacing: '0.04em', color: '#64748B' }}>[ screenshot van een klant-site ]</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px', marginTop: '20px' }}>
            {[
              {
                icon: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></>,
                title: 'Online gevonden worden',
                body: 'Een stevige SEO-basis, zodat je opduikt als iemand in de buurt "loodgieter Almere" zoekt. Daar zitten de klussen.',
              },
              {
                icon: <><path d="M3 17l5-5 4 3 7-8"/><path d="M16 7h3v3"/></>,
                title: 'Groeit met je mee',
                body: 'Loopt de site eenmaal? Dan kun je later saai, repetitief werk slim laten automatiseren. Zo houd je tijd over voor het echte werk.',
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ background: '#0F172A', border: '1px solid rgba(148,163,184,0.12)', borderRadius: '16px', padding: '34px 32px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34,211,238,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '21px', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#94A3B8', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WAAROM ─── */}
      <section id="waarom" style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', padding: 'clamp(20px,4vw,40px) clamp(24px,6vw,80px) clamp(80px,12vw,150px)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(40px,6vw,80px)' }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', marginBottom: '20px' }}>Waarom Digitaal Vooruitzicht</span>
            <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0 }}>
              Geen bureau. Gewoon iemand die het regelt.
            </h2>
            <p style={{ fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.6, color: '#94A3B8', margin: '24px 0 0', maxWidth: '40ch' }}>
              Direct contact, korte lijntjes en een eerlijke prijs. Precies wat je van een vakman mag verwachten.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              { icon: <path d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z"/>, title: 'Snel en betaalbaar', body: 'Gebouwd met de nieuwste tech, zonder de dure overhead van een traditioneel bureau. Dat scheelt jou flink.' },
              { icon: <><path d="M12 21s-7-5.7-7-11a7 7 0 0114 0c0 5.3-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></>, title: 'Persoonlijk en lokaal', body: 'Uit Almere, geen callcenter. Ik kijk persoonlijk met je mee en je weet altijd wie je aan de lijn hebt.' },
              { icon: <><path d="M3 17l5-5 4 3 7-8"/><path d="M16 7h3v3"/></>, title: 'Jong en vooruitkijkend', body: 'Opgegroeid met de nieuwste technologie. Ik snap waar het heen gaat en zorg dat je daar nu al klaar voor bent.' },
              { icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, title: 'Verdient zichzelf snel terug', body: 'Een extra klus dekt vaak al de hele site. De rest is pure winst voor je bedrijf.' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ display: 'flex', gap: '20px', background: '#0F172A', border: '1px solid rgba(148,163,184,0.12)', borderRadius: '16px', padding: '28px 30px' }}>
                <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '11px', background: 'rgba(34,211,238,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '19px', margin: '0 0 7px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#94A3B8', margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WERKWIJZE ─── */}
      <section id="werkwijze" style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', padding: 'clamp(20px,4vw,40px) clamp(24px,6vw,80px) clamp(80px,12vw,150px)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', marginBottom: '20px' }}>Zo werkt het</span>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0, maxWidth: '16ch' }}>
            In drie stappen online. Jij hoeft bijna niks te doen.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px', marginTop: '56px' }}>
            {[
              { num: '01', title: 'Kort gesprek', body: 'We bellen of zitten even samen en kijken wat jij nodig hebt. Vrijblijvend, geen verkooppraat.' },
              { num: '02', title: 'Ik bouw alles', body: 'Jij levert alleen wat fotos en info aan. De rest, van ontwerp tot techniek, neem ik volledig uit handen.' },
              { num: '03', title: 'Live in een week', body: 'In ongeveer een week staat je site online, klaar om nieuwe aanvragen op te vangen. Zo simpel is het.' },
            ].map((item) => (
              <div key={item.num} className="card" style={{ background: '#0F172A', border: '1px solid rgba(148,163,184,0.12)', borderRadius: '16px', padding: '36px 32px' }}>
                <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: '54px', lineHeight: 1, color: 'rgba(34,211,238,0.9)', display: 'block', marginBottom: '20px', letterSpacing: '-0.03em' }}>{item.num}</span>
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '21px', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#94A3B8', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVER MIJ ─── */}
      <section id="over" style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', padding: 'clamp(20px,4vw,40px) clamp(24px,6vw,80px) clamp(80px,12vw,150px)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
          <div style={{ borderRadius: '18px', overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
            <Image src="/bryan.png" alt="Bryan Schippers - Digitaal Vooruitzicht" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(max-width: 768px) 100vw, 40vw" />
          </div>

          <div>
            <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', marginBottom: '20px' }}>Over mij</span>
            <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0 }}>
              Jong, gedreven en altijd vooruitkijkend.
            </h2>
            <p style={{ fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65, color: '#94A3B8', margin: '26px 0 0', maxWidth: '50ch' }}>
              Ik ben Bryan Schippers uit Almere. Ik bouw websites met de nieuwste technologie, persoonlijk en lokaal, met jouw business als kompas. Geen vage termen of dure praatjes. Gewoon een site die werkt en die je merkt in je agenda.
            </p>
            <p style={{ fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65, color: '#94A3B8', margin: '18px 0 0', maxWidth: '50ch' }}>
              Jij bent de beste in je vak. Ik zorg dat de buitenwereld dat ook ziet.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 48 48" fill="none"><path d="M5 24 C13 13, 35 13, 43 24 C35 35, 13 35, 5 24 Z" stroke="#22D3EE" strokeWidth="3" fill="none" strokeLinejoin="round"/><circle cx="24" cy="24" r="6.5" fill="#22D3EE"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '16px' }}>Bryan Schippers</div>
                <div style={{ fontSize: '14px', color: '#94A3B8' }}>Digitaal Vooruitzicht &middot; Almere</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', padding: 'clamp(20px,4vw,40px) clamp(24px,6vw,80px) clamp(80px,12vw,130px)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', background: '#0F172A', border: '1px solid rgba(34,211,238,0.22)', borderRadius: '24px', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>

          <div style={{ padding: 'clamp(36px,4.5vw,56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'radial-gradient(ellipse at top left, rgba(34,211,238,0.1), rgba(34,211,238,0) 60%)' }}>
            <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', marginBottom: '18px' }}>Contact</span>
            <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.8vw,44px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
              Plan een vrijblijvend gesprek
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#94A3B8', margin: '22px 0 0', maxWidth: '38ch' }}>
              Even sparren over wat een goede website voor jouw bedrijf kan opleveren? Laat je gegevens achter, dan neem ik snel contact op.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '36px' }}>
              <a href="mailto:info@digitaalvooruitzicht.nl" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '13px', color: '#FFFFFF', textDecoration: 'none', fontSize: '15.5px', fontWeight: 500, transition: 'color .2s' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(34,211,238,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </span>
                info@digitaalvooruitzicht.nl
              </a>
              <a href="tel:+31621484093" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '13px', color: '#FFFFFF', textDecoration: 'none', fontSize: '15.5px', fontWeight: 500, transition: 'color .2s' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(34,211,238,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
                </span>
                06 21484093
              </a>
            </div>
          </div>

          <div style={{ padding: 'clamp(36px,4.5vw,56px)', background: '#0B1324' }}>
            {sent ? (
              <div style={{ height: '100%', minHeight: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '24px', margin: '0 0 12px' }}>Bericht verstuurd</h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#94A3B8', margin: 0, maxWidth: '32ch' }}>Bedankt, ik neem zo snel mogelijk contact met je op. Vaak nog dezelfde dag.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                />
                {[
                  { label: 'Naam', type: 'text', value: name, setter: setName, placeholder: 'Je naam', required: true },
                  { label: 'Bedrijf', type: 'text', value: company, setter: setCompany, placeholder: 'Je bedrijfsnaam', required: false },
                  { label: 'E-mail', type: 'email', value: email, setter: setEmail, placeholder: 'naam@bedrijf.nl', required: true },
                ].map((field) => (
                  <div key={field.label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>{field.label}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      placeholder={field.placeholder}
                      className="form-input"
                      style={{ background: '#0F172A', border: '1px solid rgba(148,163,184,0.25)', borderRadius: '10px', padding: '13px 15px', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', fontSize: '15px', transition: 'border-color .2s' }}
                    />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>Bericht</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Waar kan ik je mee helpen?"
                    className="form-input"
                    style={{ background: '#0F172A', border: '1px solid rgba(148,163,184,0.25)', borderRadius: '10px', padding: '13px 15px', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', fontSize: '15px', resize: 'vertical', transition: 'border-color .2s' }}
                  />
                </div>
                {error && (
                  <p style={{ fontSize: '14px', color: '#F87171', margin: 0 }}>
                    Er ging iets mis bij het versturen. Probeer het nog eens, of bel/app me direct.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-submit"
                  style={{ marginTop: '6px', background: '#22D3EE', color: '#020617', fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, fontSize: '16px', padding: '15px 24px', border: 'none', borderRadius: '11px', cursor: sending ? 'not-allowed' : 'pointer', boxShadow: '0 10px 32px rgba(34,211,238,0.28)', opacity: sending ? 0.7 : 1, transition: 'background .2s, opacity .2s' }}
                >
                  {sending ? 'Bezig...' : 'Plan een gesprek'}
                </button>
              </form>
            )}
          </div>
        </div>

        <footer style={{ maxWidth: '1040px', margin: '64px auto 0', paddingTop: '32px', borderTop: '1px solid rgba(148,163,184,0.12)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none"><path d="M5 24 C13 13, 35 13, 43 24 C35 35, 13 35, 5 24 Z" stroke="#22D3EE" strokeWidth="3" fill="none" strokeLinejoin="round"/><circle cx="24" cy="24" r="6.5" fill="#22D3EE"/></svg>
            <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '15px' }}>Digitaal Vooruitzicht</span>
          </div>
          <span style={{ fontSize: '13.5px', color: '#94A3B8' }}>&copy; 2026 Digitaal Vooruitzicht &middot; Almere</span>
        </footer>
      </section>

      {/* ─── FLOATING FAB ─── */}
      <div style={{ position: 'fixed', right: 'clamp(18px,3vw,32px)', bottom: 'clamp(18px,3vw,32px)', zIndex: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px', fontFamily: 'var(--font-inter), sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px', transition: 'opacity .22s ease, transform .28s cubic-bezier(.2,.8,.25,1)', opacity: fabOpen ? 1 : 0, transform: fabOpen ? 'translateY(0) scale(1)' : 'translateY(14px) scale(.96)', transformOrigin: 'bottom right', pointerEvents: fabOpen ? 'auto' : 'none' }}>
          <a href="https://wa.me/31621484093" target="_blank" rel="noopener" onClick={() => setFabOpen(false)} className="fab-pill-wa" style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', background: '#0F172A', border: '1px solid rgba(148,163,184,0.2)', color: '#FFFFFF', textDecoration: 'none', padding: '12px 17px', borderRadius: '999px', fontSize: '14.5px', fontWeight: 600, boxShadow: '0 8px 24px rgba(2,6,23,0.5)', transition: 'border-color .2s' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#22D3EE"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.83c2.16 0 4.18.84 5.71 2.37a8.04 8.04 0 012.37 5.71c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.25-4.38c0-4.54 3.7-8.24 8.25-8.24zm-2.86 4.4c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.62 2.62 1.03 3.16.83 3.73.78.57-.05 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.71.16-.21.31-.81 1.01-1 1.22-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.6-.01z"/></svg>
            </span>
            WhatsApp
          </a>

          <a href="#contact" onClick={() => setFabOpen(false)} className="fab-pill-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#22D3EE', color: '#020617', textDecoration: 'none', padding: '12px 19px', borderRadius: '999px', fontSize: '14.5px', fontWeight: 700, boxShadow: '0 10px 28px rgba(34,211,238,0.32)', transition: 'background .2s' }}>
            Plan een gesprek <span style={{ fontSize: '16px', lineHeight: 1 }}>&rarr;</span>
          </a>
        </div>

        <button onClick={() => setFabOpen(!fabOpen)} aria-label="Contactopties" className="btn-fab" style={{ width: '60px', height: '60px', border: 'none', borderRadius: '50%', background: '#22D3EE', color: '#020617', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 34px rgba(34,211,238,0.4)', transition: 'background .2s' }}>
          {fabOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#020617" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none"><path d="M5 24 C13 13, 35 13, 43 24 C35 35, 13 35, 5 24 Z" stroke="#020617" strokeWidth="3" fill="none" strokeLinejoin="round"/><circle cx="24" cy="24" r="6.5" fill="#020617"/></svg>
          )}
        </button>
      </div>
    </>
  )
}
