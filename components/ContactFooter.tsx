import { ScrollReveal } from './ScrollReveal'

export function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="pt-24 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 text-center">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4">
              04 — Let&apos;s Work Together
            </h2>
            <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)] mx-auto mb-12 md:mb-16" />
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="font-artist text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] text-[#F5F5F0] mb-12 md:mb-16 max-w-4xl mx-auto">
              Available for <em className="italic">remote</em> work.
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:gap-10">
              {/* Email */}
              <a
                href="mailto:byronpantoja@gmail.com"
                className="font-narrator text-xl md:text-2xl lg:text-3xl text-[#E8E4DD] border-b border-[rgba(245,245,240,0.15)] hover:border-[#C4A882] pb-2 transition-colors duration-500"
              >
                byronpantoja@gmail.com
              </a>

              {/* Social links */}
              <div className="flex gap-8">
                <a
                  href="https://linkedin.com/in/byronpantoja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-narrator text-sm text-[#8A8A85] hover:text-[#E8E4DD] transition-colors duration-300"
                >
                  LinkedIn &rarr;
                </a>
                <a
                  href="https://github.com/byronPantoja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-narrator text-sm text-[#8A8A85] hover:text-[#E8E4DD] transition-colors duration-300"
                >
                  GitHub &rarr;
                </a>
              </div>

              {/* CTA button */}
              <a
                href="mailto:byronpantoja@gmail.com"
                className="inline-block bg-[#C4A882] text-[#0C0C0C] px-10 py-4 font-engineer text-xs tracking-[0.25em] uppercase hover:bg-[#F5F5F0] transition-colors duration-300 mt-4"
              >
                Get in Touch
              </a>
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
