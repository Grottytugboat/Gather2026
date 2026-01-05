import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Attentive Integration - Connect POS & Ecommerce to Attentive | Gather',
  description: 'Sync Lightspeed, Shopify, and other platforms to Attentive SMS marketing. Connect customer data for better text message campaigns.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Attentive Integration - Connect POS to Attentive SMS',
    description: 'Sync Lightspeed, Shopify, and other platforms to Attentive SMS marketing.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather integrate with Attentive?',
    answer: 'Gather connects to your Attentive account and syncs customer data, purchase history, and behavioral data from Lightspeed, Shopify, and other platforms. This ensures your Attentive SMS campaigns have complete customer data from all sales channels.',
  },
  {
    question: 'What data gets synced to Attentive?',
    answer: 'Gather syncs customer profiles, order history, product purchases, and customer behavior data to Attentive. You can customize which data points to sync and filter out specific sales types to keep your Attentive data clean.',
  },
  {
    question: 'Can I sync multiple platforms to Attentive?',
    answer: 'Yes, Gather allows you to sync data from multiple sources (Lightspeed, Shopify, etc.) to Attentive simultaneously. This creates a unified customer view in Attentive with data from all your sales channels for better SMS marketing.',
  },
]

export default function AttentiveIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Attentive Integration - Connect All Platforms to SMS Marketing',
    description: 'Complete guide to syncing Lightspeed, Shopify, and other platforms to Attentive SMS marketing.',
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
                Attentive Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Lightspeed, Shopify, and other platforms to Attentive SMS marketing. Sync customer data for better text message campaigns.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Complete Customer Data in Attentive
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Attentive is powerful for SMS marketing, but it needs complete customer data to work effectively. Native integrations are limited, and many POS systems don't connect directly to Attentive.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Gather syncs data from Lightspeed, Shopify, and other platforms to Attentive automatically. Every purchase, customer update, and behavioral event flows into Attentive in real-time, enabling personalized SMS campaigns based on complete customer behavior data.
              </p>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Attentive Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
