import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020617',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <path d="M3 24 C12 11, 36 11, 45 24 C36 37, 12 37, 3 24 Z" stroke="#22D3EE" strokeWidth="3" fill="none" strokeLinejoin="round" />
            <circle cx="24" cy="24" r="7" fill="#22D3EE" />
          </svg>
          <span style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 700, letterSpacing: '-0.01em' }}>Digitaal Vooruitzicht</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: 64,
            fontWeight: 900,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 900,
            padding: '0 40px',
          }}
        >
          <span>Meer&nbsp;</span>
          <span style={{ color: '#22D3EE' }}>klussen&nbsp;</span>
          <span>voor jouw bedrijf. Zonder gedoe.</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
