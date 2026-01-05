export default function WhoItsFor() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
            Who It's For
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 md:p-8 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black dark:bg-white border-2 sm:border-4 border-black dark:border-white flex items-center justify-center flex-shrink-0">
                <span className="text-white dark:text-black font-black text-lg sm:text-xl md:text-2xl">✓</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black dark:text-white uppercase">Perfect For</h3>
            </div>
            <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
              Ecommerce agencies and Shopify agencies that manage multiple retail client integrations. If you're an agency owner tired of fixing broken Lightspeed Klaviyo integrations, this is for you.
            </p>
          </div>
          
          <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark opacity-70">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-400 dark:bg-slate-600 border-2 sm:border-4 border-black dark:border-white flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg sm:text-xl md:text-2xl">×</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black dark:text-white uppercase">Not For</h3>
            </div>
            <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
              Solo freelancers handling one store, or large enterprises with dedicated tech teams. This might be more than you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
