import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/dispatch'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.meta.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.meta.title} — Dispatch | Byron Pantoja`,
    description: post.meta.description,
    alternates: { canonical: `/dispatch/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
    },
  }
}

export default async function DispatchPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="relative z-10">
      <main className="pt-32 pb-24 px-6 md:px-12">
        <article className="max-w-[720px] mx-auto">
          {/* Back link */}
          <Link
            href="/dispatch"
            className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase hover:text-[#E8E4DD] transition-colors duration-300 mb-12 inline-block"
          >
            &larr; Back to Dispatch
          </Link>

          {/* Header */}
          <header className="mb-12">
            <time className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase block mb-4">
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="font-artist text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.15] text-[#F5F5F0] mb-6">
              {post.meta.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-engineer text-[0.6rem] tracking-wider uppercase text-[#8A8A85]/70 border border-[rgba(245,245,240,0.08)] px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="w-full h-[1px] bg-[rgba(245,245,240,0.08)] mb-12" />

          {/* MDX Content */}
          <div className="dispatch-prose">
            <MDXRemote source={post.content} />
          </div>

          <div className="w-full h-[1px] bg-[rgba(245,245,240,0.08)] mt-16 mb-8" />

          {/* Footer nav */}
          <Link
            href="/dispatch"
            className="font-engineer text-[0.65rem] tracking-[0.15em] text-[#8A8A85] uppercase hover:text-[#E8E4DD] transition-colors duration-300"
          >
            &larr; All posts
          </Link>
        </article>
      </main>
    </div>
  )
}
