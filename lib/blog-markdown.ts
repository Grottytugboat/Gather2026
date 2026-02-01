import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'data', 'blog-posts')

/**
 * Get all markdown blog posts from the data/blog-posts directory
 */
export async function getAllMarkdownPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(BLOG_DIR)
    const mdFiles = files.filter((f) => f.endsWith('.md'))

    const posts: BlogPost[] = []

    for (const file of mdFiles) {
      const filePath = path.join(BLOG_DIR, file)
      const content = await fs.readFile(filePath, 'utf8')
      const { data, content: markdown } = matter(content)

      // Extract slug from filename (remove .md extension)
      const slug = file.replace(/\.md$/, '')

      posts.push({
        slug: data.slug || slug,
        title: data.title || 'Untitled',
        description: data.excerpt || data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category || data.tags?.[0] || 'General',
        content: markdown,
      })
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error('Error reading markdown posts:', error)
    return []
  }
}

/**
 * Get a single markdown post by slug
 */
export async function getMarkdownPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`)
    const content = await fs.readFile(filePath, 'utf8')
    const { data, content: markdown } = matter(content)

    return {
      slug: data.slug || slug,
      title: data.title || 'Untitled',
      description: data.excerpt || data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || data.tags?.[0] || 'General',
      content: markdown,
    }
  } catch (error) {
    // File doesn't exist
    return null
  }
}
