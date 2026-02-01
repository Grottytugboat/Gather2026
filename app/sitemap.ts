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
    '/integrations',
    '/contact',
    '/blog',
  ]

  // Location pages (for local SEO)
  const locationPages = [
    '/locations',
    '/locations/sydney',
    '/locations/melbourne',
    '/locations/brisbane',
    '/locations/perth',
    '/locations/adelaide',
    '/locations/gold-coast',
    '/locations/canberra',
    '/locations/hobart',
    '/locations/newcastle',
  ]

  // Integration pages
  const integrationPages = [
    '/integrations/klaviyo',
    '/integrations/lightspeed',
    '/integrations/vend',
    '/integrations/square',
    '/integrations/shopify',
    '/integrations/cin7',
    '/integrations/mailchimp',
    '/integrations/omnisend',
    '/integrations/attentive',
    '/integrations/postscript',
  ]

  // Blog posts
  const blogPosts = [
    '/blog/how-to-sync-lightspeed-retail-x-with-klaviyo',
    '/blog/5-common-customer-data-sync-problems',
    '/blog/importance-of-in-store-data-ecommerce-retention',
    '/blog/best-ways-connect-pos-to-klaviyo',
  ]

  const routes = [
    ...staticPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.9,
    })),
    ...locationPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '/locations' ? 0.9 : 0.8,
    })),
    ...integrationPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogPosts.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  return routes
}
