import { ScrollReveal } from './ScrollReveal'

const steps = [
  {
    number: '01',
    label: 'Plan',
    description:
      'Define scope, architecture, and design direction before touching code.',
  },
  {
    number: '02',
    label: 'Build',
    description:
      'Component-first development with AI-assisted scaffolding. Ship fast without cutting quality.',
  },
  {
    number: '03',
    label: 'Ship',
    description:
      'Deploy on Vercel, write documentation, hand off clean repos with READMEs.',
  },
]

export function ApproachSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
              04 — How I Work
            </span>
            <h2 className="sr-only">Web Development Process</h2>
            <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)]" />
          </div>
        </ScrollReveal>

        {/* Three columns */}
        <ScrollReveal staggerChildren staggerDelay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`scroll-reveal-child ${
                  i < steps.length - 1
                    ? 'md:border-r md:border-[rgba(245,245,240,0.08)]'
                    : ''
                } ${i > 0 ? 'md:pl-12' : ''} ${
                  i < steps.length - 1 ? 'md:pr-12' : ''
                }`}
              >
                <span className="font-artist italic text-4xl md:text-5xl text-[#8A8A85]/40 block mb-4">
                  {step.number}
                </span>
                <h4 className="font-narrator text-sm font-medium tracking-[0.15em] text-[#F5F5F0] uppercase mb-4">
                  {step.label}
                </h4>
                <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
