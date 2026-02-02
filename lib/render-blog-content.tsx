import React from 'react'
import { marked } from 'marked'

// Configure marked for proper rendering
marked.setOptions({
  gfm: true,
  breaks: true,
})

/**
 * Render blog content with proper styling
 * Converts markdown to HTML if needed
 */
export function renderBlogContent(content: string): React.ReactNode {
  // Check if content looks like markdown (has ## headers or other markdown syntax)
  const looksLikeMarkdown = content.includes('## ') || content.includes('# ') || content.includes('**') || content.startsWith('#')
  
  // Convert markdown to HTML if needed
  const html = looksLikeMarkdown ? marked.parse(content) : content
  
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  )
}
