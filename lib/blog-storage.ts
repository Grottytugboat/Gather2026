import { promises as fs } from 'fs'
import path from 'path'
import type { BlogPost, BlogPostsData } from '@/types/blog'

const DATA_DIR = path.join(process.cwd(), 'data')
const BLOG_POSTS_FILE = path.join(DATA_DIR, 'blog-posts.json')

/**
 * Ensure the data directory exists
 */
async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch (error) {
    // Directory might already exist, that's fine
  }
}

/**
 * Read blog posts from JSON file
 */
export async function readBlogPosts(): Promise<BlogPostsData> {
  try {
    await ensureDataDir()
    const fileContents = await fs.readFile(BLOG_POSTS_FILE, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    // File doesn't exist yet, return empty structure
    return {
      posts: [],
      lastSync: undefined,
      syncCount: 0,
    }
  }
}

/**
 * Write blog posts to JSON file
 */
export async function writeBlogPosts(data: BlogPostsData): Promise<void> {
  await ensureDataDir()
  await fs.writeFile(BLOG_POSTS_FILE, JSON.stringify(data, null, 2), 'utf8')
}

/**
 * Get all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await readBlogPosts()
  return data.posts
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

/**
 * Add or update a blog post
 */
export async function upsertBlogPost(post: BlogPost): Promise<void> {
  const data = await readBlogPosts()
  const existingIndex = data.posts.findIndex((p) => p.slug === post.slug)

  if (existingIndex >= 0) {
    // Update existing post
    data.posts[existingIndex] = post
  } else {
    // Add new post
    data.posts.push(post)
  }

  // Sort posts by date (newest first)
  data.posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  await writeBlogPosts(data)
}

/**
 * Update sync metadata
 */
export async function updateSyncMetadata(): Promise<void> {
  const data = await readBlogPosts()
  data.lastSync = new Date().toISOString()
  data.syncCount = (data.syncCount || 0) + 1
  await writeBlogPosts(data)
}
