export default function Problem() {
  const painPoints = [
    "Your clients' customer data lives in three different places-Lightspeed POS, Shopify, and Klaviyo-and they never sync properly.",
    "Every Lightspeed to Klaviyo sync breaks. Every week. You're constantly troubleshooting Zapier workflows or custom API integrations.",
    "You're the one getting the 2am emails when POS orders don't sync to Klaviyo, and your client's email campaigns are missing in-store sales data.",
    "You're the one manually fixing broken connections that should just work. Native integrations don't support Lightspeed X-Series, and Zapier requires constant babysitting.",
    "And every time you fix it, you're not building new features. You're not growing revenue. You're just keeping the lights on-maintaining integrations instead of creating value.",
  ]

  return (
    <section id="problem" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
            Sound Familiar?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white max-w-2xl mx-auto px-4">
            If you're nodding along, you're not alone.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 dark:bg-red-600 border-2 sm:border-4 border-black dark:border-white flex items-center justify-center mt-0.5 sm:mt-1">
                <span className="text-white font-black text-base sm:text-xl">×</span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed flex-1 font-bold">
                {point}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black dark:text-white uppercase bg-gather-green dark:bg-gather-green px-4 sm:px-6 md:px-8 py-3 sm:py-4 inline-block border-2 sm:border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
            There's a better way.
          </p>
        </div>
      </div>
    </section>
  )
}
