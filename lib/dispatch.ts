import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: string
  slug: string
}

export interface Post {
  meta: PostMeta
  content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'dispatch')

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      meta: data as PostMeta,
      content,
    }
  })

  return posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.meta.slug === slug)
}

export function getLatestPosts(count: number): Post[] {
  return getAllPosts().slice(0, count)
}
