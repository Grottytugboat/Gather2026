import type { Metadata } from 'next'
import { defaultMetadata } from '../../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Canberra Lightspeed Klaviyo Integration - POS Data Sync | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration for Canberra retailers and ecommerce agencies. Real-time POS data sync for retail stores in the ACT.',
  keywords: [
    'Lightspeed Klaviyo integration Canberra',
    'Canberra ecommerce agency',
    'Canberra retail data sync',
    'POS to Klaviyo Canberra',
    'ACT retail integration',
    'Canberra Lightspeed integration',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Canberra Lightspeed Klaviyo Integration | Gather',
    description: 'Real-time POS to Klaviyo sync for Canberra retailers. Built for Australian ecommerce agencies.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'Do you work with Canberra-based retail stores?',
    answer: 'Yes! Gather works with retail stores across Canberra, from Civic to suburban town centres. We support retailers in Kingston, Manuka, Braddon, and throughout the ACT.',
  },
  {
    question: 'Can Canberra ecommerce agencies use Gather?',
    answer: 'Absolutely. ACT ecommerce agencies use Gather to manage Lightspeed to Klaviyo integrations. Our agency dashboard lets you manage all client integrations from one place.',
  },
  {
    question: 'Do you support Canberra\'s high-income retail market?',
    answer: 'Yes, Canberra has one of Australia\'s highest average incomes. Gather helps retailers capitalise on this affluent market with personalised marketing based on real purchase behaviour.',
  },
]

export default function CanberraPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather - Canberra',
    description: 'Lightspeed to Klaviyo integration for Canberra retailers',
    url: 'https://usegather.com.au/locations/canberra',
    areaServed: { '@type': 'City', name: 'Canberra', containedInPlace: { '@type': 'State', name: 'Australian Capital Territory' } },
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
              Canberra Lightspeed<span className="block text-gather-green mt-2">Klaviyo Integration</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for Canberra retailers and ecommerce agencies. Australia's capital deserves premium retail technology.
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase">Canberra's Premium Retail Market</h2>
            <div className="space-y-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">High-Income Consumers</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Canberra has Australia's highest average household income. Retailers serving this market need sophisticated data management to deliver personalised experiences. Gather enables targeted marketing based on complete purchase history.
                </p>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 uppercase">Quality Over Quantity</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Canberra consumers value quality and service. Gather helps retailers build deep customer relationships through personalised communications, loyalty recognition, and tailored product recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center uppercase">Serving All Canberra Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {['Civic', 'Kingston', 'Manuka', 'Braddon', 'Dickson', 'Belconnen', 'Woden', 'Tuggeranong', 'Gungahlin', 'Fyshwick', 'Deakin', 'Yarralumla'].map((area, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-2 border-black dark:border-white text-center font-bold text-black dark:text-white text-sm sm:text-base">{area}</div>
              ))}
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} title="Canberra Retailers FAQ" description="Common questions from Canberra retailers" />
        <FinalCTA />
      </main>
    </>
  )
}
