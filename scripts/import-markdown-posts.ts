/**
 * Script to import markdown blog posts into the blog-posts.json file
 * Run with: npx tsx scripts/import-markdown-posts.ts
 */

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_POSTS_DIR = path.join(process.cwd(), 'data', 'blog-posts')
const OUTPUT_FILE = path.join(process.cwd(), 'data', 'blog-posts.json')

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  content: string
  excerpt?: string
}

async function importMarkdownPosts() {
  try {
    console.log('Starting markdown blog post import...')
    console.log('Reading from:', BLOG_POSTS_DIR)

    // Read all markdown files
    const files = await fs.readdir(BLOG_POSTS_DIR)
    const markdownFiles = files.filter(file => file.endsWith('.md'))

    console.log(`Found ${markdownFiles.length} markdown files`)

    const posts: BlogPost[] = []

    for (const file of markdownFiles) {
      const filePath = path.join(BLOG_POSTS_DIR, file)
      const fileContent = await fs.readFile(filePath, 'utf8')

      // Parse frontmatter
      const { data, content } = matter(fileContent)

      // Convert markdown to HTML
      const htmlContent = await marked(content)

      // Create excerpt (first 200 characters of content)
      const plainText = content.replace(/[#*`]/g, '').trim()
      const excerpt = plainText.substring(0, 200) + '...'

      const post: BlogPost = {
        slug: data.slug || file.replace('.md', ''),
        title: data.title || 'Untitled',
        description: data.description || excerpt,
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category || 'Uncategorized',
        content: htmlContent,
        excerpt: excerpt,
      }

      posts.push(post)
      console.log(`✓ Imported: ${post.title}`)
    }

    // Sort by date (newest first)
    posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    // Create output data structure
    const outputData = {
      posts,
      lastSync: new Date().toISOString(),
      syncCount: 1,
    }

    // Ensure data directory exists
    await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true })

    // Write to JSON file
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(outputData, null, 2), 'utf8')

    console.log('\n✅ Import complete!')
    console.log(`📁 Output: ${OUTPUT_FILE}`)
    console.log(`📊 Total posts: ${posts.length}`)
    console.log('\nImported posts:')
    posts.forEach(post => {
      console.log(`  - ${post.title} (${post.date})`)
    })

  } catch (error) {
    console.error('❌ Error importing markdown posts:', error)
    process.exit(1)
  }
}

// Run the import
importMarkdownPosts()
