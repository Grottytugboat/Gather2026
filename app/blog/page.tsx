import type { Metadata } from 'next'
import Link from 'next/link'
import { defaultMetadata } from '../metadata'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Ecommerce Data Integration Insights | Gather',
  description: 'Expert insights on Lightspeed Klaviyo integration, POS data sync, omnichannel marketing, and ecommerce data integration best practices.',
}

// Blog post metadata
const blogPosts = [
  {
    slug: 'lightspeed-to-klaviyo-integration-showdown-gather-vs-native-klaviyo-sync',
    title: 'Lightspeed to Klaviyo Integration Showdown: Gather vs. Native Klaviyo Sync',
    description: 'Compare Gather vs. Klaviyo\'s native Lightspeed integration head-to-head – from sync speed and data depth to support and ease of use.',
    date: '2024-12-19',
    category: 'Comparisons',
  },
  {
    slug: 'how-to-sync-lightspeed-retail-x-with-klaviyo',
    title: 'How to Sync Lightspeed Retail X with Klaviyo (Without Losing Your Mind)',
    description: 'A complete step-by-step guide to connecting Lightspeed X-Series to Klaviyo. Compare manual methods, Zapier, and Gather solutions.',
    date: '2024-01-15',
    category: 'Integration Guides',
  },
  {
    slug: '5-common-customer-data-sync-problems',
    title: '5 Common Customer Data Sync Problems (and How to Solve Them)',
    description: 'Learn how to fix duplicate data, sync delays, API limits, and other common issues when syncing POS data to email marketing platforms.',
    date: '2024-01-10',
    category: 'Troubleshooting',
  },
  {
    slug: 'importance-of-in-store-data-ecommerce-retention',
    title: 'The Importance of In-Store Data in E-Commerce Retention Marketing',
    description: 'Why unifying offline and online customer data is critical for retention marketing. How in-store purchase data improves email campaign performance.',
    date: '2024-01-05',
    category: 'Strategy',
  },
  {
    slug: 'best-ways-connect-pos-to-klaviyo',
    title: 'Best Ways to Connect Your POS to Klaviyo: An Expert Review',
    description: 'Compare native integrations, Zapier, Alloy Automation, Gather, and custom API solutions for syncing POS data to Klaviyo.',
    date: '2024-01-01',
    category: 'Comparisons',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight">
            Gather Blog
          </h1>
          <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
            Expert insights on ecommerce data integration, Lightspeed Klaviyo sync, 
            and omnichannel marketing strategies.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal-xl dark:hover:shadow-brutal-xl-dark transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gather-green dark:bg-gather-green border-2 border-black dark:border-white text-sm font-black text-black dark:text-white uppercase">
                  {post.category}
                </span>
                <time className="text-sm font-bold text-black dark:text-white">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-4 uppercase">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-gather-green dark:hover:text-gather-green transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gather-green dark:bg-gather-green text-black dark:text-white font-black uppercase border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark transition-all"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
