import { NextRequest, NextResponse } from 'next/server'
import { fetchBlogListing, fetchBlogPost } from '@/lib/framer-blog-parser'
import {
  getAllBlogPosts,
  upsertBlogPost,
  updateSyncMetadata,
} from '@/lib/blog-storage'

/**
 * Delay function to respect rate limits
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * POST /api/blog/sync
 * Syncs blog posts from Framer site
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add authentication check here
    // const authHeader = request.headers.get('authorization')
    // if (authHeader !== `Bearer ${process.env.SYNC_SECRET}`) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    console.log('Starting blog sync...')

    // Fetch blog listing
    const listing = await fetchBlogListing()
    console.log(`Found ${listing.length} posts in listing`)

    // Get existing posts to avoid duplicates
    const existingPosts = await getAllBlogPosts()
    const existingSlugs = new Set(existingPosts.map((p) => p.slug))

    let newPosts = 0
    let updatedPosts = 0
    let errors = 0

    // Process each post
    for (const postInfo of listing) {
      try {
        // Fetch full post content
        const post = await fetchBlogPost(postInfo.url)

        if (!post) {
          console.warn(`Failed to fetch post: ${postInfo.url}`)
          errors++
          continue
        }

        // Check if this is a new post or update
        const isNew = !existingSlugs.has(post.slug)

        // Save post
        await upsertBlogPost(post)

        if (isNew) {
          newPosts++
          console.log(`Added new post: ${post.title}`)
        } else {
          updatedPosts++
          console.log(`Updated post: ${post.title}`)
        }

        // Rate limiting: wait 1 second between requests
        await delay(1000)
      } catch (error) {
        console.error(`Error processing post ${postInfo.url}:`, error)
        errors++
      }
    }

    // Update sync metadata
    await updateSyncMetadata()

    const result = {
      success: true,
      message: 'Blog sync completed',
      stats: {
        total: listing.length,
        new: newPosts,
        updated: updatedPosts,
        errors,
      },
    }

    console.log('Blog sync completed:', result)

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error('Blog sync error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/blog/sync
 * Get sync status and stats
 */
export async function GET() {
  try {
    const posts = await getAllBlogPosts()
    const { readBlogPosts } = await import('@/lib/blog-storage')
    const data = await readBlogPosts()

    return NextResponse.json({
      totalPosts: posts.length,
      lastSync: data.lastSync,
      syncCount: data.syncCount,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
