import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Byron Pantoja — NextJS Developer',
  description:
    'I turn complex technical things into tools non-technical people actually use. NextJS, React, Tailwind CSS developer available for remote work.',
  keywords: [
    'NextJS developer',
    'React developer',
    'Tailwind CSS',
    'web developer Philippines',
    'remote developer',
    'Shopify developer',
    'Supabase',
  ],
  openGraph: {
    title: 'Byron Pantoja — NextJS Developer',
    description:
      'Web developer based in Davao, Philippines. Portfolio featuring NextJS + Shopify + Supabase projects.',
    url: 'https://byronpantoja.com',
    type: 'website',
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
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
