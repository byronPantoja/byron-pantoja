import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/Navbar'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://byronpantoja.com'),
  title: 'Byron Pantoja — NextJS Developer | React, Tailwind CSS, Supabase',
  description:
    'NextJS developer based in Davao, Philippines. I build production-ready web applications with React, Tailwind CSS, Shopify, and Supabase. Available for remote work.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Byron Pantoja — NextJS Developer',
    description:
      'I turn complex technical things into tools people actually use. Portfolio featuring NextJS, Shopify, and Supabase projects.',
    url: 'https://byronpantoja.com',
    siteName: 'Byron Pantoja',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Byron Pantoja — NextJS Developer',
    description:
      'NextJS developer building production-ready web applications. Available for remote work.',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {/* Grid lines */}
        <div className="grid-lines" aria-hidden="true">
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
