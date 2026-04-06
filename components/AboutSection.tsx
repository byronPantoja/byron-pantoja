import { ScrollReveal } from './ScrollReveal'

const capabilities = [
  'NEXTJS / REACT',
  'TAILWIND CSS',
  'SHOPIFY',
  'SUPABASE',
  'TYPESCRIPT',
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
              02 — About
            </span>
            <h2 className="sr-only">About Byron Pantoja — NextJS Developer</h2>
            <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)]" />
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — editorial headline */}
          <ScrollReveal className="md:col-span-7">
            <h3 className="font-artist text-[2rem] md:text-[2.5rem] leading-[1.2] text-[#F5F5F0]">
              I&apos;ve been a business owner{' '}
              <em className="italic">longer than I&apos;ve been a developer.</em>
            </h3>
          </ScrollReveal>

          {/* Right — body text */}
          <ScrollReveal className="md:col-span-5">
            <div className="space-y-6">
              <p className="font-narrator text-sm md:text-base text-[#8A8A85] leading-relaxed">
                For 14 years I ran the digital side of Coffee for Peace — a
                family social enterprise supporting 880+ farming families across
                the Philippines. Real org. Real stakes. Websites, brand
                identity, certifications, and tools the team used in the field.
              </p>
              <p className="font-narrator text-sm md:text-base text-[#8A8A85] leading-relaxed">
                Now I build full-stack apps with Next.js, React, and Supabase —
                using AI as a development partner. I ship faster than a
                traditional developer. And I&apos;ll walk you through how to
                maintain your own site using AI. No dependency. No gatekeeping.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Capability labels */}
        <ScrollReveal className="mt-16 md:mt-24">
          <div className="flex flex-wrap items-center gap-y-3">
            {capabilities.map((cap, i) => (
              <div key={cap} className="flex items-center">
                {i > 0 && (
                  <div className="w-[1px] h-4 bg-[rgba(245,245,240,0.15)] mx-4 md:mx-6" />
                )}
                <span className="font-engineer text-[0.65rem] md:text-xs tracking-[0.2em] text-[#8A8A85] uppercase">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
