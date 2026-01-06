export default function Problem() {
  const painPoints = [
    "Every Lightspeed to Klaviyo sync breaks. Every week.",
    "You're the one fixing broken integrations at 2am instead of growing revenue.",
    "Your clients' in-store sales never make it to their email campaigns.",
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
        
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 lg:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-red-500 dark:bg-red-600 border-2 sm:border-3 md:border-4 border-black dark:border-white flex items-center justify-center mt-0.5 sm:mt-0.5 md:mt-1">
                <span className="text-white font-black text-sm sm:text-base md:text-xl">×</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black dark:text-white leading-relaxed flex-1 font-bold">
                {point}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center px-2 sm:px-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-black dark:text-white uppercase bg-gather-green dark:bg-gather-green px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 inline-block border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark">
            There's a better way.
          </p>
        </div>
      </div>
    </section>
  )
}
