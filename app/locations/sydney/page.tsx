import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sydney Lightspeed Klaviyo Integration - POS Data Sync | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration for Sydney retailers and ecommerce agencies. Real-time POS data sync for retail stores across Sydney, NSW.',
  keywords: [
    'Lightspeed Klaviyo integration Sydney',
    'Sydney ecommerce agency',
    'Sydney retail data sync',
    'POS to Klaviyo Sydney',
    'Sydney Lightspeed integration',
    'Sydney Klaviyo integration',
    'NSW retail integration',
    'Sydney retail automation',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Sydney Lightspeed Klaviyo Integration | Gather',
    description: 'Real-time POS to Klaviyo sync for Sydney retailers. Built for Australian ecommerce agencies.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Do you work with Sydney-based retail stores?',
    answer: 'Yes! Gather works with retail stores across Sydney, from CBD boutiques to suburban shopping centres. We support multi-location retailers with stores in Bondi, Surry Hills, Parramatta, Chatswood, and anywhere else in Greater Sydney.',
  },
  {
    question: 'Can Sydney ecommerce agencies use Gather for their clients?',
    answer: 'Absolutely. Many Sydney ecommerce agencies use Gather to manage Lightspeed to Klaviyo integrations for their retail clients. Our agency dashboard lets you manage all client integrations from one place, with flat pricing that doesn\'t scale with transaction volume.',
  },
  {
    question: 'Do you support same-day setup for Sydney retailers?',
    answer: 'Yes, Gather can be set up in minutes. Sydney retailers can connect their Lightspeed POS and Klaviyo accounts and start syncing data immediately. No developers needed, no complex configuration.',
  },
  {
    question: 'What Sydney retail sectors do you serve?',
    answer: 'Gather serves all retail sectors in Sydney: fashion and apparel, food and beverage, health and beauty, homewares, electronics, and specialty retail. If you use Lightspeed POS and want to sync to Klaviyo, Gather works for you.',
  },
  {
    question: 'Is there local support for Sydney retailers?',
    answer: 'Yes, Gather was founded in Australia and provides local support during Australian business hours. When you need help, you\'re talking to people who understand Australian retail and the Sydney market.',
  },
]

export default function SydneyPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather - Sydney',
    description: 'Lightspeed to Klaviyo integration for Sydney retailers and ecommerce agencies',
    url: 'https://usegather.com.au/locations/sydney',
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
      containedInPlace: {
        '@type': 'State',
        name: 'New South Wales',
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia',
        },
      },
    },
    serviceType: 'POS Data Integration',
    priceRange: '$$',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Link 
              href="/locations"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white uppercase hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Locations
            </Link>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight uppercase px-4">
              Sydney Lightspeed
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Klaviyo Integration
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for Sydney retailers and ecommerce agencies. 
              Connect your Lightspeed stores to Klaviyo in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gather-green dark:bg-gather-green text-black dark:text-white text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px]"
              >
                Get Started Free
                <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-white dark:bg-slate-900 text-black dark:text-white text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px]"
              >
                See Features
              </a>
            </div>
          </div>
        </section>

        {/* Sydney Retail Landscape */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Sydney's Retail Data Challenge
            </h2>
            
            <div className="space-y-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Multi-Location Complexity
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Sydney retailers often operate across multiple locations—CBD flagships, suburban shopping centres, airport stores. Each location generates customer data that needs to flow into your marketing platform. Gather syncs all locations to Klaviyo in real-time, creating a unified customer view.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Competitive Market Demands Speed
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  In Sydney's competitive retail market, timing matters. When a customer makes an in-store purchase, your post-purchase email should go out immediately—not hours later. Gather's real-time sync ensures your Klaviyo flows trigger within seconds of a sale.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Sydney Agencies Trust Gather
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Leading Sydney ecommerce agencies use Gather to manage client integrations. Multi-client dashboard, flat pricing, and Australian support make Gather the preferred choice for agencies tired of juggling broken Zapier workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features for Sydney Retailers */}
        <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Features for Sydney Retailers
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Real-Time Sync</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Customer purchases in your Pitt Street store sync to Klaviyo in seconds. Trigger post-purchase flows, update segments, and track customer behaviour instantly.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Multi-Store Support</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Sync all your Sydney locations—Bondi Junction, Westfield, QVB, Parramatta—to one Klaviyo account. Unified customer profiles across all stores.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Location Segmentation</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Target customers based on which store they shop at. Send North Shore customers different campaigns than Eastern Suburbs shoppers.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Clean Data, No Duplicates</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Customers shopping at multiple Sydney locations don't become duplicate profiles. Gather merges data intelligently for accurate customer views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sydney Areas Served */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Serving All Sydney Areas
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                'Sydney CBD',
                'Bondi',
                'Surry Hills',
                'Paddington',
                'Newtown',
                'Parramatta',
                'Chatswood',
                'North Sydney',
                'Manly',
                'Cronulla',
                'Westfield Sydney',
                'QVB',
                'The Rocks',
                'Darling Harbour',
                'Pyrmont',
                'Ultimo',
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-white text-center font-bold text-black dark:text-white text-sm sm:text-base"
                >
                  {area}
                </div>
              ))}
            </div>
            
            <p className="text-center text-black dark:text-white font-bold mt-8 text-base sm:text-lg">
              And all other Greater Sydney areas. If you're in Sydney and use Lightspeed, Gather works for you.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="Sydney Retailers FAQ"
          description="Common questions from Sydney retailers and ecommerce agencies"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
