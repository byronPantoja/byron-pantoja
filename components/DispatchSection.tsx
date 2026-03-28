import Link from 'next/link'
import { getLatestPosts } from '@/lib/dispatch'
import { ScrollReveal } from './ScrollReveal'

export function DispatchSection() {
  const posts = getLatestPosts(3)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20 flex justify-between items-end">
            <div>
              <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
                03 — Dispatch
              </span>
              <h2 className="sr-only">Latest Articles and Build Logs</h2>
              <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)]" />
            </div>
            <Link
              href="/dispatch"
              className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase hover:text-[#E8E4DD] transition-colors duration-300"
            >
              View all &rarr;
            </Link>
          </div>
        </ScrollReveal>

        {/* Posts grid */}
        <ScrollReveal staggerChildren staggerDelay={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <Link
                key={post.meta.slug}
                href={`/dispatch/${post.meta.slug}`}
                className="scroll-reveal-child group block"
              >
                <time className="font-engineer text-[0.6rem] tracking-[0.15em] text-[#8A8A85]/70 uppercase block mb-3">
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="font-artist text-lg md:text-xl text-[#F5F5F0] group-hover:text-[#E8E4DD] transition-colors duration-300 mb-3 leading-snug">
                  {post.meta.title}
                </h3>
                <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed line-clamp-2 mb-4">
                  {post.meta.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.meta.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-engineer text-[0.55rem] tracking-wider uppercase text-[#8A8A85]/50 border border-[rgba(245,245,240,0.06)] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
