import * as cheerio from 'cheerio'
import { format, parse } from 'date-fns'
import type { BlogPost } from '@/types/blog'

const FRAMER_BLOG_URL = 'https://www.klavx.com.au/blog'

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100) // Limit length
}

/**
 * Parse date from various formats
 */
function parseDate(dateString: string): string {
  try {
    // Try common date formats
    const formats = [
      'MMM d, yyyy',
      'MMMM d, yyyy',
      'MMM dd, yyyy',
      'yyyy-MM-dd',
      'd MMM yyyy',
      'dd MMM yyyy',
    ]

    for (const fmt of formats) {
      try {
        const parsed = parse(dateString.trim(), fmt, new Date())
        if (!isNaN(parsed.getTime())) {
          return format(parsed, 'yyyy-MM-dd')
        }
      } catch {
        // Try next format
      }
    }

    // Fallback: try to parse as-is
    const date = new Date(dateString)
    if (!isNaN(date.getTime())) {
      return format(date, 'yyyy-MM-dd')
    }
  } catch {
    // If all else fails, use today's date
  }

  return format(new Date(), 'yyyy-MM-dd')
}

/**
 * Extract description from content (first paragraph or excerpt)
 */
function extractDescription(html: string, maxLength: number = 200): string {
  const $ = cheerio.load(html)
  const firstParagraph = $('p').first().text().trim()
  
  if (firstParagraph) {
    return firstParagraph.length > maxLength
      ? firstParagraph.substring(0, maxLength) + '...'
      : firstParagraph
  }

  // Fallback: extract any text
  const text = $.text().trim()
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

/**
 * Determine category from title or content
 */
function determineCategory(title: string, content: string): string {
  const titleLower = title.toLowerCase()
  const contentLower = content.toLowerCase()

  // Category detection logic
  if (titleLower.includes('case study') || titleLower.includes('case-study')) {
    return 'Case Studies'
  }
  if (titleLower.includes('how to') || titleLower.includes('guide') || titleLower.includes('step-by-step')) {
    return 'Integration Guides'
  }
  if (titleLower.includes('vs') || titleLower.includes('compare') || titleLower.includes('comparison')) {
    return 'Comparisons'
  }
  if (titleLower.includes('problem') || titleLower.includes('issue') || titleLower.includes('troubleshoot')) {
    return 'Troubleshooting'
  }
  if (titleLower.includes('strategy') || titleLower.includes('marketing') || titleLower.includes('retention')) {
    return 'Strategy'
  }

  return 'General'
}

/**
 * Convert Framer HTML to our blog format
 */
function convertHtmlToBlogFormat(html: string): string {
  const $ = cheerio.load(html)

  // Remove scripts and styles
  $('script, style').remove()

  // Convert headings
  $('h1').each((_, el) => {
    $(el).replaceWith(`<h2 class="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">${$(el).html()}</h2>`)
  })
  $('h2').each((_, el) => {
    $(el).replaceWith(`<h2 class="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">${$(el).html()}</h2>`)
  })
  $('h3').each((_, el) => {
    $(el).replaceWith(`<h3 class="text-2xl font-black text-black dark:text-white mb-3 mt-6 uppercase">${$(el).html()}</h3>`)
  })

  // Convert paragraphs
  $('p').each((_, el) => {
    const existingClasses = $(el).attr('class') || ''
    if (!existingClasses.includes('text-lg')) {
      $(el).addClass('text-lg text-black dark:text-white leading-relaxed font-bold mb-6')
    }
  })

  // Convert lists
  $('ul').each((_, el) => {
    $(el).addClass('list-disc list-inside space-y-3 mb-6 text-lg text-black dark:text-white font-bold ml-4')
  })
  $('ol').each((_, el) => {
    $(el).addClass('list-decimal list-inside space-y-4 mb-6 text-lg text-black dark:text-white font-bold ml-4')
  })

  // Convert images
  $('img').each((_, el) => {
    const src = $(el).attr('src') || ''
    const alt = $(el).attr('alt') || ''
    $(el).replaceWith(
      `<div class="mb-8"><img src="${src}" alt="${alt}" class="w-full h-auto rounded-lg border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark" /></div>`
    )
  })

  // Convert links (preserve external links)
  $('a').each((_, el) => {
    const href = $(el).attr('href') || ''
    const isExternal = href.startsWith('http')
    if (isExternal) {
      $(el).attr('target', '_blank')
      $(el).attr('rel', 'noopener noreferrer')
    }
    $(el).addClass('text-gather-green dark:text-gather-green hover:underline')
  })

  // Convert strong/bold
  $('strong, b').each((_, el) => {
    $(el).wrap('<strong></strong>')
  })

  return $.html()
}

/**
 * Fetch and parse the Framer blog listing page
 */
export async function fetchBlogListing(): Promise<Array<{ title: string; url: string; date: string }>> {
  try {
    const response = await fetch(FRAMER_BLOG_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blog listing: ${response.statusText}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)
    const posts: Array<{ title: string; url: string; date: string }> = []

    // Find all blog post links
    // Framer blog links typically have dates in the text
    // Look for links that contain dates in various formats
    $('a').each((_, el) => {
      const linkText = $(el).text().trim()
      const href = $(el).attr('href') || ''
      
      // Skip if not a blog link
      if (!href.includes('/blog/') && !href.includes('blog')) {
        return
      }
      
      // Look for dates in various formats: "Jan 8, 2026", "January 8, 2026", etc.
      const datePatterns = [
        /([A-Z][a-z]{2,}\s+\d{1,2},?\s+\d{4})/,  // "Jan 8, 2026"
        /([A-Z][a-z]+\s+\d{1,2},?\s+\d{4})/,     // "January 8, 2026"
        /(\d{1,2}\s+[A-Z][a-z]+\s+\d{4})/,       // "8 Jan 2026"
      ]
      
      let dateMatch: RegExpMatchArray | null = null
      for (const pattern of datePatterns) {
        const match = linkText.match(pattern)
        if (match) {
          dateMatch = match
          break
        }
      }
      
      if (dateMatch) {
        const fullUrl = href.startsWith('http') ? href : `https://www.klavx.com.au${href}`
        // Extract title by removing the date
        const title = linkText.replace(dateMatch[0], '').trim()
        const date = dateMatch[1]

        if (title && date && title.length > 10) { // Ensure title is meaningful
          // Avoid duplicates
          if (!posts.some(p => p.url === fullUrl || p.title === title)) {
            posts.push({
              title,
              url: fullUrl,
              date,
            })
          }
        }
      }
    })

    return posts
  } catch (error) {
    console.error('Error fetching blog listing:', error)
    throw error
  }
}

/**
 * Fetch and parse a single blog post
 */
export async function fetchBlogPost(url: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.statusText}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    // Extract title
    const title = $('h1').first().text().trim() || $('title').text().trim()
    if (!title) {
      return null
    }

    // Extract date (try multiple selectors)
    let dateString = ''
    $('time, .date, [class*="date"]').each((_, el) => {
      const text = $(el).text().trim()
      if (text && text.match(/\d{4}/)) {
        dateString = text
        return false // Break
      }
    })

    // If no date found, try to extract from page text
    if (!dateString) {
      const bodyText = $('body').text()
      const dateMatch = bodyText.match(/([A-Z][a-z]{2,}\s+\d{1,2},?\s+\d{4})/)
      if (dateMatch) {
        dateString = dateMatch[1]
      }
    }

    // Extract main content
    const contentSelectors = [
      'article',
      '[class*="content"]',
      '[class*="post"]',
      'main',
    ]

    let content = ''
    for (const selector of contentSelectors) {
      const element = $(selector).first()
      if (element.length > 0) {
        content = element.html() || ''
        break
      }
    }

    // Fallback to body if no content found
    if (!content) {
      // Remove header, nav, footer
      $('header, nav, footer, script, style').remove()
      content = $('body').html() || ''
    }

    // Extract featured image
    const imageUrl =
      $('meta[property="og:image"]').attr('content') ||
      $('img').first().attr('src') ||
      undefined

    // Convert HTML to our format
    const formattedContent = convertHtmlToBlogFormat(content)
    const description = extractDescription(formattedContent)
    const category = determineCategory(title, formattedContent)
    const slug = generateSlug(title)
    const date = parseDate(dateString)

    return {
      slug,
      title,
      description,
      date,
      category,
      content: formattedContent,
      url,
      imageUrl,
    }
  } catch (error) {
    console.error(`Error fetching blog post from ${url}:`, error)
    return null
  }
}
