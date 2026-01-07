import React from 'react'

/**
 * Convert HTML string to React components
 * This is a simplified version - in production you might want to use a library like html-react-parser
 */
export function renderBlogContent(html: string): React.ReactNode {
  // For now, we'll use dangerouslySetInnerHTML
  // In a production app, you might want to parse and sanitize the HTML
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
