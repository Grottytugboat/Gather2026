import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Square Integration - Connect Square POS to Klaviyo | Gather',
  description: 'Sync Square POS transactions to Klaviyo, Mailchimp, and other marketing platforms. Connect in-store sales to email marketing automatically.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Square Integration - Connect Square POS to Klaviyo',
    description: 'Sync Square POS transactions to Klaviyo and other marketing platforms in real-time.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather integrate Square with Klaviyo?',
    answer: 'Gather connects to your Square account and syncs customer data, transaction history, and purchase behavior to Klaviyo in real-time. Every Square transaction updates your Klaviyo customer profiles automatically.',
  },
  {
    question: 'What Square data gets synced?',
    answer: 'Gather syncs customer information, transaction history, product purchases, and payment data from Square to your marketing platforms. You can customize which data points to sync and filter specific transaction types.',
  },
  {
    question: 'Does Gather work with Square Online?',
    answer: 'Yes, Gather can sync data from both Square POS (in-store) and Square Online (ecommerce) to Klaviyo and other platforms, giving you a complete view of customer behavior across all Square channels.',
  },
]

export default function SquareIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Square Integration - Connect Square POS to Marketing Platforms',
    description: 'Complete guide to integrating Square POS with Klaviyo and other email marketing platforms.',
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
                Square Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Square POS to Klaviyo, Mailchimp, and other platforms. Sync in-store transactions to email marketing automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Bring Square Transactions Into Your Marketing
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Square POS captures valuable customer data from in-store transactions, but this data often stays disconnected from your email marketing platforms. Gather bridges this gap by syncing Square data to Klaviyo, Mailchimp, and other marketing tools.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Every Square transaction, customer update, and product sale syncs to your marketing platforms in real-time, enabling you to create personalized email campaigns based on complete customer behavior data.
              </p>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Square Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
