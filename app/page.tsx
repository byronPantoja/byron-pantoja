import { Hero } from '@/components/Hero'
import { WhatYouGetSection } from '@/components/WhatYouGetSection'
import { WorkSection } from '@/components/WorkSection'
import { AboutSection } from '@/components/AboutSection'
import { DispatchSection } from '@/components/DispatchSection'
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
        'Web developer building websites and AI setups for small business owners. Every project ships with a custom Obsidian wiki and Claude Code configuration.',
    },
    {
      '@type': 'Person',
      '@id': 'https://byronpantoja.com/#person',
      name: 'Byron Pantoja',
      url: 'https://byronpantoja.com',
      jobTitle: 'Web Developer & AI Setup Specialist',
      description:
        'Web developer based in Davao, Philippines. I build websites and the AI setup to run them — custom Obsidian wiki and Claude Code shipped with every project.',
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
        'Claude AI',
        'AI Setup',
        'Obsidian',
        'SEO',
        'Copywriting',
        'Website Optimization',
      ],
      sameAs: ['https://github.com/byronPantoja'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://byronpantoja.com/#webpage',
      url: 'https://byronpantoja.com',
      name: 'Byron Pantoja — Web Developer & AI Setup for Small Businesses',
      isPartOf: { '@id': 'https://byronpantoja.com/#website' },
      about: { '@id': 'https://byronpantoja.com/#person' },
      description:
        'Portfolio of Byron Pantoja, a web developer based in Davao, Philippines. Every project ships with a website, custom Obsidian LLM-wiki, and Claude Code setup.',
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
      <main>
        <Hero />
        <WhatYouGetSection />
        <WorkSection />
        <AboutSection />
        <DispatchSection />
        <ApproachSection />
        <ContactFooter />
      </main>
    </div>
  )
}
