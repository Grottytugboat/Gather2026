export default function HowItFits() {
  const integrations = ['Shopify', 'Lightspeed', 'Retail Express', 'Klaviyo', 'WooCommerce', 'Mailchimp', 'HubSpot']
  
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
            How It Fits
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white flex items-center justify-center">
                <span className="text-black dark:text-white font-black text-base sm:text-lg md:text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">Sits Quietly in the Background</h3>
                <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Gather doesn't replace your existing tools - it connects Lightspeed POS to Klaviyo seamlessly. You set it up once, and it syncs customer data and offline sales automatically.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white flex items-center justify-center">
                <span className="text-black dark:text-white font-black text-base sm:text-lg md:text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">Zero Disruption</h3>
                <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-bold">
                  Your team keeps using Lightspeed, Klaviyo, and Shopify as usual. Gather handles the POS data sync behind the scenes, unifying online and offline customer data.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
            <h3 className="text-lg sm:text-xl font-black text-black dark:text-white mb-4 sm:mb-6 text-center uppercase">Works With Your Stack</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {integrations.map((integration, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-black dark:text-white font-black text-xs sm:text-sm uppercase hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[36px] sm:min-h-0 flex items-center justify-center"
                >
                  {integration}
                </span>
              ))}
            </div>
            <p className="text-center text-black dark:text-white text-xs sm:text-sm mt-4 sm:mt-6 font-bold">
              Lightspeed Retail X • Klaviyo • Shopify • And more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
