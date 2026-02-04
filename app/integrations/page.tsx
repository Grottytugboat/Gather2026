import type { Metadata } from 'next'
import Link from 'next/link'
import { defaultMetadata, generateStructuredData } from '../metadata'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Gather Integrations | Klaviyo, Lightspeed, Shopify & More',
  description:
    'Connect your POS and ecommerce tools with Gather integrations. Sync Lightspeed to Klaviyo, Shopify to Square, and more. Real-time data sync for agencies and retailers.',
  keywords: 'gather integrations, lightspeed klaviyo integration, pos klaviyo sync, shopify square integration, ecommerce data sync',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Gather Integrations | Connect Your Ecommerce Stack',
    description: 'Sync customer and sales data between Lightspeed, Klaviyo, Shopify, Square, and more. Built for agencies and retailers.',
  },
}

const integrations = [
  {
    name: 'Lightspeed',
    href: '/integrations/lightspeed',
    description: 'Connect Lightspeed POS to Klaviyo, Shopify, and your marketing stack. Real-time customer and sales sync.',
    popular: true,
  },
  {
    name: 'Klaviyo',
    href: '/integrations/klaviyo',
    description: 'Sync customer profiles, purchase events, and browsing data into Klaviyo for powerful email automation.',
    popular: true,
  },
  {
    name: 'Shopify',
    href: '/integrations/shopify',
    description: 'Unify your Shopify store with POS systems and marketing platforms. Clean data mapping included.',
    popular: true,
  },
  {
    name: 'Square',
    href: '/integrations/square',
    description: 'Bring Square POS transactions into your ecommerce and email marketing stack automatically.',
  },
  {
    name: 'Vend (Lightspeed X-Series)',
    href: '/integrations/vend',
    description: 'Real-time two-way sync that actually works. Way better than native integrations.',
  },
  {
    name: 'Cin7',
    href: '/integrations/cin7',
    description: 'Sync inventory, orders, and customer data across your entire tech stack.',
  },
  {
    name: 'Attentive',
    href: '/integrations/attentive',
    description: 'Power SMS personalization with unified POS and ecommerce customer data.',
  },
  {
    name: 'Mailchimp',
    href: '/integrations/mailchimp',
    description: 'Keep audiences and purchase history perfectly synced for smarter email campaigns.',
  },
  {
    name: 'Postscript',
    href: '/integrations/postscript',
    description: 'Connect customer purchase signals to sharpen your SMS targeting and segmentation.',
  },
  {
    name: 'Omnisend',
    href: '/integrations/omnisend',
    description: 'Unify ecommerce and POS data to improve email segmentation and automation flows.',
  },
]

export default function IntegrationsIndexPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Gather Integrations',
    description: 'Connect your POS and ecommerce tools with Gather. Sync Lightspeed to Klaviyo, Shopify to Square, and more.',
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
              10+ Integrations
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight uppercase">
              Gather Integrations
            </h1>
            <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
              Connect your POS, ecommerce, and marketing platforms. Gather syncs customer and sales data in real-time so your tools actually talk to each other.
            </p>
          </div>
        </section>

        {/* SEO content section */}
        <section className="py-12 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">
              Why Agencies Choose Gather Integrations
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-black dark:text-white font-bold">
              <div className="p-4 bg-white dark:bg-slate-900 border-4 border-black dark:border-white">
                <h3 className="font-black mb-2">Real-Time Sync</h3>
                <p className="text-sm">No more waiting hours for data. Customer profiles and purchases sync instantly across all connected platforms.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 border-4 border-black dark:border-white">
                <h3 className="font-black mb-2">Built for Agencies</h3>
                <p className="text-sm">Manage multiple client accounts from one dashboard. Partner program with 30% lifetime commission.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 border-4 border-black dark:border-white">
                <h3 className="font-black mb-2">No Code Required</h3>
                <p className="text-sm">Connect tools in minutes. No developers needed. Just authenticate and map your data fields.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular integrations */}
        <section className="py-16 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-black dark:text-white mb-8 uppercase text-center">
              Most Popular Integrations
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              {integrations.filter(i => i.popular).map((integration) => (
                <Link
                  key={integration.href}
                  href={integration.href}
                  className="block p-8 bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal-xl dark:hover:shadow-brutal-xl-dark transition-all"
                >
                  <h3 className="text-2xl font-black text-black mb-3 uppercase">
                    {integration.name}
                  </h3>
                  <p className="text-black leading-relaxed font-bold mb-4">
                    {integration.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-black uppercase text-black">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All integrations */}
        <section className="py-24 px-6 border-b-4 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-black dark:text-white mb-8 uppercase text-center">
              All Gather Integrations
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {integrations.map((integration) => (
                <Link
                  key={integration.href}
                  href={integration.href}
                  className="block p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal-xl dark:hover:shadow-brutal-xl-dark transition-all"
                >
                  <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                    {integration.name}
                  </h3>
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
          </div>
        </section>

        {/* Lightspeed + Klaviyo specific section for SEO */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-black dark:text-white mb-6 uppercase">
              Lightspeed to Klaviyo Integration
            </h2>
            <p className="text-lg text-black dark:text-white font-bold mb-6">
              The most requested integration. Gather connects your Lightspeed POS to Klaviyo in real-time, syncing customer profiles, purchase history, and in-store events so you can build powerful email automations that actually convert.
            </p>
            <ul className="list-disc list-inside text-black dark:text-white font-bold space-y-2 mb-6">
              <li>Sync in-store purchases to Klaviyo profiles automatically</li>
              <li>Track customer lifetime value across online and offline channels</li>
              <li>Trigger email flows based on POS activity</li>
              <li>Segment customers by store location, purchase frequency, and spend</li>
            </ul>
            <Link
              href="/integrations/lightspeed"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gather-green text-black font-black uppercase border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all"
            >
              Set up Lightspeed + Klaviyo →
            </Link>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase">
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-black dark:text-white font-bold">
              Don't see your tool? We build custom integrations for agencies and enterprise clients.
            </p>
            <Link
              href="/contact"
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
