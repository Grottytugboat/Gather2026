import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { defaultMetadata, generateStructuredData } from '../../metadata'

// Blog post data - in a real app, this would come from a CMS or markdown files
const blogPosts: Record<string, {
  title: string
  description: string
  date: string
  category: string
  content: React.ReactNode
}> = {
  'how-to-sync-lightspeed-retail-x-with-klaviyo': {
    title: 'How to Sync Lightspeed Retail X with Klaviyo (Without Losing Your Mind)',
    description: 'A complete step-by-step guide to connecting Lightspeed X-Series to Klaviyo. Compare manual methods, Zapier, and Gather solutions.',
    date: '2024-01-15',
    category: 'Integration Guides',
    content: (
      <>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          If you're trying to connect Lightspeed Retail X-Series (formerly Vend) to Klaviyo, you've probably discovered that Klaviyo's native integration doesn't support X-Series. This leaves you with a few options, each with their own headaches. Let's break down the best ways to sync Lightspeed X to Klaviyo.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">The Problem: No Native Integration</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Klaviyo's native Lightspeed integration does not work with Lightspeed Retail X. For Lightspeed Retail X, you're on your own. This is a common frustration in the Klaviyo community forums, where merchants and agencies have been asking for X-Series support for years.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Option 1: Manual Export/Import (Not Recommended)</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          You could manually export customer data from Lightspeed and import it to Klaviyo. This is tedious, error-prone, and doesn't scale. You'd need to do this regularly to keep data current, which defeats the purpose of automation.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Option 2: Zapier (Works, But Has Limitations)</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Zapier officially supports Lightspeed X-Series triggers. You can set up a Zap like "New Lightspeed X-Series Customer → Add to Klaviyo." However, this approach has several drawbacks:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-black dark:text-white font-bold ml-4">
          <li>Manual setup required for each workflow</li>
          <li>Polling delays (not real-time)</li>
          <li>Per-task pricing that scales with usage</li>
          <li>No automatic duplicate prevention</li>
          <li>Requires monitoring and maintenance</li>
        </ul>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Option 3: Gather (Recommended)</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Gather is purpose-built for Lightspeed to Klaviyo integration. Here's how to set it up:
        </p>
        <ol className="list-decimal list-inside space-y-4 mb-6 text-lg text-black dark:text-white font-bold ml-4">
          <li>Sign up for Gather (no credit card required)</li>
          <li>Connect your Lightspeed X-Series account via OAuth</li>
          <li>Connect your Klaviyo account</li>
          <li>Configure sync preferences (Gather's smart defaults handle most cases)</li>
          <li>Done! Data syncs in real-time automatically</li>
        </ol>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Gather syncs in real-time (within seconds), prevents duplicates automatically, and offers retail-specific features like filtering out wholesale sales. It's designed to "just work" without constant monitoring.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Which Option Should You Choose?</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          If you're managing one store and don't mind manual maintenance, Zapier might work. But if you're an agency managing multiple clients, or you want real-time sync and reliable automation, Gather is the better choice. It's built specifically for this use case, and it shows in the setup time and reliability.
        </p>
      </>
    ),
  },
  '5-common-customer-data-sync-problems': {
    title: '5 Common Customer Data Sync Problems (and How to Solve Them)',
    description: 'Learn how to fix duplicate data, sync delays, API limits, and other common issues when syncing POS data to email marketing platforms.',
    date: '2024-01-10',
    category: 'Troubleshooting',
    content: (
      <>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Syncing customer data from your POS to email marketing platforms like Klaviyo should be straightforward, but it rarely is. Here are the five most common problems agencies face and how to solve them.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">1. Duplicate Customer Profiles</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Problem:</strong> When syncing both Shopify and Lightspeed to Klaviyo, you end up with duplicate customer profiles. The same person appears twice in your segments.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Solution:</strong> Use a tool that automatically matches customers by email address and merges profiles. Gather prevents duplicates by checking for existing customers before creating new ones. If you're using Zapier, you'll need to add a "Find Contact" step before creating new contacts.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">2. Sync Delays</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Problem:</strong> Your Klaviyo segments are always behind. A customer buys in-store, but they don't appear in your "recent purchasers" segment for hours.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Solution:</strong> Native integrations often sync on hourly schedules. Zapier polls on intervals. For real-time sync, use an event-driven solution like Gather that updates Klaviyo within seconds of a purchase.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">3. API Rate Limits</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Problem:</strong> Your sync fails with "rate limit exceeded" errors during busy periods (like Black Friday).
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Solution:</strong> Use a tool that handles rate limiting intelligently. Gather queues requests and retries automatically, ensuring no data is lost even during traffic spikes.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">4. Missing or Incomplete Data</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Problem:</strong> Customer profiles in Klaviyo are missing purchase history, or order details are incomplete.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Solution:</strong> This often happens when field mappings are incorrect or when the sync tool doesn't understand retail-specific data structures. Use a purpose-built retail integration tool that knows how to map POS data correctly (product categories, brands, SKUs, etc.).
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">5. Sync Failures Without Alerts</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Problem:</strong> Your sync stops working, but you don't know until a client complains or you notice missing data days later.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Solution:</strong> Use a tool with monitoring and alerting. Gather sends notifications when syncs fail, so you can fix issues immediately instead of discovering them weeks later.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Prevention is Better Than Cure</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          The best way to avoid these problems is to use a purpose-built integration tool designed for retail data sync. Generic automation tools often lack the retail-specific logic needed to handle these edge cases automatically.
        </p>
      </>
    ),
  },
  'importance-of-in-store-data-ecommerce-retention': {
    title: 'The Importance of In-Store Data in E-Commerce Retention Marketing',
    description: 'Why unifying offline and online customer data is critical for retention marketing. How in-store purchase data improves email campaign performance.',
    date: '2024-01-05',
    category: 'Strategy',
    content: (
      <>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Most retailers run separate systems for online and offline sales. Your Shopify store handles ecommerce, while your POS (like Lightspeed) manages in-store transactions. But when it comes to email marketing, this separation creates blind spots that hurt retention.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">The Data Silo Problem</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          When in-store data doesn't sync to your email marketing platform (like Klaviyo), you're only seeing half the customer picture. A customer might buy in-store every month, but if that data never reaches Klaviyo, your email campaigns treat them like a lapsed customer. You might send "we miss you" emails to someone who actually purchased last week.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Why Unified Data Matters</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Retailers who sync in-store data to Klaviyo see measurable improvements:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-black dark:text-white font-bold ml-4">
          <li><strong>Higher Average Order Value:</strong> When you know a customer's total lifetime value (online + offline), you can target them with higher-value offers.</li>
          <li><strong>More Repeat Purchases:</strong> In-store buyers who receive personalized email flows convert more often than those who don't.</li>
          <li><strong>Better Segmentation:</strong> Create segments like "High-value customers ($500+)" that include both channels.</li>
          <li><strong>Fewer Mistakes:</strong> Avoid sending win-back campaigns to customers who just bought in-store.</li>
        </ul>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Creating a 360° Customer View</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          The goal is a unified customer profile that shows all touchpoints: online purchases, in-store sales, email engagement, and product preferences. This "single source of truth" enables true omnichannel marketing where campaigns respond to complete customer behavior, not just online activity.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">How to Unify Your Data</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          The easiest way to sync POS data to Klaviyo is using a purpose-built integration tool like Gather. It automatically syncs customer profiles, purchase history, and order details from your POS to Klaviyo in real-time. No manual exports, no custom API work-just connect and go.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          Once your data is unified, you can create email campaigns that respond to in-store purchases, run cross-channel promotions, and segment customers based on their complete purchase history. This is how modern retail marketing should work.
        </p>
      </>
    ),
  },
  'best-ways-connect-pos-to-klaviyo': {
    title: 'Best Ways to Connect Your POS to Klaviyo: An Expert Review',
    description: 'Compare native integrations, Zapier, Alloy Automation, Gather, and custom API solutions for syncing POS data to Klaviyo.',
    date: '2024-01-01',
    category: 'Comparisons',
    content: (
      <>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          If you're trying to connect your point-of-sale system to Klaviyo, you have several options. Each has pros and cons. Let's review the main approaches so you can choose what's best for your situation.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">1. Native Klaviyo Integrations</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>What it is:</strong> Klaviyo offers native integrations for some POS systems, like Shopify POS, but not for Lightspeed Retail X.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Pros:</strong> No-code setup, officially supported, no additional cost.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Cons:</strong> No support for Lightspeed Retail X, syncs on fixed schedules (hourly), no advanced filtering options, can't sync historical data easily.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Best for:</strong> Retailers using supported POS systems who don't need real-time sync or advanced controls.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">2. Zapier</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>What it is:</strong> Generic automation platform that can connect Lightspeed X-Series to Klaviyo via workflows (Zaps).
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Pros:</strong> Works with X-Series, no-code setup, flexible workflows.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Cons:</strong> Per-task pricing gets expensive, polling delays (not real-time), manual setup per workflow, no duplicate prevention, requires monitoring.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Best for:</strong> One-off integrations or low-volume stores where cost isn't a concern.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">3. Alloy Automation</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>What it is:</strong> E-commerce-focused automation platform with prebuilt workflows for Shopify and marketing apps.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Pros:</strong> E-commerce focused, prebuilt workflows, more power than Zapier.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Cons:</strong> Still requires workflow design, can be complex, pricing can be high, not specifically built for retail POS data.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Best for:</strong> Agencies comfortable with workflow builders who need more power than Zapier.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">4. Gather</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>What it is:</strong> Purpose-built integration tool specifically for retail data sync, especially Lightspeed to Klaviyo.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Pros:</strong> Real-time sync, works with all Lightspeed platforms, automatic duplicate prevention, retail-specific features, flat pricing, agency-friendly.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Cons:</strong> Newer platform (less established than Zapier), currently focused on Lightspeed (though expanding).
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Best for:</strong> Agencies managing multiple retail clients, stores needing real-time sync, or anyone tired of maintaining Zapier workflows.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">5. Custom API Integration</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>What it is:</strong> Building your own integration using Lightspeed and Klaviyo APIs.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Pros:</strong> Complete control, can be tailored exactly to your needs.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Cons:</strong> Requires developer time, ongoing maintenance, error handling, rate limiting, and monitoring all fall on you.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          <strong>Best for:</strong> Large enterprises with dedicated tech teams and specific requirements that off-the-shelf tools can't meet.
        </p>

        <h2 className="text-3xl font-black text-black dark:text-white mb-4 mt-8 uppercase">Our Recommendation</h2>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          For most agencies and retailers, we recommend Gather. It's purpose-built for this exact use case, offers real-time sync, handles edge cases automatically, and scales efficiently. If you're managing multiple clients or need reliability without maintenance, it's the best choice.
        </p>
        <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
          If you're just starting out with one store and don't mind manual setup, Zapier might work. But as you scale, the limitations become clear, and you'll likely wish you started with a purpose-built solution.
        </p>
      </>
    ),
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) {
    return defaultMetadata
  }

  return {
    ...defaultMetadata,
    title: `${post.title} | Gather Blog`,
    description: post.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const articleSchema = generateStructuredData('Article', {
    title: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gather-green dark:text-gather-green font-bold hover:underline"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white leading-tight mb-6 uppercase">
              {post.title}
            </h1>
            <p className="text-xl text-black dark:text-white leading-relaxed font-bold">
              {post.description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="text-black dark:text-white">
              {post.content}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 uppercase">
              Ready to Simplify Your Data Sync?
            </h2>
            <p className="text-xl text-black dark:text-white leading-relaxed font-bold mb-8">
              Stop fighting broken integrations. Gather syncs your POS data to Klaviyo automatically, in real-time.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-5 bg-gather-green dark:bg-gather-green text-black dark:text-white text-lg font-black uppercase border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark transition-all"
            >
              Get Started Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
