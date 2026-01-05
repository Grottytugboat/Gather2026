import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cin7 Integration - Connect Cin7 to Klaviyo & Marketing Platforms | Gather',
  description: 'Sync Cin7 inventory and order data to Klaviyo, Mailchimp, and other platforms. Connect your inventory management to email marketing.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Cin7 Integration - Connect Cin7 to Klaviyo',
    description: 'Sync Cin7 inventory and order data to Klaviyo and other marketing platforms.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather integrate Cin7 with Klaviyo?',
    answer: 'Gather connects to your Cin7 account and syncs customer data, order history, product information, and inventory data to Klaviyo and other marketing platforms. This ensures your email marketing has access to complete customer purchase data.',
  },
  {
    question: 'What Cin7 data gets synced?',
    answer: 'Gather can sync customer profiles, sales orders, product data, inventory levels, and customer purchase history from Cin7 to your marketing platforms. You can customize which data points to sync based on your needs.',
  },
  {
    question: 'Can I sync Cin7 to multiple platforms?',
    answer: 'Yes, Gather allows you to sync Cin7 data to multiple platforms simultaneously, including Klaviyo, Mailchimp, Attentive, and others. This creates a unified data flow from your inventory management to all your marketing channels.',
  },
]

export default function Cin7IntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Cin7 Integration - Connect Inventory Management to Marketing',
    description: 'Complete guide to integrating Cin7 with Klaviyo and other marketing platforms.',
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
                Cin7 Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Cin7 inventory management to Klaviyo, Mailchimp, and other platforms. Sync order and customer data automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Connect Inventory to Marketing
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Cin7 manages your inventory, orders, and customer data across multiple channels, but this valuable data often stays isolated from your email marketing platforms. Gather bridges this gap by syncing Cin7 data to Klaviyo, Mailchimp, and other marketing tools.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Every order, customer update, and product change in Cin7 syncs to your marketing platforms in real-time, enabling you to create targeted email campaigns based on complete customer purchase history and behavior.
              </p>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Cin7 Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
