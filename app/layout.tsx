import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Byron Pantoja | Web Developer & Brand Strategist',
  description: 'Portfolio of Byron Pantoja. 14+ years at Coffee For Peace, freelance web development, brand strategy, and creative direction.',
  keywords: ['web development', 'brand strategy', 'coffee', 'design', 'creative'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://byronpantoja.com',
    title: 'Byron Pantoja | Portfolio',
    description: 'Web Developer & Brand Strategist with 14+ years of experience',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
