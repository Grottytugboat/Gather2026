import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://usegather.com.au'

  // Static pages
  const staticPages = [
    '',
    '/lightspeed-klaviyo-integration',
    '/pos-to-klaviyo',
    '/zapier-alternative',
    '/agency-tools',
    '/blog',
  ]

  // Blog posts
  const blogPosts = [
    '/blog/how-to-sync-lightspeed-retail-x-with-klaviyo',
    '/blog/5-common-customer-data-sync-problems',
    '/blog/importance-of-in-store-data-ecommerce-retention',
    '/blog/best-ways-connect-pos-to-klaviyo',
  ]

  const routes = [...staticPages, ...blogPosts].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/blog') ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route.startsWith('/blog') ? 0.8 : 0.9,
  }))

  return routes
}
