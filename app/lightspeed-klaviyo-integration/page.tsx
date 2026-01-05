import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Lightspeed to Klaviyo Integration - Real-Time POS Data Sync | Gather',
  description: 'Connect Lightspeed Retail X to Klaviyo automatically. Real-time two-way sync, custom-built for X-Series, and real human support. Better than native integration or Zapier.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Lightspeed to Klaviyo Integration - Real-Time POS Data Sync | Gather',
    description: 'Connect Lightspeed Retail X to Klaviyo automatically. Real-time two-way sync, custom-built for X-Series.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Does Klaviyo integrate with Lightspeed Retail X?',
    answer: 'No, Klaviyo\'s native integration does not support Lightspeed Retail X. You need a third-party solution like Gather. Gather was built specifically for Lightspeed Retail X to Klaviyo integration, with real-time two-way sync and real human support.',
  },
  {
    question: 'How does Gather compare to Klaviyo\'s native Lightspeed integration?',
    answer: 'Klaviyo\'s native integration doesn\'t work with Lightspeed Retail X at all. Even if it did, it would be a generic one-way sync. Gather is custom-built for Lightspeed Retail X, offers two-way sync, more data points, and you can actually talk to a real person when you need help. We started by solving this exact problem and got really good at it.',
  },
  {
    question: 'Can I sync Vend (Lightspeed X) to Klaviyo?',
    answer: 'Yes! Many still refer to Lightspeed X-Series as Vend. Gather fully supports syncing Lightspeed X-Series (Vend) customer data and sales to Klaviyo in real-time. No custom API work required.',
  },
  {
    question: 'How long does it take to set up Lightspeed to Klaviyo sync?',
    answer: 'Gather can be set up in minutes. Simply connect your Lightspeed account via OAuth, connect your Klaviyo account, and configure your sync preferences. No developers or code required. Smart default mappings handle most use cases out of the box.',
  },
  {
    question: 'What data gets synced from Lightspeed to Klaviyo?',
    answer: 'Gather syncs customer profiles, order history, product data, and purchase behavior from Lightspeed to Klaviyo. You can customize which data points to sync and filter out specific sales (like wholesale or staff purchases) to keep your Klaviyo data clean.',
  },
  {
    question: 'Is Gather better than Zapier for Lightspeed Klaviyo integration?',
    answer: 'Yes. Gather is purpose-built for retail data sync, offering real-time event-driven updates (vs Zapier\'s polling intervals), automatic duplicate prevention, retail-specific data mapping, and dedicated support. Zapier requires manual workflow setup for each integration and can become expensive as you scale.',
  },
]

export default function LightspeedKlaviyoIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Lightspeed to Klaviyo Integration - Real-Time POS Data Sync',
    description: 'Complete guide to connecting Lightspeed POS to Klaviyo email marketing. Compare native integration, Zapier, and Gather solutions.',
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
              Built for Lightspeed Retail X
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight">
              Lightspeed to Klaviyo Integration
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Real-Time POS Data Sync
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
              Connect Lightspeed Retail X to Klaviyo automatically. 
              Real-time sync, two-way sync, and real human support. Better than native integration or Zapier.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-5 bg-gather-green text-white text-lg font-semibold rounded-lg hover:bg-gather-green-dark shadow-lg shadow-gather-green/25 hover:shadow-xl hover:shadow-gather-green/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center justify-center px-8 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-lg font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                See How It Compares
              </a>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 text-center uppercase">
              Built for Lightspeed Retail X
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  How Gather Started
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-black">
                  Gather started as a tool to integrate Lightspeed Retail X to Klaviyo. We saw the gap - Klaviyo's native integration doesn't support X-Series, and agencies were stuck with broken workarounds. So we built a solution specifically for this problem.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  We Found Our Skills in This Space
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  As we solved the Lightspeed X to Klaviyo integration problem, we discovered we were really good at this. We started adding more data points, refining our sync logic, and building features that native integrations simply can't offer. Today, Gather is purpose-built for this exact use case.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Why We're Better Than Native Integrations
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                  Native Lightspeed or Klaviyo integrations are generic, one-size-fits-all solutions. Gather is custom-made for Lightspeed Retail X to Klaviyo integration. Here's what makes us different:
                </p>
                <ul className="space-y-3 text-lg text-black dark:text-white font-bold">
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl">✓</span>
                    <span><strong>Custom-built for this:</strong> We're not a generic integration tool. We built Gather specifically for Lightspeed Retail X to Klaviyo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl">✓</span>
                    <span><strong>Talk to a real person:</strong> When something breaks, you can actually talk to us. No support tickets, no chatbots - real people who understand your problem.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl">✓</span>
                    <span><strong>Two-way sync:</strong> Native integrations are one-way. Gather syncs data both ways - from Lightspeed to Klaviyo, and from Klaviyo back to Lightspeed when needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl">✓</span>
                    <span><strong>More data points:</strong> We've added data points and sync capabilities that native integrations don't support, giving you complete control over what gets synced.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              How Gather Compares
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black dark:border-white">
                <thead>
                  <tr className="bg-gather-green dark:bg-gather-green">
                    <th className="px-6 py-4 text-left font-black text-black dark:text-white uppercase border-4 border-black dark:border-white">Feature</th>
                    <th className="px-6 py-4 text-center font-black text-black dark:text-white uppercase border-4 border-black dark:border-white">Native Integration</th>
                    <th className="px-6 py-4 text-center font-black text-black dark:text-white uppercase border-4 border-black dark:border-white">Zapier</th>
                    <th className="px-6 py-4 text-center font-black text-black dark:text-white uppercase border-4 border-black dark:border-white bg-gather-green dark:bg-gather-green">Gather</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Lightspeed Retail X Support</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">⚠️ Manual Setup</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Custom-Built</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Two-Way Sync</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">⚠️ Complex Setup</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Yes</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Human Support</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">⚠️ Generic</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Real People</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Sync Speed</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Hourly</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Polling (delayed)</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">Real-time (seconds)</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Duplicate Prevention</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">⚠️ Manual</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Automatic</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Setup Time</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Minutes</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">Hours</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">Minutes</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-6 py-4 font-bold text-black dark:text-white border-4 border-black dark:border-white">Retail-Specific Features</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-black dark:text-white border-4 border-black dark:border-white">❌</td>
                    <td className="px-6 py-4 text-center font-black text-gather-green dark:text-gather-green border-4 border-black dark:border-white">✅ Yes</td>
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
              Why Choose Gather for Lightspeed Klaviyo Integration
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Real-Time Sync</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Unlike hourly native syncs or delayed Zapier polling, Gather syncs Lightspeed data to Klaviyo within seconds of a purchase. Your email campaigns respond to in-store sales immediately.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Two-Way Sync</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Native integrations are one-way only. Gather syncs data both ways - from Lightspeed Retail X to Klaviyo, and from Klaviyo back to Lightspeed when needed. This gives you complete control over your customer data flow.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Clean Data, No Duplicates</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Gather automatically prevents duplicate customer profiles and filters out non-Lightspeed-origin orders. Your Klaviyo segments stay clean without manual scrubbing.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Real Human Support</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  When something breaks or you need help, you can actually talk to us. No support tickets, no chatbots, no generic help articles. Real people who built this tool and understand Lightspeed Retail X to Klaviyo integration inside and out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="Lightspeed Klaviyo Integration FAQs"
          description="Common questions about connecting Lightspeed POS to Klaviyo email marketing"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
