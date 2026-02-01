import type { Metadata } from 'next'
import { defaultMetadata } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Newcastle Lightspeed Klaviyo Integration - POS Data Sync | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration for Newcastle retailers and ecommerce agencies. Real-time POS data sync for NSW\'s second-largest city.',
  keywords: [
    'Lightspeed Klaviyo integration Newcastle',
    'Newcastle ecommerce agency',
    'Newcastle retail data sync',
    'POS to Klaviyo Newcastle',
    'NSW retail integration',
    'Hunter Valley retail',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Newcastle Lightspeed Klaviyo Integration | Gather',
    description: 'Real-time POS to Klaviyo sync for Newcastle retailers. Built for NSW\'s second-largest city.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Do you work with Newcastle-based retail stores?',
    answer: 'Yes! Gather works with retail stores across Newcastle, from the CBD to suburban centres. We support retailers in Honeysuckle, Darby Street, and throughout the Hunter region.',
  },
  {
    question: 'Can Newcastle ecommerce agencies use Gather?',
    answer: 'Absolutely. Newcastle and Hunter Valley ecommerce agencies use Gather to manage Lightspeed to Klaviyo integrations. Our agency dashboard lets you manage all client integrations from one place.',
  },
  {
    question: 'Do you support the Hunter Valley retail scene?',
    answer: 'Yes, we serve the entire Hunter region including Newcastle, Lake Macquarie, and the Hunter Valley wine region. Gather helps retailers sync customer data for targeted marketing campaigns.',
  },
]

export default function NewcastlePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather - Newcastle',
    description: 'Lightspeed to Klaviyo integration for Newcastle retailers',
    url: 'https://usegather.com.au/locations/newcastle',
    areaServed: { '@type': 'City', name: 'Newcastle', containedInPlace: { '@type': 'State', name: 'New South Wales' } },
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
              Newcastle Lightspeed<span className="block text-gather-green mt-2">Klaviyo Integration</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for Newcastle retailers. NSW's second-largest city deserves real-time data.
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase">Newcastle's Growing Retail Scene</h2>
            <div className="space-y-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Urban Renewal & Retail Growth</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Newcastle's urban renewal has transformed the city's retail landscape. From Honeysuckle to the new light rail corridor, retailers are capitalising on renewed consumer interest. Gather helps these businesses sync customer data for targeted marketing.
                </p>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Hunter Valley Connection</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Newcastle serves as the gateway to the Hunter Valley wine region. Gather helps retailers capture tourist customers visiting the region and maintain engagement through targeted Klaviyo campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center uppercase">Serving All Hunter Region</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {['Newcastle CBD', 'Honeysuckle', 'Darby Street', 'Charlestown', 'Kotara', 'Jesmond', 'Mayfield', 'Hamilton', 'Lake Macquarie', 'Maitland', 'Cessnock', 'Hunter Valley'].map((area, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-white text-center font-bold text-black dark:text-white text-sm sm:text-base">{area}</div>
              ))}
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Newcastle Retailers FAQ" description="Common questions from Newcastle retailers" />
        <FinalCTA />
      </main>
    </>
  )
}
