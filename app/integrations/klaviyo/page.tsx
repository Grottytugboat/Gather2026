import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Klaviyo Integration - Connect POS & Ecommerce to Klaviyo | Gather',
  description: 'Sync Lightspeed, Shopify, and other platforms to Klaviyo automatically. Real-time customer data sync for better email marketing.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Klaviyo Integration - Connect POS & Ecommerce to Klaviyo',
    description: 'Sync Lightspeed, Shopify, and other platforms to Klaviyo automatically.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather integrate with Klaviyo?',
    answer: 'Gather connects to your Klaviyo account via API and syncs customer data, purchase history, and behavioral data from Lightspeed, Shopify, and other platforms. This ensures your Klaviyo profiles have complete customer data from all sales channels.',
  },
  {
    question: 'What data gets synced to Klaviyo?',
    answer: 'Gather syncs customer profiles, order history, product purchases, and customer behavior data to Klaviyo. You can customize which data points to sync and filter out specific sales types to keep your Klaviyo data clean and relevant.',
  },
  {
    question: 'Can I sync multiple platforms to Klaviyo at once?',
    answer: 'Yes, Gather allows you to sync data from multiple sources (Lightspeed, Shopify, etc.) to Klaviyo simultaneously. This creates a unified customer view in Klaviyo with data from all your sales channels.',
  },
  {
    question: 'How is this different from Klaviyo\'s native integrations?',
    answer: 'Gather works with platforms that Klaviyo doesn\'t natively support (like Lightspeed X-Series), provides more control over data mapping, prevents duplicates automatically, and enables complex multi-platform syncs that native integrations can\'t handle.',
  },
]

export default function KlaviyoIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Klaviyo Integration - Connect All Platforms to Email Marketing',
    description: 'Complete guide to syncing Lightspeed, Shopify, and other platforms to Klaviyo using Gather.',
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
                Klaviyo Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Lightspeed, Shopify, and other platforms to Klaviyo. Sync customer data for better email marketing campaigns.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Complete Customer Data in Klaviyo
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Klaviyo is powerful, but it only works with the data you give it. Native integrations are limited - Klaviyo does not support Lightspeed Retail X. For Lightspeed Retail X, you need a solution like Gather.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Gather syncs data from Lightspeed Retail X, Shopify, and other platforms to Klaviyo automatically. Every purchase, customer update, and behavioral event flows into Klaviyo in real-time, enabling true omnichannel email marketing.
              </p>
            </div>

            <div className="p-10 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Benefits of Gather + Klaviyo
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Sync platforms Klaviyo doesn't natively support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Real-time data sync (not hourly batches)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Automatic duplicate prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Custom data mapping and filtering</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Klaviyo Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
