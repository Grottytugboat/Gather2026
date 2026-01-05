import Link from 'next/link'

export default function TheShift() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white mb-4 sm:mb-6 uppercase">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
            The Shift
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 dark:bg-red-600 border-2 sm:border-4 border-black dark:border-white flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-lg sm:text-xl md:text-2xl">×</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-black dark:text-white uppercase">The Old Way</h3>
              </div>
              <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
                Managing connections between Shopify, Lightspeed, Klaviyo, and everywhere else. Constantly fixing broken syncs. Wasting time on maintenance instead of growth.
              </p>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black dark:bg-white border-2 sm:border-4 border-black dark:border-white flex items-center justify-center flex-shrink-0">
                  <span className="text-white dark:text-black font-black text-lg sm:text-xl md:text-2xl">✓</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-black dark:text-white uppercase">The Gather Way</h3>
              </div>
              <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-black">
                One clean place where customer data lives. Pushed wherever it needs to go - automatically, reliably, without you thinking about it.
              </p>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="p-6 sm:p-8 md:p-10 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black dark:bg-white border-2 sm:border-4 border-black dark:border-white mb-3 sm:mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white uppercase">One Source of Truth</h3>
                <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold">
                  Pushed everywhere. No more broken syncs.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap px-2">
              <Link href="/integrations/shopify" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                SHOPIFY
              </Link>
              <Link href="/integrations/lightspeed" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                LIGHTSPEED
              </Link>
              <Link href="/integrations/klaviyo" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                KLAVIYO
              </Link>
              <Link href="/integrations/square" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                SQUARE
              </Link>
              <Link href="/integrations/vend" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                VEND
              </Link>
              <Link href="/integrations/cin7" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                CIN7
              </Link>
              <Link href="/integrations/attentive" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                ATTENTIVE
              </Link>
              <Link href="/integrations/mailchimp" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                MAILCHIMP
              </Link>
              <Link href="/integrations/postscript" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                POSTSCRIPT
              </Link>
              <Link href="/integrations/omnisend" className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-xs sm:text-sm font-black text-black dark:text-white min-h-[36px] sm:min-h-0 flex items-center justify-center">
                OMNISEND
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
