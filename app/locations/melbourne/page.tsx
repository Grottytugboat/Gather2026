import type { Metadata } from 'next'
import { defaultMetadata } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Melbourne Lightspeed Klaviyo Integration - POS Data Sync | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration for Melbourne retailers and ecommerce agencies. Real-time POS data sync for retail stores across Melbourne, VIC.',
  keywords: [
    'Lightspeed Klaviyo integration Melbourne',
    'Melbourne ecommerce agency',
    'Melbourne retail data sync',
    'POS to Klaviyo Melbourne',
    'Melbourne Lightspeed integration',
    'Melbourne Klaviyo integration',
    'VIC retail integration',
    'Melbourne retail automation',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Melbourne Lightspeed Klaviyo Integration | Gather',
    description: 'Real-time POS to Klaviyo sync for Melbourne retailers. Built for Australian ecommerce agencies.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Do you work with Melbourne-based retail stores?',
    answer: 'Yes! Gather works with retail stores across Melbourne, from Chapel Street boutiques to suburban shopping centres. We support multi-location retailers with stores in Fitzroy, South Yarra, Chadstone, and anywhere else in Greater Melbourne.',
  },
  {
    question: 'Can Melbourne ecommerce agencies use Gather for their clients?',
    answer: 'Absolutely. Many Melbourne ecommerce agencies use Gather to manage Lightspeed to Klaviyo integrations for their retail clients. Our agency dashboard lets you manage all client integrations from one place, with flat pricing that doesn\'t scale with transaction volume.',
  },
  {
    question: 'Do you support Melbourne\'s fashion retail scene?',
    answer: 'Yes, Melbourne is Australia\'s fashion capital, and many of our clients are fashion retailers. Gather handles the complexity of seasonal collections, size variants, and style-based segmentation that fashion retailers need.',
  },
  {
    question: 'What Melbourne retail sectors do you serve?',
    answer: 'Gather serves all retail sectors in Melbourne: fashion and apparel, food and beverage, health and beauty, homewares, electronics, specialty retail, and more. If you use Lightspeed POS and want to sync to Klaviyo, Gather works for you.',
  },
  {
    question: 'Is there local support for Melbourne retailers?',
    answer: 'Yes, Gather was founded in Australia and provides local support during Australian business hours. When you need help, you\'re talking to people who understand Australian retail and the Melbourne market.',
  },
]

export default function MelbournePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather - Melbourne',
    description: 'Lightspeed to Klaviyo integration for Melbourne retailers and ecommerce agencies',
    url: 'https://usegather.com.au/locations/melbourne',
    areaServed: {
      '@type': 'City',
      name: 'Melbourne',
      containedInPlace: {
        '@type': 'State',
        name: 'Victoria',
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
              Melbourne Lightspeed
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Klaviyo Integration
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for Melbourne retailers and ecommerce agencies. 
              Perfect for fashion retail, lifestyle brands, and multi-store operations.
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

        {/* Melbourne Retail Landscape */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Melbourne's Unique Retail Scene
            </h2>
            
            <div className="space-y-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Fashion Capital of Australia
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Melbourne's fashion retail scene demands sophisticated data management. From Chapel Street boutiques to Collins Street flagships, retailers need real-time customer insights to compete. Gather syncs every in-store purchase to Klaviyo instantly, enabling personalised marketing that converts.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Laneway and Boutique Retail
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Melbourne's famous laneways are home to unique boutique retailers. These businesses compete on customer experience and personalisation—exactly what Gather enables. Know your customers' preferences, purchase history, and shopping patterns across all touchpoints.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  Melbourne Agencies Trust Gather
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Leading Melbourne ecommerce agencies use Gather to manage client integrations. From Richmond to South Melbourne, agencies trust Gather's reliability, flat pricing, and Australian support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features for Melbourne Retailers */}
        <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Features for Melbourne Retailers
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Real-Time Sync</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Customer purchases in your Fitzroy store sync to Klaviyo in seconds. Trigger post-purchase flows, update segments, and track customer behaviour instantly.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Multi-Store Support</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Sync all your Melbourne locations—Chadstone, Emporium, South Yarra, Collingwood—to one Klaviyo account. Unified customer profiles across all stores.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Fashion-Ready Features</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Handle size variants, colour options, and seasonal collections. Perfect for Melbourne's fashion retailers who need sophisticated product data in Klaviyo.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Location Segmentation</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Target customers based on which store they shop at. Send Inner North customers different campaigns than Eastern Suburbs shoppers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Melbourne Areas Served */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Serving All Melbourne Areas
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                'Melbourne CBD',
                'Fitzroy',
                'Collingwood',
                'South Yarra',
                'Chapel Street',
                'Richmond',
                'Prahran',
                'St Kilda',
                'Brunswick',
                'Carlton',
                'Chadstone',
                'Emporium',
                'Southbank',
                'Docklands',
                'South Melbourne',
                'Port Melbourne',
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
              And all other Greater Melbourne areas. If you're in Melbourne and use Lightspeed, Gather works for you.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="Melbourne Retailers FAQ"
          description="Common questions from Melbourne retailers and ecommerce agencies"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
