import type { Metadata } from 'next'
import Link from 'next/link'
import { defaultMetadata, generateStructuredData } from '../metadata'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integrations - Connect Your Ecommerce Stack | Gather',
  description:
    'Browse Gather integrations for Klaviyo, Lightspeed, Shopify, Square, Vend, and more. Sync customer and sales data in real-time across your tools.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Integrations - Connect Your Ecommerce Stack',
    description: 'Browse Gather integrations and connect your ecommerce tools in real-time.',
  },
}

const integrations = [
  {
    name: 'Klaviyo',
    href: '/integrations/klaviyo',
    description: 'Sync customer profiles, events, and purchase history into Klaviyo.',
  },
  {
    name: 'Lightspeed',
    href: '/integrations/lightspeed',
    description: 'Bring POS customer and sales data into your marketing and ecommerce tools.',
  },
  {
    name: 'Shopify',
    href: '/integrations/shopify',
    description: 'Connect your store data to Klaviyo and POS systems with clean mappings.',
  },
  {
    name: 'Square',
    href: '/integrations/square',
    description: 'Unify Square POS activity with your marketing and analytics stack.',
  },
  {
    name: 'Vend (Lightspeed X-Series)',
    href: '/integrations/vend',
    description: 'Way better than the native integration - real-time two-way sync with advanced features.',
  },
  {
    name: 'Cin7',
    href: '/integrations/cin7',
    description: 'Connect inventory and order data across systems reliably.',
  },
  {
    name: 'Attentive',
    href: '/integrations/attentive',
    description: 'Power SMS personalization with unified customer data.',
  },
  {
    name: 'Mailchimp',
    href: '/integrations/mailchimp',
    description: 'Keep audiences and purchase history aligned for smarter campaigns.',
  },
  {
    name: 'Postscript',
    href: '/integrations/postscript',
    description: 'Sync customer and purchase signals to sharpen SMS targeting.',
  },
  {
    name: 'Omnisend',
    href: '/integrations/omnisend',
    description: 'Unify ecommerce and POS data to improve segmentation and automation.',
  },
]

export default function IntegrationsIndexPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Integrations',
    description: 'Browse integrations and connect your ecommerce stack with Gather.',
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
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-sm font-black text-black dark:text-white uppercase mx-auto">
              Integrations
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight uppercase">
              Connect Your Stack
            </h1>
            <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
              Pick the tools you use. Gather keeps customer and sales data in sync across your POS, ecommerce, and marketing platforms.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
            {integrations.map((integration) => (
              <Link
                key={integration.href}
                href={integration.href}
                className="block p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal-xl dark:hover:shadow-brutal-xl-dark transition-all"
              >
                <h2 className="text-3xl font-black text-black dark:text-white mb-3 uppercase">
                  {integration.name}
                </h2>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-6">
                  {integration.description}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gather-green dark:bg-gather-green text-black dark:text-white font-black uppercase border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark">
                  Learn more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">
              Need a specific integration?
            </h2>
            <p className="text-xl text-black dark:text-white font-bold">
              Tell us what you’re connecting and we’ll point you in the right direction.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-5 bg-gather-green dark:bg-gather-green text-black dark:text-white text-lg font-black uppercase border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark transition-all"
            >
              Contact us
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

