'use client'

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gather-green dark:bg-gather-green border-b-4 border-black dark:border-white">
      <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-black dark:text-white mb-4 sm:mb-6 uppercase px-4">
          Tired of babysitting systems that quietly kill sales?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join agencies who've stopped fighting integrations and started growing revenue.
        </p>
        <div className="px-4">
          <a
            href="https://buy.stripe.com/7sY4gB7fC4zrgtadbZe3e0b"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-900 text-black dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-2 hover:translate-y-2 transition-all duration-150 min-h-[44px] sm:min-h-0 w-full sm:w-auto"
          >
            <span className="whitespace-nowrap">Get Started Free</span>
            <svg className="ml-2 sm:ml-3 md:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        <p className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold mt-4 sm:mt-6 px-4">
          NO CREDIT CARD REQUIRED • SET UP IN 5 MINUTES
        </p>
      </div>
    </section>
  )
}
