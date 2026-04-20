import { ScrollReveal } from './ScrollReveal'

const deliverables = [
  {
    number: '01',
    label: 'Website',
    description:
      'Built with Next.js and deployed to Vercel. Clean GitHub repo with a README. Production-ready from day one.',
  },
  {
    number: '02',
    label: 'LLM-Wiki',
    description:
      'A custom Obsidian knowledge base built around your site, content, tone, and business. Not a template — yours specifically.',
  },
  {
    number: '03',
    label: 'Claude Code Setup',
    description:
      'Claude Code CLI installed on your computer and pointed at your wiki. Claude already knows your business when you open it.',
  },
  {
    number: '04',
    label: 'Teaching Session',
    description:
      'A hands-on walkthrough of the full system. You leave having used it yourself — updating copy, writing posts, answering customer questions with AI.',
  },
]

export function WhatYouGetSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#161616]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
              Every Project Includes
            </span>
            <h2 className="font-artist text-[2rem] md:text-[2.5rem] leading-[1.2] text-[#F5F5F0] max-w-[600px]">
              A website. An AI setup.{' '}
              <em className="italic">A system you own.</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren staggerDelay={100}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {deliverables.map((item, i) => (
              <div
                key={item.number}
                className={`scroll-reveal-child py-8 ${
                  i < deliverables.length - 1
                    ? 'md:border-r md:border-[rgba(245,245,240,0.08)]'
                    : ''
                } ${i > 0 ? 'md:pl-10' : ''} ${
                  i < deliverables.length - 1 ? 'md:pr-10' : ''
                } border-t border-[rgba(245,245,240,0.08)] md:border-t-0`}
              >
                <span className="font-artist italic text-3xl text-[#8A8A85]/30 block mb-4">
                  {item.number}
                </span>
                <h3 className="font-narrator text-sm font-medium tracking-[0.15em] text-[#F5F5F0] uppercase mb-3">
                  {item.label}
                </h3>
                <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 pt-8 border-t border-[rgba(245,245,240,0.08)]">
            <p className="font-engineer text-xs tracking-[0.2em] text-[#8A8A85] uppercase">
              All you need after that —{' '}
              <span className="text-[#C4A882]">Claude Pro · $20 / month</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
