import type { Metadata } from 'next'
import { defaultMetadata } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Gold Coast Lightspeed Klaviyo Integration - POS Data Sync | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration for Gold Coast retailers and ecommerce agencies. Real-time POS data sync for tourism and lifestyle retail.',
  keywords: [
    'Lightspeed Klaviyo integration Gold Coast',
    'Gold Coast ecommerce agency',
    'Gold Coast retail data sync',
    'POS to Klaviyo Gold Coast',
    'Gold Coast tourism retail',
    'QLD retail integration',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Gold Coast Lightspeed Klaviyo Integration | Gather',
    description: 'Real-time POS to Klaviyo sync for Gold Coast retailers. Built for tourism and lifestyle retail.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Do you work with Gold Coast retail stores?',
    answer: 'Yes! Gather works with retail stores across the Gold Coast, from Surfers Paradise to Broadbeach and Coolangatta. We understand the unique challenges of tourism-heavy retail.',
  },
  {
    question: 'Can Gold Coast agencies use Gather?',
    answer: 'Absolutely. Gold Coast ecommerce agencies use Gather to manage Lightspeed to Klaviyo integrations for their retail clients, especially those in the tourism and lifestyle sectors.',
  },
  {
    question: 'Do you support seasonal tourism retail?',
    answer: 'Yes, the Gold Coast has significant seasonal variations in retail traffic. Gather helps retailers capture tourist customer data during peak seasons and maintain engagement year-round through automated Klaviyo campaigns.',
  },
]

export default function GoldCoastPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather - Gold Coast',
    description: 'Lightspeed to Klaviyo integration for Gold Coast retailers',
    url: 'https://usegather.com.au/locations/gold-coast',
    areaServed: { '@type': 'City', name: 'Gold Coast', containedInPlace: { '@type': 'State', name: 'Queensland' } },
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
              Gold Coast Lightspeed<span className="block text-gather-green mt-2">Klaviyo Integration</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for Gold Coast retailers. Capture tourist customers and drive repeat visits with automated marketing.
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase">Tourism Retail Specialists</h2>
            <div className="space-y-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Capture Tourist Customers</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Millions of tourists visit the Gold Coast each year. Every in-store purchase is an opportunity to build a lasting customer relationship. Gather syncs tourist purchases to Klaviyo instantly, enabling "welcome back" campaigns and off-season engagement.
                </p>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Lifestyle & Surf Retail</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  The Gold Coast is home to iconic surf and lifestyle brands. Gather helps these retailers sync customer data for campaigns around new collections, end-of-season sales, and lifestyle content that keeps customers engaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center uppercase">Serving All Gold Coast Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {['Surfers Paradise', 'Broadbeach', 'Coolangatta', 'Burleigh Heads', 'Palm Beach', 'Southport', 'Robina', 'Pacific Fair', 'Harbour Town', 'Main Beach', 'Currumbin', 'Miami'].map((area, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-white text-center font-bold text-black dark:text-white text-sm sm:text-base">{area}</div>
              ))}
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Gold Coast Retailers FAQ" description="Common questions from Gold Coast retailers" />
        <FinalCTA />
      </main>
    </>
  )
}
