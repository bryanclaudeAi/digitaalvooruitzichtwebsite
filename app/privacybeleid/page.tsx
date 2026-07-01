import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid - Digitaal Vooruitzicht',
  description: 'Hoe Digitaal Vooruitzicht omgaat met persoonsgegevens die via het contactformulier worden verzameld.',
}

const sectionStyle: React.CSSProperties = { marginTop: '32px' }
const h2Style: React.CSSProperties = { fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '22px', margin: '0 0 12px' }
const pStyle: React.CSSProperties = { fontSize: '15.5px', lineHeight: 1.7, color: '#94A3B8', margin: '0 0 10px' }

export default function Privacybeleid() {
  return (
    <div style={{ background: '#020617', color: '#FFFFFF', fontFamily: 'var(--font-inter), sans-serif', minHeight: '100vh', padding: 'clamp(40px,6vw,80px) clamp(24px,6vw,80px) 100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <a href="/" style={{ color: '#22D3EE', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>&larr; Terug naar de website</a>

        <h1 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,44px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '24px 0 8px' }}>Privacybeleid</h1>
        <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 8px' }}>Laatst bijgewerkt: juli 2026</p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Wie zijn wij</h2>
          <p style={pStyle}>Digitaal Vooruitzicht (Bryan Schippers), gevestigd in Almere, KvK-nummer 42093547, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Welke gegevens verzamelen we</h2>
          <p style={pStyle}>Wanneer je het contactformulier op deze website invult, verwerken we de gegevens die je zelf invult: je naam, eventueel je bedrijfsnaam, je e-mailadres en je bericht.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Waarom en op welke grond</h2>
          <p style={pStyle}>We gebruiken deze gegevens uitsluitend om te reageren op je contactverzoek en eventueel een offerte of afspraak te maken. De grondslag hiervoor is ons gerechtvaardigd belang om vragen van (potentiele) klanten te beantwoorden.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Hoe lang bewaren we je gegevens</h2>
          <p style={pStyle}>We bewaren je gegevens niet langer dan nodig is om je contactverzoek af te handelen, tenzij er een overeenkomst tussen ons ontstaat - dan bewaren we gegevens zolang de wet dat voor administratie/facturatie vereist.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Delen met derden</h2>
          <p style={pStyle}>We verkopen je gegevens nooit. Om de website te laten werken, maken we gebruik van de volgende verwerkers:</p>
          <p style={pStyle}>- <strong>Vercel</strong> - hosting van de website<br />- <strong>Resend</strong> - het versturen van e-mails vanuit het contactformulier</p>
          <p style={pStyle}>Deze partijen verwerken gegevens uitsluitend in onze opdracht en mogen ze niet voor eigen doeleinden gebruiken.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Cookies</h2>
          <p style={pStyle}>Deze website gebruikt Vercel Web Analytics om bezoekersaantallen te meten. Dit gebeurt zonder cookies en zonder individuele bezoekers te herkennen of te volgen - er is dus geen cookiebanner nodig.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Jouw rechten</h2>
          <p style={pStyle}>Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Ook kun je bezwaar maken tegen de verwerking. Neem hiervoor contact met ons op via onderstaand e-mailadres. Je hebt daarnaast het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Contact</h2>
          <p style={pStyle}>Vragen over dit privacybeleid? Mail naar <a href="mailto:bryanschippers.bs@gmail.com" style={{ color: '#22D3EE' }}>bryanschippers.bs@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  )
}
