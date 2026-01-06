import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Product - Real-Time POS to Marketing Platform Sync | Gather',
  description: 'Connect any POS system to any marketing platform. Gather syncs Lightspeed, Square, Shopify, and more to Klaviyo, Mailchimp, Attentive, Postscript, and Omnisend in real-time.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Product - Real-Time POS to Marketing Platform Sync | Gather',
    description: 'Connect any POS system to any marketing platform. Real-time two-way sync across your entire stack.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'What POS systems does Gather support?',
    answer: 'Gather supports Lightspeed Retail X, Square, Shopify, Cin7, and more. We started with Lightspeed Retail X and expanded to support the entire retail ecosystem. You can sync data from any supported POS to any supported marketing platform.',
  },
  {
    question: 'What marketing platforms can I sync to?',
    answer: 'Gather syncs to Klaviyo, Mailchimp, Attentive, Postscript, Omnisend, and more. You can even sync to multiple platforms simultaneously from a single POS connection. This creates a unified customer view across all your marketing tools.',
  },
  {
    question: 'Can I sync multiple platforms at once?',
    answer: 'Yes! That\'s one of Gather\'s biggest advantages. Connect one POS system (like Lightspeed) and sync to multiple marketing platforms (Klaviyo, Mailchimp, Attentive) simultaneously. Or connect multiple POS systems to one marketing platform. You have complete flexibility.',
  },
  {
    question: 'How does Gather compare to native integrations?',
    answer: 'While many platforms now have native integrations, they\'re basic and limited. Gather offers real-time two-way sync, more data points, advanced filtering, automatic duplicate prevention, multi-platform sync, and real human support. Native integrations are one-way, scheduled syncs with limited features.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Gather can be set up in minutes. Simply connect your accounts via OAuth, configure your sync preferences, and you\'re done. No developers or code required. Smart default mappings handle most use cases out of the box.',
  },
  {
    question: 'Is Gather better than Zapier for retail data sync?',
    answer: 'Yes. Gather is purpose-built for retail data sync, offering real-time event-driven updates (vs Zapier\'s polling intervals), automatic duplicate prevention, retail-specific data mapping, multi-platform sync, and dedicated support. Zapier requires manual workflow setup for each integration and can become expensive as you scale.',
  },
]

export default function LightspeedKlaviyoIntegrationPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Product - Real-Time POS to Marketing Platform Sync',
    description: 'Connect any POS system to any marketing platform. Gather syncs Lightspeed, Square, Shopify, and more to Klaviyo, Mailchimp, Attentive, Postscript, and Omnisend in real-time.',
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
        <section className="relative py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white uppercase">
              Product
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight uppercase px-4">
              Connect Your Entire Stack
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Real-Time Data Sync
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Sync any POS system to any marketing platform. Lightspeed, Square, Shopify to Klaviyo, Mailchimp, Attentive, Postscript, and more. Real-time two-way sync with real human support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4">
              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gather-green dark:bg-gather-green text-black dark:text-white text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px]"
              >
                Get Started Free
                <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#integrations"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-white dark:bg-slate-900 text-black dark:text-white text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px]"
              >
                See All Integrations
              </a>
            </div>
          </div>
        </section>

        {/* Integrations Showcase Section */}
        <section id="integrations" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              All Integrations
            </h2>
            
            {/* POS Systems */}
            <div className="mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-6 sm:mb-8 text-center uppercase">
                POS Systems
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: 'Lightspeed Retail X', desc: 'Real-time two-way sync with advanced filtering and duplicate prevention.' },
                  { name: 'Square', desc: 'Connect Square POS to all your marketing platforms instantly.' },
                  { name: 'Shopify', desc: 'Sync Shopify store data to email and SMS marketing tools.' },
                  { name: 'Cin7', desc: 'Connect inventory and order data across your entire stack.' },
                  { name: 'Vend (Lightspeed X)', desc: 'Full support for Lightspeed X-Series (formerly Vend).' },
                ].map((pos, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                    <h4 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-2 sm:mb-3 uppercase">
                      {pos.name}
                    </h4>
                    <p className="text-sm sm:text-base text-black dark:text-white leading-relaxed font-bold">
                      {pos.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Platforms */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-6 sm:mb-8 text-center uppercase">
                Marketing Platforms
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: 'Klaviyo', desc: 'Sync customer profiles, events, and purchase history into Klaviyo.' },
                  { name: 'Mailchimp', desc: 'Keep audiences and purchase history aligned for smarter campaigns.' },
                  { name: 'Attentive', desc: 'Power SMS personalization with unified customer data.' },
                  { name: 'Postscript', desc: 'Sync customer and purchase signals to sharpen SMS targeting.' },
                  { name: 'Omnisend', desc: 'Unify ecommerce and POS data to improve segmentation and automation.' },
                ].map((platform, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                    <h4 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-2 sm:mb-3 uppercase">
                      {platform.name}
                    </h4>
                    <p className="text-sm sm:text-base text-black dark:text-white leading-relaxed font-bold">
                      {platform.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Platform Sync Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Multi-Platform Sync
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  One POS, Multiple Platforms
                </h3>
                <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Connect one POS system (like Lightspeed) and sync to multiple marketing platforms simultaneously. Send your Lightspeed data to Klaviyo, Mailchimp, and Attentive all at once. No need to set up separate integrations for each platform.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Multiple POS, One Platform
                </h3>
                <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Have multiple POS systems? Sync Lightspeed, Square, and Shopify all to one Klaviyo account. Gather creates a unified customer view by merging data from all your sales channels into one marketing platform.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Complete Flexibility
                </h3>
                <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold mb-4">
                  Gather gives you complete control over your data flow. Mix and match any POS system with any marketing platform. Build the exact integration setup your business needs.
                </p>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-black dark:text-white font-bold">
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl sm:text-2xl">✓</span>
                    <span>Sync one POS to multiple marketing platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl sm:text-2xl">✓</span>
                    <span>Sync multiple POS systems to one marketing platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl sm:text-2xl">✓</span>
                    <span>Create complex multi-directional syncs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gather-green font-black text-xl sm:text-2xl">✓</span>
                    <span>Customize data mapping for each connection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              How Gather Compares
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-2 sm:border-3 md:border-4 border-black dark:border-white">
                <thead>
                  <tr className="bg-gather-green dark:bg-gather-green">
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-black text-black dark:text-white uppercase border-2 sm:border-3 md:border-4 border-black dark:border-white">Feature</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-black dark:text-white uppercase border-2 sm:border-3 md:border-4 border-black dark:border-white">Native Integration</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-black dark:text-white uppercase border-2 sm:border-3 md:border-4 border-black dark:border-white">Zapier</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-black dark:text-white uppercase border-2 sm:border-3 md:border-4 border-black dark:border-white bg-gather-green dark:bg-gather-green">Gather</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Multi-Platform Support</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌ Limited</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">⚠️ Manual Setup</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">✅ All Platforms</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Two-Way Sync</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">⚠️ Complex</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">✅ Yes</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Human Support</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">⚠️ Generic</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">✅ Real People</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Sync Speed</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Hourly</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Polling (delayed)</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">Real-time (seconds)</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Duplicate Prevention</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">⚠️ Manual</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">✅ Automatic</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Multi-Platform Sync</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">⚠️ Complex</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">✅ Easy</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">Retail-Specific Features</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-bold text-black dark:text-white border-2 sm:border-3 md:border-4 border-black dark:border-white">❌</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-black text-gather-green dark:text-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white">✅ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Why Choose Gather
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Real-Time Sync</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Unlike hourly native syncs or delayed Zapier polling, Gather syncs data within seconds of a purchase. Your marketing campaigns respond to sales immediately, whether they're from Lightspeed, Square, or Shopify.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Two-Way Sync</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Native integrations are one-way only. Gather syncs data both ways - from POS to marketing platforms, and from marketing platforms back to POS when needed. Complete control over your customer data flow.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Clean Data, No Duplicates</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Gather automatically prevents duplicate customer profiles and filters out unwanted sales (like wholesale or staff purchases). Your marketing segments stay clean without manual scrubbing.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Real Human Support</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  When something breaks or you need help, you can actually talk to us. No support tickets, no chatbots, no generic help articles. Real people who built this tool and understand retail data sync inside and out.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Multi-Platform Sync</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Connect one POS to multiple marketing platforms, or multiple POS systems to one platform. Gather gives you the flexibility to build the exact integration setup your business needs.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Advanced Filtering</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Customize exactly what data gets synced. Filter out specific sales types, customer segments, or product categories. Keep your marketing data clean and relevant to your campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="Product FAQs"
          description="Common questions about Gather's integrations and capabilities"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
