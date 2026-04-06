import { ScrollReveal } from './ScrollReveal'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <ScrollReveal>
          {/* Headline */}
          <h1 className="font-artist text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] mb-10 text-[#F5F5F0] max-w-[900px]">
            I build websites fast.{' '}
            <em className="italic">Then I show you how to run them.</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          {/* Tech descriptor */}
          <div className="font-engineer text-xs md:text-sm tracking-[0.2em] text-[#8A8A85] mb-12 flex flex-wrap gap-x-4 gap-y-2 uppercase">
            <span>NextJS</span>
            <span className="text-[rgba(245,245,240,0.2)]">&middot;</span>
            <span>React</span>
            <span className="text-[rgba(245,245,240,0.2)]">&middot;</span>
            <span>Tailwind CSS</span>
            <span className="text-[rgba(245,245,240,0.2)]">&middot;</span>
            <span>Shopify</span>
            <span className="text-[rgba(245,245,240,0.2)]">&middot;</span>
            <span>Supabase</span>
          </div>
        </ScrollReveal>

        {/* Bottom row: bio + scroll indicator */}
        <div className="flex justify-between items-end">
          <ScrollReveal className="max-w-md">
            <p className="font-narrator text-sm md:text-base text-[#8A8A85] leading-relaxed">
              14 years running a social enterprise taught me what a website
              needs to actually do. Now I build full-stack apps with AI — and
              hand you the knowledge to make changes yourself.
            </p>
          </ScrollReveal>

          {/* Scroll indicator — desktop only */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <div className="scroll-line">
              <div className="scroll-dot" />
            </div>
            <span className="font-engineer text-[0.6rem] tracking-[0.2em] text-[#8A8A85] uppercase">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
