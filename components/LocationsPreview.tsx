import Link from 'next/link'

const locations = [
  { city: 'Sydney', state: 'NSW', slug: 'sydney' },
  { city: 'Melbourne', state: 'VIC', slug: 'melbourne' },
  { city: 'Brisbane', state: 'QLD', slug: 'brisbane' },
  { city: 'Perth', state: 'WA', slug: 'perth' },
  { city: 'Adelaide', state: 'SA', slug: 'adelaide' },
  { city: 'Gold Coast', state: 'QLD', slug: 'gold-coast' },
]

export default function LocationsPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white uppercase mb-4 sm:mb-6">
            🇦🇺 Serving Australia
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white uppercase px-4">
            Lightspeed Klaviyo Integration
            <span className="block text-gather-green dark:text-gather-green mt-2">
              Across Australia
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold mt-4 px-4">
            Real-time POS data sync for retailers and ecommerce agencies in every major Australian city.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {locations.map((location, idx) => (
            <Link
              key={idx}
              href={`/locations/${location.slug}`}
              className="group p-3 sm:p-4 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-center"
            >
              <h3 className="text-base sm:text-lg font-black text-black dark:text-white uppercase group-hover:text-gather-green dark:group-hover:text-gather-green transition-colors">
                {location.city}
              </h3>
              <span className="text-xs font-bold text-black/60 dark:text-white/60">
                {location.state}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/locations"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-900 text-black dark:text-white text-sm sm:text-base font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
          >
            View All Locations
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
