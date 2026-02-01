import type { Metadata } from 'next'
import { defaultMetadata } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Perth Lightspeed Klaviyo Integration - POS Data Sync | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration for Perth retailers and ecommerce agencies. Real-time POS data sync for retail stores across Perth, WA.',
  keywords: [
    'Lightspeed Klaviyo integration Perth',
    'Perth ecommerce agency',
    'Perth retail data sync',
    'POS to Klaviyo Perth',
    'Perth Lightspeed integration',
    'WA retail integration',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Perth Lightspeed Klaviyo Integration | Gather',
    description: 'Real-time POS to Klaviyo sync for Perth retailers. Built for Australian ecommerce agencies.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Do you work with Perth-based retail stores?',
    answer: 'Yes! Gather works with retail stores across Perth, from CBD boutiques to suburban centres. We support retailers in Fremantle, Subiaco, Claremont, and anywhere else in Greater Perth.',
  },
  {
    question: 'Can Perth ecommerce agencies use Gather?',
    answer: 'Absolutely. Western Australian ecommerce agencies use Gather to manage Lightspeed to Klaviyo integrations for their retail clients. Our agency dashboard lets you manage all client integrations from one place.',
  },
  {
    question: 'Do you support Perth\'s unique retail market?',
    answer: 'Yes, Perth has a unique retail landscape due to its isolation and affluent consumer base. Gather helps Perth retailers leverage real-time customer data for personalised marketing.',
  },
]

export default function PerthPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather - Perth',
    description: 'Lightspeed to Klaviyo integration for Perth retailers',
    url: 'https://usegather.com.au/locations/perth',
    areaServed: { '@type': 'City', name: 'Perth', containedInPlace: { '@type': 'State', name: 'Western Australia' } },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        <section className="relative py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Link href="/locations" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal text-xs sm:text-sm font-black text-black uppercase hover:translate-x-1 hover:translate-y-1 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              All Locations
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight uppercase px-4">
              Perth Lightspeed<span className="block text-gather-green mt-2">Klaviyo Integration</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for Perth retailers and ecommerce agencies. Western Australia's retail market deserves real-time data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4">
              <a href="/contact" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 bg-gather-green text-black text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black shadow-brutal-sm sm:shadow-brutal hover:translate-x-1 hover:translate-y-1 transition-all min-h-[44px]">
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase">Perth's Unique Retail Landscape</h2>
            <div className="space-y-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Affluent Consumer Base</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Perth's mining-driven economy creates an affluent consumer base with high disposable income. Retailers need sophisticated marketing to capture this premium market. Gather enables personalised campaigns powered by real-time purchase data.
                </p>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Isolated Market Advantage</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Perth's geographic isolation means local retailers can build strong customer relationships. Gather helps you leverage this advantage by enabling deeply personalised marketing based on complete customer purchase history.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center uppercase">Serving All Perth Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {['Perth CBD', 'Fremantle', 'Subiaco', 'Claremont', 'Cottesloe', 'Leederville', 'Mount Lawley', 'Victoria Park', 'Joondalup', 'Karrinyup', 'Garden City', 'Hay Street Mall'].map((area, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-white text-center font-bold text-black dark:text-white text-sm sm:text-base">{area}</div>
              ))}
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Perth Retailers FAQ" description="Common questions from Perth retailers" />
        <FinalCTA />
      </main>
    </>
  )
}
