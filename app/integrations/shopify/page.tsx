import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Shopify Integration - Connect Shopify to Klaviyo & POS Systems | Gather',
  description: 'Sync Shopify data to Klaviyo, Lightspeed, and other platforms in real-time. Connect your ecommerce store with POS and email marketing automatically.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Shopify Integration - Connect Shopify to Klaviyo & POS Systems',
    description: 'Sync Shopify data to Klaviyo, Lightspeed, and other platforms in real-time.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather integrate Shopify with Klaviyo?',
    answer: 'Gather connects your Shopify store to Klaviyo automatically, syncing customer data, purchase history, and order details in real-time. This ensures your email marketing campaigns have complete customer data from both online and offline purchases.',
  },
  {
    question: 'Can I sync Shopify to Lightspeed POS?',
    answer: 'Yes, Gather enables bidirectional sync between Shopify and Lightspeed POS. You can use Shopify as the source of truth for your POS, or sync Lightspeed data to Shopify, keeping your inventory and customer data synchronized across both platforms.',
  },
  {
    question: 'How is Gather different from Shopify\'s native Klaviyo integration?',
    answer: 'Gather provides more control and flexibility than native integrations. You can sync data to multiple platforms simultaneously, filter specific data points, prevent duplicates automatically, and maintain sync across complex multi-platform setups that native integrations can\'t handle.',
  },
  {
    question: 'Does Gather work with Shopify Plus?',
    answer: 'Yes, Gather works with all Shopify plans including Shopify Plus. The integration uses Shopify\'s API to access your store data and sync it to your marketing and POS platforms.',
  },
]

export default function ShopifyIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Shopify Integration - Connect Your Ecommerce Store',
    description: 'Complete guide to integrating Shopify with Klaviyo, Lightspeed, and other platforms using Gather.',
    datePublished: '2024-01-01',
  })

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-sm font-black text-black dark:text-white mb-6 uppercase">
                Integration
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-4 uppercase">
                Shopify Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect your Shopify store to Klaviyo, Lightspeed, and other platforms. Sync customer data, orders, and inventory automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Why Sync Shopify Data?
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Your Shopify store generates valuable customer data, but it often lives in isolation. By connecting Shopify to Klaviyo, Lightspeed, and other platforms, you create a unified view of your customers across all touchpoints.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Gather makes this connection automatic. Every Shopify order, customer update, and product change syncs in real-time to wherever you need it - no manual exports, no broken connections.
              </p>
            </div>

            <div className="p-10 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                What Gets Synced
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Customer profiles and contact information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Order history and purchase behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Product data and inventory levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Cart abandonment and browsing data</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Shopify Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
