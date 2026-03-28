import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

interface Project {
  number: string
  title: string
  type: string
  description: string
  tags: string[]
  siteUrl: string
  githubUrl: string
  image: string
  imageAlt: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Serenity Studio',
    type: 'Service Business Landing Page',
    description:
      'Multi-page wellness studio site with interactive booking calendar, journal section with full blog articles, and membership teaser. Built component-first with reusable cards and forms.',
    tags: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    siteUrl: 'https://mockup-salon.vercel.app',
    githubUrl: 'https://github.com/byronPantoja/mockup-salon',
    image: '/images/salon-screenshot.png',
    imageAlt: 'Serenity Studio — wellness booking site screenshot',
  },
  {
    number: '02',
    title: "That's G",
    type: 'Headless Shopify Storefront',
    description:
      "Editorial e-commerce storefront pulling live product data from Shopify's Storefront API via GraphQL. Features collection filtering, variant selection, and cart state management.",
    tags: ['NextJS', 'Shopify API', 'GraphQL', 'Tailwind CSS'],
    siteUrl: 'https://mockup-store-thatsg.vercel.app',
    githubUrl: 'https://github.com/byronPantoja/mockup-store-thatsg',
    image: '/images/store-screenshot.png',
    imageAlt: "That's G — headless Shopify storefront screenshot",
  },
  {
    number: '03',
    title: 'BaseLine',
    type: 'Full-Stack Operations Dashboard',
    description:
      'Production-grade dashboard with Supabase Postgres, real authentication, Row Level Security, and a live contact-to-lead pipeline. Features sortable data tables, status cycling, and a custom borderless design system.',
    tags: ['NextJS', 'Supabase', 'Postgres', 'Auth', 'Tailwind CSS'],
    siteUrl: 'https://mockup-dashboard-baseline.vercel.app',
    githubUrl: 'https://github.com/byronPantoja/mockup-dashboard-baseline',
    image: '/images/dashboard-screenshot.png',
    imageAlt: 'BaseLine — operations dashboard screenshot',
  },
]

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-narrator text-sm text-[#E8E4DD] hover:underline underline-offset-4 transition-all duration-300"
    >
      {label} &rarr;
    </a>
  )
}

function TechTag({ label }: { label: string }) {
  return (
    <span className="font-engineer text-[0.65rem] tracking-wider uppercase text-[#8A8A85] border border-[rgba(245,245,240,0.1)] px-3 py-1">
      {label}
    </span>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-20 md:mb-28">
            <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
              01 — Selected Work
            </span>
            <h2 className="sr-only">NextJS Portfolio Projects</h2>
            <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)]" />
          </div>
        </ScrollReveal>

        {/* Project 1: Serenity Studio — Large feature */}
        <ScrollReveal className="mb-24 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Image — 65% */}
            <div className="md:col-span-8 overflow-hidden group cursor-pointer">
              <div className="image-reveal">
                <Image
                  src={projects[0].image}
                  alt={projects[0].imageAlt}
                  width={1200}
                  height={675}
                  className="project-image w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
            {/* Info — 35% */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <span className="font-engineer text-4xl md:text-5xl text-[#8A8A85]/30 mb-4">
                {projects[0].number}
              </span>
              <h3 className="font-artist text-2xl md:text-3xl text-[#F5F5F0] mb-2">
                {projects[0].title}
              </h3>
              <p className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase mb-6">
                {projects[0].type}
              </p>
              <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed mb-6">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-6">
                <ProjectLink href={projects[0].siteUrl} label="View Site" />
                <ProjectLink href={projects[0].githubUrl} label="GitHub" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project 2: That's G — Offset, image right */}
        <ScrollReveal className="mb-24 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:mt-16">
            {/* Info — left (on desktop) */}
            <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
              <span className="font-engineer text-4xl md:text-5xl text-[#8A8A85]/30 mb-4">
                {projects[1].number}
              </span>
              <h3 className="font-artist text-2xl md:text-3xl text-[#F5F5F0] mb-2">
                {projects[1].title}
              </h3>
              <p className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase mb-6">
                {projects[1].type}
              </p>
              <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed mb-6">
                {projects[1].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[1].tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-6">
                <ProjectLink href={projects[1].siteUrl} label="View Site" />
                <ProjectLink href={projects[1].githubUrl} label="GitHub" />
              </div>
            </div>
            {/* Image — right, 55% */}
            <div className="md:col-span-7 overflow-hidden group cursor-pointer order-1 md:order-2">
              <div className="image-reveal">
                <Image
                  src={projects[1].image}
                  alt={projects[1].imageAlt}
                  width={1200}
                  height={675}
                  className="project-image w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project 3: BaseLine — Contained card */}
        <ScrollReveal>
          <div className="max-w-[900px]">
            <div className="bg-[#161616]">
              {/* Image — full card width */}
              <div className="overflow-hidden group cursor-pointer">
                <div className="image-reveal">
                  <Image
                    src={projects[2].image}
                    alt={projects[2].imageAlt}
                    width={1200}
                    height={675}
                    className="project-image w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Info — below image */}
              <div className="p-8 md:p-10">
                <span className="font-engineer text-4xl md:text-5xl text-[#8A8A85]/30 mb-4 block">
                  {projects[2].number}
                </span>
                <h3 className="font-artist text-2xl md:text-3xl text-[#F5F5F0] mb-2">
                  {projects[2].title}
                </h3>
                <p className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase mb-6">
                  {projects[2].type}
                </p>
                <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed mb-6">
                  {projects[2].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
                <div className="flex gap-6">
                  <ProjectLink href={projects[2].siteUrl} label="View Site" />
                  <ProjectLink href={projects[2].githubUrl} label="GitHub" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
