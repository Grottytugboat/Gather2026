import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../metadata'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Lightspeed Klaviyo Integration Australia - All Locations | Gather',
  description: 'Gather provides Lightspeed to Klaviyo integration across Australia. Real-time POS data sync for retailers and agencies in Sydney, Melbourne, Brisbane, Perth, Adelaide, and more.',
  keywords: [
    'Lightspeed Klaviyo integration Australia',
    'POS to Klaviyo Australia',
    'Australian retail data sync',
    'Lightspeed integration Sydney',
    'Klaviyo integration Melbourne',
    'Australian ecommerce agencies',
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Lightspeed Klaviyo Integration Across Australia | Gather',
    description: 'Real-time POS to Klaviyo sync for Australian retailers. Serving Sydney, Melbourne, Brisbane, Perth, Adelaide, and all major cities.',
  },
}

const locations = [
  {
    city: 'Sydney',
    state: 'NSW',
    slug: 'sydney',
    description: 'Australia\'s largest city and retail hub. Home to major shopping precincts and thriving ecommerce agencies.',
  },
  {
    city: 'Melbourne',
    state: 'VIC',
    slug: 'melbourne',
    description: 'Victoria\'s creative capital with a vibrant retail scene. Leading destination for fashion and specialty retail.',
  },
  {
    city: 'Brisbane',
    state: 'QLD',
    slug: 'brisbane',
    description: 'Queensland\'s fast-growing retail market. Major hub for tourism retail and lifestyle brands.',
  },
  {
    city: 'Perth',
    state: 'WA',
    slug: 'perth',
    description: 'Western Australia\'s retail centre. Unique market with distinct consumer preferences.',
  },
  {
    city: 'Adelaide',
    state: 'SA',
    slug: 'adelaide',
    description: 'South Australia\'s retail heart. Known for boutique retailers and local brands.',
  },
  {
    city: 'Gold Coast',
    state: 'QLD',
    slug: 'gold-coast',
    description: 'Australia\'s tourism retail capital. High-volume seasonal retail with unique challenges.',
  },
  {
    city: 'Canberra',
    state: 'ACT',
    slug: 'canberra',
    description: 'Australia\'s capital with high-income consumers. Strong demand for quality retail experiences.',
  },
  {
    city: 'Hobart',
    state: 'TAS',
    slug: 'hobart',
    description: 'Tasmania\'s growing retail scene. Specialty foods, crafts, and tourism-focused retail.',
  },
  {
    city: 'Newcastle',
    state: 'NSW',
    slug: 'newcastle',
    description: 'NSW\'s second-largest city. Growing retail sector with strong local focus.',
  },
]

export default function LocationsPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gather',
    description: 'Lightspeed to Klaviyo integration for Australian retailers and ecommerce agencies',
    url: 'https://usegather.com.au',
    areaServed: locations.map(loc => ({
      '@type': 'City',
      name: loc.city,
      containedInPlace: {
        '@type': 'State',
        name: loc.state,
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia',
        },
      },
    })),
    serviceType: 'POS Data Integration',
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
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white uppercase">
              🇦🇺 Serving All of Australia
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight uppercase px-4">
              Lightspeed Klaviyo Integration
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Across Australia
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold px-4">
              Real-time POS data sync for retailers and ecommerce agencies in every major Australian city. 
              Local support, Australian-focused features.
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
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Find Gather in Your City
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {locations.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/locations/${location.slug}`}
                  className="group p-4 sm:p-6 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase">
                      {location.city}
                    </h3>
                    <span className="text-sm font-bold text-gather-green dark:text-gather-green bg-gather-green/10 px-2 py-1 border border-gather-green">
                      {location.state}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-black dark:text-white leading-relaxed font-bold mb-4">
                    {location.description}
                  </p>
                  <span className="inline-flex items-center text-gather-green dark:text-gather-green font-black text-sm uppercase group-hover:translate-x-1 transition-transform">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Australian Retailers Choose Gather */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-8 sm:mb-12 text-center uppercase px-4">
              Why Australian Retailers Choose Gather
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Australian-Focused Support</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  We understand Australian retail. From EOFY sales to Boxing Day rushes, our support team knows your business cycles and challenges.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">AUD Pricing</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  No currency conversion surprises. Gather pricing is in Australian dollars, making budgeting simple and predictable.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Local Timezone Support</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  When you need help during Australian business hours, we're awake. No waiting for US timezones to respond.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">Built in Australia</h3>
                <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Gather was founded in Australia by people who ran Australian ecommerce agencies. We built this for the Australian market first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
