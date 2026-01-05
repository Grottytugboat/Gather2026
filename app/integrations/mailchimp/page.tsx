import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mailchimp Integration - Connect POS & Ecommerce to Mailchimp | Gather',
  description: 'Sync Lightspeed, Shopify, and other platforms to Mailchimp automatically. Connect customer data for better email marketing campaigns.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Mailchimp Integration - Connect POS to Mailchimp',
    description: 'Sync Lightspeed, Shopify, and other platforms to Mailchimp automatically.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather integrate with Mailchimp?',
    answer: 'Gather connects to your Mailchimp account via API and syncs customer data, purchase history, and behavioral data from Lightspeed, Shopify, and other platforms. This ensures your Mailchimp audience has complete customer data from all sales channels.',
  },
  {
    question: 'What data gets synced to Mailchimp?',
    answer: 'Gather syncs customer profiles, order history, product purchases, and customer behavior data to Mailchimp. You can customize which data points to sync and filter out specific sales types to keep your Mailchimp audience clean and relevant.',
  },
  {
    question: 'Can I sync multiple platforms to Mailchimp?',
    answer: 'Yes, Gather allows you to sync data from multiple sources (Lightspeed, Shopify, etc.) to Mailchimp simultaneously. This creates a unified customer view in Mailchimp with data from all your sales channels for better email marketing.',
  },
]

export default function MailchimpIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Mailchimp Integration - Connect All Platforms to Email Marketing',
    description: 'Complete guide to syncing Lightspeed, Shopify, and other platforms to Mailchimp.',
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
                Mailchimp Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Lightspeed, Shopify, and other platforms to Mailchimp. Sync customer data for better email marketing campaigns.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Complete Customer Data in Mailchimp
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Mailchimp is powerful for email marketing, but it needs complete customer data to segment audiences and personalize campaigns effectively. Native integrations are limited, and many POS systems don't connect directly to Mailchimp.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Gather syncs data from Lightspeed, Shopify, and other platforms to Mailchimp automatically. Every purchase, customer update, and behavioral event flows into Mailchimp in real-time, enabling targeted email campaigns based on complete customer behavior data.
              </p>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Mailchimp Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
