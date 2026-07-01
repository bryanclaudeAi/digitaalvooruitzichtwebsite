import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Digitaal Vooruitzicht - Meer klussen voor jouw bedrijf',
  description: 'Strakke, snelle websites voor installateurs, loodgieters en vakbedrijven in Almere en omgeving. Klaar in een week. Plan een vrijblijvend gesprek.',
  metadataBase: new URL('https://digitaalvooruitzicht.nl'),
  openGraph: {
    title: 'Digitaal Vooruitzicht - Meer klussen voor jouw bedrijf',
    description: 'Strakke, snelle websites voor vakbedrijven in Almere. Klaar in een week.',
    locale: 'nl_NL',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digitaal Vooruitzicht',
  url: 'https://digitaalvooruitzicht.nl',
  telephone: '+31621484093',
  email: 'info@digitaalvooruitzicht.nl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Almere',
    addressCountry: 'NL',
  },
  founder: {
    '@type': 'Person',
    name: 'Bryan Schippers',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
