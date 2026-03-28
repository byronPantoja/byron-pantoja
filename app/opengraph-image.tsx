import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Byron Pantoja — NextJS Developer Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C0C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            color: '#F5F5F0',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          Byron Pantoja
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#8A8A85',
            marginBottom: 40,
            fontFamily: 'system-ui, sans-serif',
            display: 'flex',
          }}
        >
          NextJS Developer
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#8A8A85',
            marginBottom: 8,
            fontFamily: 'system-ui, sans-serif',
            display: 'flex',
          }}
        >
          I turn complex technical things
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#C4A882',
            fontStyle: 'italic',
            marginBottom: 40,
            display: 'flex',
          }}
        >
          into tools people actually use.
        </div>
        <div
          style={{
            width: 120,
            height: 2,
            background: '#C4A882',
            marginBottom: 40,
            display: 'flex',
          }}
        />
        <div
          style={{
            fontSize: 14,
            color: '#8A8A85',
            letterSpacing: 3,
            fontFamily: 'monospace',
            display: 'flex',
          }}
        >
          NEXTJS · REACT · TAILWIND CSS · SHOPIFY · SUPABASE
        </div>
        <div
          style={{
            fontSize: 16,
            color: '#8A8A85',
            fontFamily: 'system-ui, sans-serif',
            position: 'absolute',
            bottom: 50,
            left: 80,
            display: 'flex',
          }}
        >
          byronpantoja.com
        </div>
      </div>
    ),
    { ...size }
  )
}
