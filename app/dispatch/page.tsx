import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/dispatch'
import { ScrollReveal } from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Dispatch — Byron Pantoja',
  description:
    'Technical build logs, case studies, and thinking on NextJS, React, and AI-assisted web development.',
  alternates: { canonical: '/dispatch' },
}

export default function DispatchPage() {
  const posts = getAllPosts()

  return (
    <div className="relative z-10">
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <span className="font-engineer text-xs tracking-[0.3em] text-[#8A8A85] uppercase mb-4 block">
              Dispatch
            </span>
            <h1 className="font-artist text-[2.5rem] md:text-[4rem] leading-[1.1] text-[#F5F5F0] mb-6">
              Build logs, case studies, and technical thinking.
            </h1>
            <div className="w-[60px] h-[1px] bg-[rgba(245,245,240,0.15)] mb-16" />
          </ScrollReveal>

          <div className="space-y-16">
            {posts.map((post) => (
              <ScrollReveal key={post.meta.slug}>
                <article>
                  <Link
                    href={`/dispatch/${post.meta.slug}`}
                    className="group block"
                  >
                    <time className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase block mb-3">
                      {new Date(post.meta.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="font-artist text-xl md:text-2xl text-[#F5F5F0] group-hover:text-[#E8E4DD] transition-colors duration-300 mb-3">
                      {post.meta.title}
                    </h2>
                    <p className="font-narrator text-sm text-[#8A8A85] leading-relaxed mb-4 line-clamp-2">
                      {post.meta.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.meta.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-engineer text-[0.6rem] tracking-wider uppercase text-[#8A8A85]/70 border border-[rgba(245,245,240,0.08)] px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
                <div className="mt-16 w-full h-[1px] bg-[rgba(245,245,240,0.06)]" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
