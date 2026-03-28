import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { WorkSection } from '@/components/WorkSection'
import { AboutSection } from '@/components/AboutSection'
import { ApproachSection } from '@/components/ApproachSection'
import { ContactFooter } from '@/components/ContactFooter'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://byronpantoja.com/#website',
      url: 'https://byronpantoja.com',
      name: 'Byron Pantoja',
      description:
        'NextJS developer building production-ready web applications with React, Tailwind CSS, Shopify, and Supabase.',
    },
    {
      '@type': 'Person',
      '@id': 'https://byronpantoja.com/#person',
      name: 'Byron Pantoja',
      url: 'https://byronpantoja.com',
      jobTitle: 'NextJS Developer',
      description:
        'Web developer based in Davao, Philippines with 14+ years turning brand strategy and operations into digital tools.',
      email: 'itsme@byronpantoja.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Davao',
        addressCountry: 'PH',
      },
      knowsAbout: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'TypeScript',
        'Shopify',
        'Supabase',
        'PostgreSQL',
        'GraphQL',
      ],
      sameAs: ['https://github.com/byronPantoja'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://byronpantoja.com/#webpage',
      url: 'https://byronpantoja.com',
      name: 'Byron Pantoja — NextJS Developer',
      isPartOf: { '@id': 'https://byronpantoja.com/#website' },
      about: { '@id': 'https://byronpantoja.com/#person' },
      description:
        'Portfolio of Byron Pantoja, a NextJS developer based in Davao, Philippines. Featuring projects built with React, Shopify, and Supabase.',
    },
  ],
}

export default function Home() {
  return (
    <div className="relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ApproachSection />
        <ContactFooter />
      </main>
    </div>
  )
}
