import type { Metadata } from 'next'
import Link from 'next/link'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Lightspeed Integration - Connect Lightspeed POS to Klaviyo | Gather',
  description: 'Sync Lightspeed Retail X to Klaviyo in real-time. Connect your POS to email marketing automatically.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Lightspeed Integration - Connect Lightspeed POS to Klaviyo',
    description: 'Sync Lightspeed POS data to Klaviyo in real-time. Works with all Lightspeed platforms.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Which Lightspeed platforms does Gather support?',
    answer: 'Gather was built specifically for Lightspeed Retail X (formerly Vend). Unlike Klaviyo\'s native integration which doesn\'t support X-Series at all, Gather is custom-made for this platform with real-time two-way sync and real human support.',
  },
  {
    question: 'How does Lightspeed to Klaviyo sync work?',
    answer: 'Gather connects to your Lightspeed account via OAuth and syncs customer data, sales, and product information to Klaviyo in real-time. Every in-store purchase updates your Klaviyo customer profiles automatically, enabling true omnichannel marketing.',
  },
  {
    question: 'Can I sync Lightspeed to other platforms besides Klaviyo?',
    answer: 'Yes, Gather can sync Lightspeed data to multiple platforms including Klaviyo, Shopify, Mailchimp, Attentive, and more. You can configure multiple sync pipelines from a single Lightspeed connection.',
  },
]

export default function LightspeedIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Lightspeed Integration - Connect POS to Marketing Platforms',
    description: 'Complete guide to integrating Lightspeed POS with Klaviyo and other marketing platforms.',
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
                Lightspeed Integration
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto">
                Connect Lightspeed POS to Klaviyo, Shopify, and other platforms. Sync in-store sales to email marketing automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Connect Offline Sales to Marketing
              </h2>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                Lightspeed POS captures valuable in-store customer data, but it often stays disconnected from your email marketing. Gather bridges this gap by syncing Lightspeed data to Klaviyo and other marketing platforms in real-time.
              </p>
              <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                Gather was built specifically for Lightspeed Retail X, giving you the most reliable and feature-rich integration available for this platform.
              </p>
            </div>

            <div className="p-10 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <h2 className="text-3xl font-black text-black dark:text-white mb-4 uppercase">
                Supported Lightspeed Platforms
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gather-green font-black text-xl">✓</span>
                  <span className="text-lg text-black dark:text-white font-bold">Lightspeed Retail X (formerly Vend)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Lightspeed Integration FAQs" />
        <FinalCTA />
      </main>
    </>
  )
}
