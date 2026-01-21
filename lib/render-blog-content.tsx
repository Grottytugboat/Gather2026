import React from 'react'

/**
 * Render blog content with proper styling for Tailwind/brutalist design
 */
export function renderBlogContent(html: string): React.ReactNode {
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        // Global styles for the blog content container
      }}
    />
  )
}
