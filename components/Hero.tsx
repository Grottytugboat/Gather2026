export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden border-b-4 border-black dark:border-white">
      <div className="relative max-w-5xl mx-auto text-center space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 z-10">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-black text-black dark:text-white leading-[1.1] sm:leading-[1.15] md:leading-[1.2] tracking-tight text-center uppercase px-2 sm:px-4">
          <span className="block mb-2 sm:mb-3 md:mb-4">
            Stop Babysitting Systems That
          </span>
          <span className="block mt-1 sm:mt-2 md:mt-3" style={{ fontFamily: '"Nosifer", cursive' }}>
            Quietly Kill Sales
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold text-balance px-2 sm:px-4">
          Never lose another sale to missing data. Real-time Klaviyo sync that just works.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4 w-full sm:w-auto px-2 sm:px-4 sm:px-0">
          <a
            href="#features"
            className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 sm:py-4 md:py-5 lg:py-6 bg-gather-green dark:bg-gather-green text-black dark:text-white text-sm sm:text-base md:text-lg font-black uppercase border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px]"
          >
            <span className="whitespace-nowrap">See How It Works</span>
            <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="https://buy.stripe.com/7sY4gB7fC4zrgtadbZe3e0b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 lg:px-10 py-3.5 sm:py-4 md:py-5 lg:py-6 bg-white dark:bg-slate-900 text-black dark:text-white text-sm sm:text-base md:text-lg font-black uppercase border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px]"
          >
            Get Started
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm font-bold text-black dark:text-white px-2 sm:px-4">
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <span className="text-sm sm:text-base md:text-lg">💳</span>
            <span className="whitespace-nowrap">NO CREDIT CARD</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <span className="text-sm sm:text-base md:text-lg">⚡</span>
            <span className="whitespace-nowrap">SET UP IN MINUTES</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <span className="text-sm sm:text-base md:text-lg">🔌</span>
            <span className="whitespace-nowrap">WORKS WITH YOUR STACK</span>
          </div>
        </div>
      </div>
    </section>
  )
}
