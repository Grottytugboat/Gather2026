import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sync POS Data to Klaviyo - Offline Sales Integration | Gather',
  description: 'Connect your point-of-sale system to Klaviyo automatically. Sync offline sales, in-store customer data, and purchase history to email marketing. Real-time integration for retail.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Sync POS Data to Klaviyo - Offline Sales Integration | Gather',
    description: 'Connect your point-of-sale system to Klaviyo automatically. Sync offline sales and in-store customer data.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'How do I sync my POS customers to my email list?',
    answer: 'Gather connects your POS system (like Lightspeed, Retail Express, or Square) directly to Klaviyo. Once connected, all customer data from in-store purchases automatically syncs to your Klaviyo account. No manual exports or imports needed.',
  },
  {
    question: 'What\'s the best way to connect offline sales to Klaviyo?',
    answer: 'The best approach is using a purpose-built integration tool like Gather that syncs POS data to Klaviyo in real-time. This ensures your email marketing campaigns have complete customer data-both online and offline purchases-enabling true omnichannel personalization.',
  },
  {
    question: 'Can I import historical POS data into Klaviyo?',
    answer: 'Yes, Gather can sync up to 5 years of historical customer and sales data from your POS to Klaviyo. This gives you a complete view of customer lifetime value and purchase behavior for better segmentation and targeting.',
  },
  {
    question: 'Why is my Klaviyo data incomplete?',
    answer: 'If your Klaviyo data is missing in-store purchases, it\'s likely because your POS isn\'t connected. Many retailers run separate systems for online (Shopify) and offline (POS), creating data silos. Gather unifies this data by syncing POS transactions to Klaviyo automatically.',
  },
  {
    question: 'How does syncing POS data improve email marketing?',
    answer: 'When POS data syncs to Klaviyo, you can create segments based on total customer value (online + offline), send targeted campaigns to in-store buyers, run win-back campaigns for customers who haven\'t purchased recently, and personalize emails based on complete purchase history. This typically increases repeat purchase rates and average order value.',
  },
  {
    question: 'Which POS systems work with Klaviyo?',
    answer: 'Gather currently supports Lightspeed Retail X with more platforms coming soon. While Lightspeed and Klaviyo now have a native integration, it\'s basic and limited. Gather offers way more features - real-time two-way sync, better filtering, more data points, and real human support. For a powerful Lightspeed Retail X integration, Gather is the better choice.',
  },
]

export default function POSToKlaviyoPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Sync POS Data to Klaviyo - Offline Sales Integration',
    description: 'Complete guide to connecting point-of-sale systems to Klaviyo for unified customer data and better email marketing.',
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
              Unify Online & Offline Customer Data
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight">
              Sync POS Data to Klaviyo
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Offline Sales Integration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
              Connect your point-of-sale system to Klaviyo automatically. 
              Sync offline sales, in-store customer data, and purchase history to email marketing in real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-5 bg-gather-green text-white text-lg font-semibold rounded-lg hover:bg-gather-green-dark shadow-lg shadow-gather-green/25 hover:shadow-xl hover:shadow-gather-green/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-lg font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 text-center uppercase">
              The Problem: Siloed Customer Data
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Online and Offline Data Live in Separate Worlds
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Most retailers run separate systems: a POS for in-store sales and an eCommerce platform (like Shopify) for online. Customer data remains fragmented. Your email marketing only sees half the picture-missing in-store purchases means missed opportunities for personalization and retention.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Manual Exports Are Error-Prone and Time-Consuming
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Some agencies try to bridge the gap by manually exporting POS data and importing it to Klaviyo. This is tedious, error-prone, and doesn't scale. You're constantly playing catch-up, and your email campaigns are always working with outdated information.
                </p>
              </div>

              <div className="p-6 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Gather Unifies Your Customer Data
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-black">
                  Gather automatically syncs POS data to Klaviyo in real-time. Every in-store purchase updates your Klaviyo customer profiles instantly. You get a complete view of customer behavior-online and offline-enabling true omnichannel marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              Why Sync POS Data to Klaviyo?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Complete Customer Profiles</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  See the full picture: online purchases, in-store sales, total lifetime value, and purchase frequency. Create segments based on complete customer behavior, not just online activity.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Target In-Store Buyers</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Send follow-up emails to customers who bought in-store. Offer online-exclusive deals, invite them to join your loyalty program, or simply say thank you. Turn one-time in-store buyers into repeat customers.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Prevent Win-Back Mistakes</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Without POS data, you might send "we miss you" emails to customers who actually bought in-store last week. Syncing POS data prevents these embarrassing mistakes and keeps your messaging relevant.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Increase Repeat Purchase Rates</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Retailers who sync in-store data to Klaviyo see higher average order values and more repeat purchases. When offline buyers get the same personalized flows as online shoppers, they convert more often.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              How Agencies Use POS to Klaviyo Sync
            </h2>
            
            <div className="space-y-6">
              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Post-Purchase Email Sequences</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Trigger automated email flows when customers make in-store purchases. Send thank you emails, product recommendations, and loyalty program invites-just like you do for online orders.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Unified Segmentation</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Create segments like "High-value customers ($500+ total)" that include both online and offline purchases. Target VIP customers with exclusive offers regardless of where they shop.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Cross-Channel Campaigns</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Run campaigns that bridge online and offline. For example: "Shop online and get 10% off your next in-store purchase" or "Visit our store and get free shipping on your next online order."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="POS to Klaviyo Integration FAQs"
          description="Common questions about syncing point-of-sale data to Klaviyo"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
