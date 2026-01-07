export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  content: string // HTML content that will be converted to React components
  url?: string // Original Framer URL
  imageUrl?: string // Featured image URL
}

export interface BlogPostsData {
  posts: BlogPost[]
  lastSync?: string
  syncCount?: number
}

export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  date: string
  category: string
}
