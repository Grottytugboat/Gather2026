import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Zapier Alternative for Lightspeed Klaviyo - Better Integration Tool | Gather',
  description: 'Gather is a better alternative to Zapier for Lightspeed Klaviyo integration. Real-time sync, retail-specific features, and no per-task pricing. Built for ecommerce agencies.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Zapier Alternative for Lightspeed Klaviyo - Better Integration Tool',
    description: 'Gather is a better alternative to Zapier for Lightspeed Klaviyo integration. Real-time sync, no per-task pricing.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How does Gather compare to Zapier for Lightspeed integrations?',
    answer: 'Gather is purpose-built for retail data sync, offering real-time event-driven updates (vs Zapier\'s polling intervals), automatic duplicate prevention, retail-specific data mapping, and flat pricing. Zapier requires manual workflow setup, charges per task, and lacks retail-specific features. Gather is faster, more reliable, and more cost-effective for agencies managing multiple client integrations.',
  },
  {
    question: 'Is Zapier good for syncing Lightspeed to Klaviyo?',
    answer: 'Zapier can work for basic Lightspeed to Klaviyo syncing, but it has limitations: manual setup for each workflow, polling delays (not real-time), task limits that cost money, no built-in duplicate prevention, and no retail-specific data handling. For agencies managing multiple clients, Gather is a better choice.',
  },
  {
    question: 'What are the disadvantages of using Zapier for ecommerce integrations?',
    answer: 'Zapier\'s main disadvantages for ecommerce integrations include: per-task pricing that gets expensive at scale, polling-based syncing (not real-time), manual workflow setup and maintenance, no automatic duplicate prevention, generic data mapping (not retail-specific), and lack of dedicated support for retail use cases.',
  },
  {
    question: 'Can I replace Zapier with Gather?',
    answer: 'Yes, many agencies replace Zapier with Gather for Lightspeed to Klaviyo integrations. Gather offers better reliability, real-time syncing, retail-specific features, and more predictable pricing. If you\'re spending significant time or money on Zapier for retail data sync, Gather is likely a better fit.',
  },
  {
    question: 'How much does Zapier cost for Lightspeed Klaviyo integration?',
    answer: 'Zapier pricing is based on tasks (automated actions). For Lightspeed to Klaviyo syncing, each customer or order sync counts as a task. Costs can range from $20/month (Starter, 750 tasks) to $50+/month (Professional, 2,000 tasks) and scale up quickly as you add more clients or increase transaction volume. Gather offers flat pricing with no per-task charges.',
  },
]

export default function ZapierAlternativePage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Zapier Alternative for Lightspeed Klaviyo - Better Integration Tool',
    description: 'Why Gather is a better alternative to Zapier for syncing Lightspeed POS data to Klaviyo. Compare features, pricing, and reliability.',
    datePublished: '2024-01-01',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gather-green/10 dark:bg-gather-green/20 border border-gather-green/20 dark:border-gather-green/40 rounded-full text-sm font-medium text-gather-green-dark dark:text-gather-green">
              <span className="w-2 h-2 bg-gather-green rounded-full animate-pulse"></span>
              Better Than Zapier for Retail Data Sync
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight">
              Zapier Alternative for
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Lightspeed Klaviyo Integration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
              Tired of Zapier's per-task pricing and manual workflows? Gather is purpose-built for retail data sync. 
              Real-time updates, flat pricing, and retail-specific features.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-5 bg-gather-green text-white text-lg font-semibold rounded-lg hover:bg-gather-green-dark shadow-lg shadow-gather-green/25 hover:shadow-xl hover:shadow-gather-green/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Try Gather Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center justify-center px-8 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-lg font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                See Comparison
              </a>
            </div>
          </div>
        </section>

        {/* Problem with Zapier Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 text-center uppercase">
              Why Zapier Falls Short for Retail Data Sync
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Per-Task Pricing Gets Expensive Fast
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Every customer sync, every order sync, every update counts as a Zapier task. As your clients grow or you add more clients, costs balloon. A busy retail store can easily hit 2,000+ tasks per month, pushing you into expensive plans. Gather offers flat pricing with no per-task charges.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Polling Delays, Not Real-Time
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Zapier polls for changes on intervals (every 1-15 minutes depending on your plan). This means your Klaviyo data can be up to 15 minutes behind real-time sales. Gather syncs in real-time, updating Klaviyo within seconds of a Lightspeed purchase.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Manual Setup and Maintenance
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Each Zapier workflow requires manual configuration: mapping fields, setting up filters, handling edge cases. When something breaks (API changes, data format shifts), you're debugging Zaps. Gather handles all of this automatically with smart defaults and retail-specific logic.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  No Duplicate Prevention
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  If you're syncing both Shopify and Lightspeed to Klaviyo via Zapier, you risk creating duplicate customer profiles or double-counting orders. Gather automatically prevents duplicates and filters out overlapping data to keep your Klaviyo segments clean.
                </p>
              </div>

              <div className="p-6 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Gather: Purpose-Built for Retail
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-black">
                  Gather is built specifically for retail data sync. It understands retail use cases (loyalty programs, multi-store, SKU-level data) and handles them automatically. Real-time syncing, flat pricing, and retail-specific features make it the better choice for agencies managing Lightspeed to Klaviyo integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              Gather vs Zapier: Side-by-Side
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black dark:border-white">
                <thead>
                  <tr className="bg-gather-green dark:bg-gather-green">
                    <th className="px-6 py-4 text-left font-black text-black dark:text-white uppercase border-4 border-black dark:border-white">Feature</th>
                    <th className="px-6 py-4 text-center font-black text-black dark:text-white uppercase border-4 border-black dark:border-white">Zapier</th>
                    <th className="px-6 py-4 text-center font-black text-black dark:text-white uppercase border-4 border-black dark:border-white bg-gather-green dark:bg-gather-green">Gather</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Sync Speed</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Polling (1-15 min delay)</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">Real-time (seconds)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Pricing Model</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Per-task (scales with usage)</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">Flat pricing</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Setup Complexity</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Manual workflow design</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">Click-and-go (minutes)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Duplicate Prevention</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌ Manual setup required</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Automatic</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Retail-Specific Features</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌ Generic</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Purpose-built</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Multi-Client Management</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Separate accounts per client</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Single dashboard</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Support</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Generic support</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Retail-focused</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              Why Agencies Switch from Zapier to Gather
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Predictable Costs</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  No surprise bills when transaction volume spikes. Gather's flat pricing means you can budget accurately and scale without worrying about per-task charges eating into your margins.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Real-Time Data</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Your Klaviyo campaigns respond to in-store sales immediately, not 15 minutes later. Real-time syncing means your email marketing is always working with the latest customer data.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Less Maintenance</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Gather handles retail-specific logic automatically. No more debugging Zaps when APIs change or data formats shift. Set it up once and it just works.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Better for Agencies</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Manage all client integrations from one dashboard. No juggling multiple Zapier accounts or separate logins. Gather is built for agencies managing multiple retail clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="Zapier vs Gather FAQs"
          description="Common questions about switching from Zapier to Gather for Lightspeed Klaviyo integration"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
