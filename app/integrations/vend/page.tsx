import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Vend Integration - Connect Vend (Lightspeed X) to Klaviyo | Gather',
  description: 'Sync Vend POS (now Lightspeed X-Series) to Klaviyo automatically. Real-time customer data sync for email marketing.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Vend Integration - Connect Vend to Klaviyo',
    description: 'Sync Vend POS (Lightspeed X-Series) to Klaviyo in real-time.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Does Gather work with Vend?',
    answer: 'Yes! Vend was acquired by Lightspeed and is now called Lightspeed X-Series. Gather fully supports syncing Vend/Lightspeed X-Series data to Klaviyo and other marketing platforms in real-time.',
  },
  {
    question: 'How do I connect Vend to Klaviyo?',
    answer: 'Since Vend is now Lightspeed X-Series, you can connect it to Klaviyo using Gather. Simply connect your Lightspeed X-Series account (which is your Vend account) and configure the sync to Klaviyo. Gather handles all the data mapping automatically.',
  },
  {
    question: 'Why can\'t I use Klaviyo\'s native Lightspeed integration for Vend?',
    answer: 'While Lightspeed and Klaviyo now have a native integration, it\'s basic and limited. Gather offers way more - real-time two-way sync, better filtering, more data points, and real human support. For Vend/Lightspeed Retail X, Gather is the better choice for a powerful, reliable integration.',
  },
]

export default function VendIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Vend Integration - Connect Vend POS to Klaviyo',
    description: 'Complete guide to syncing Vend (Lightspeed X-Series) to Klaviyo using Gather.',
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
                Vend Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Vend (Lightspeed X-Series) to Klaviyo. Sync customer data and sales to email marketing automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Vend is Now Lightspeed X-Series
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Vend was acquired by Lightspeed and is now called Lightspeed X-Series. While the platform has changed names, many retailers still refer to it as Vend. Gather supports syncing Vend/Lightspeed X-Series data to Klaviyo and other marketing platforms.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                While Lightspeed and Klaviyo now have a native integration, it's basic and limited. Gather was built specifically for Lightspeed Retail X (Vend) and offers way more - real-time two-way sync, better filtering, more data points, and real human support. Gather enables you to sync your Vend customer data and sales to Klaviyo for better email marketing campaigns.
              </p>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Vend Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
