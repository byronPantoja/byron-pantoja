import { ScrollReveal } from './ScrollReveal'

const upworkServices = [
  {
    label: 'Website Optimization',
    description: 'Performance, conversion, copy, and structure — audited and fixed.',
  },
  {
    label: 'SEO Audit',
    description: 'A full site review with specific, actionable fixes. Delivered as a report.',
  },
  {
    label: 'Copywriting',
    description: 'Homepage or landing page copy, rewritten. Scoped to your brand voice.',
  },
  {
    label: 'AI Consulting',
    description: '1-hour session — Claude setup and workflow for your business.',
  },
]

export function ContactFooter() {
  return (
    <>
      {/* Upwork Services Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
                05 — Standalone Services
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="font-artist text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-[#F5F5F0] max-w-lg">
                  Not ready for a full project?{' '}
                  <em className="italic">Start smaller.</em>
                </h2>
                <a
                  href="https://www.upwork.com/freelancers/~018186743fb6c78e8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase hover:text-[#E8E4DD] transition-colors duration-300 shrink-0"
                >
                  View on Upwork &rarr;
                </a>
              </div>
              <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)] mt-6" />
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren staggerDelay={100}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {upworkServices.map((service, i) => (
                <div
                  key={service.label}
                  className={`scroll-reveal-child py-8 ${
                    i < upworkServices.length - 1
                      ? 'md:border-r md:border-[rgba(245,245,240,0.08)]'
                      : ''
                  } ${i > 0 ? 'md:pl-10' : ''} ${
                    i < upworkServices.length - 1 ? 'md:pr-10' : ''
                  } border-t border-[rgba(245,245,240,0.08)] md:border-t-0`}
                >
                  <h3 className="font-narrator text-sm font-medium tracking-[0.1em] text-[#F5F5F0] mb-3">
                    {service.label}
                  </h3>
                  <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 text-center">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
              06 — Let&apos;s Work Together
            </span>
            <h2 className="sr-only">Hire a Remote NextJS Developer</h2>
            <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)] mx-auto mb-12 md:mb-16" />
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="font-artist text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] text-[#F5F5F0] mb-12 md:mb-16 max-w-4xl mx-auto">
              Let&apos;s build <em className="italic">something.</em>
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:gap-10">
              {/* Email */}
              <a
                href="mailto:itsme@byronpantoja.com"
                className="font-narrator text-xl md:text-2xl lg:text-3xl text-[#E8E4DD] border-b border-[rgba(245,245,240,0.15)] hover:border-[#C4A882] pb-2 transition-colors duration-500"
              >
                itsme@byronpantoja.com
              </a>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="mailto:itsme@byronpantoja.com"
                  className="inline-block bg-[#C4A882] text-[#0C0C0C] px-10 py-4 font-engineer text-xs tracking-[0.25em] uppercase hover:bg-[#F5F5F0] transition-colors duration-300"
                >
                  Send an Email
                </a>
                <a
                  href="https://mockup-dashboard-baseline.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[rgba(245,245,240,0.15)] text-[#E8E4DD] px-10 py-4 font-engineer text-xs tracking-[0.25em] uppercase hover:border-[#C4A882] hover:text-[#C4A882] transition-colors duration-300"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-narrator text-xs text-[#8A8A85]">
            &copy; 2026 Byron Pantoja
          </span>
          <span className="font-engineer text-[0.65rem] tracking-[0.1em] text-[#8A8A85]/60 uppercase">
            Built with NextJS + Tailwind CSS
          </span>
        </div>
      </footer>
    </>
  )
}
