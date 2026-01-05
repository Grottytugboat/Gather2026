export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden border-b-4 border-black dark:border-white">
      <div className="relative max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white max-w-full">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black dark:bg-white flex-shrink-0"></span>
          <span className="whitespace-normal sm:whitespace-nowrap">BUILT FOR AGENCIES TIRED OF BROKEN INTEGRATIONS</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black dark:text-white leading-[1.1] sm:leading-[1.2] tracking-tight text-center uppercase px-4">
          <span className="block mb-3 sm:mb-4">
            Stop Babysitting Systems That
          </span>
          <span className="block mt-2 sm:mt-3" style={{ fontFamily: '"Nosifer", cursive' }}>
            Quietly Kill Sales
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold text-balance px-4">
          Built for ecommerce agencies tired of broken integrations. Connect offline sales to email marketing automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#features"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gather-green dark:bg-gather-green text-black dark:text-white text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px] sm:min-h-0"
          >
            <span className="whitespace-nowrap">See How It Works</span>
            <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="https://buy.stripe.com/7sY4gB7fC4zrgtadbZe3e0b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-white dark:bg-slate-900 text-black dark:text-white text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px] sm:min-h-0"
          >
            Get Started
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="pt-8 sm:pt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-black dark:text-white px-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-base sm:text-lg">💳</span>
            <span>NO CREDIT CARD</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-base sm:text-lg">⚡</span>
            <span>SET UP IN MINUTES</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-base sm:text-lg">🔌</span>
            <span>WORKS WITH YOUR STACK</span>
          </div>
        </div>
      </div>
    </section>
  )
}
