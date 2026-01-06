'use client'

import Image from 'next/image'

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase px-4">
            Some features our clients love
          </h2>
        </div>
        
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Sync Pipelines Feature */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white mb-2 sm:mb-3 uppercase">
                Sync Pipelines
              </h3>
              <p className="text-base sm:text-lg text-black dark:text-white font-bold">
                Enable and configure data syncs across your stack
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark p-2 sm:p-3 md:p-4 lg:p-6">
              <div className="relative w-full bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white overflow-hidden">
                <Image
                  src="/sync-pipelines.png"
                  alt="Gather Sync Pipelines Dashboard - Enable and configure data syncs across your stack"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
          
          {/* Integrations Hub Feature */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white mb-2 sm:mb-3 uppercase">
                Integrations Hub
              </h3>
              <p className="text-base sm:text-lg text-black dark:text-white font-bold">
                Connect your sources, sync your data, and activate journeys in one place
              </p>
            </div>
              <div className="bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark p-2 sm:p-3 md:p-4 lg:p-6">
                <div className="relative w-full bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white overflow-hidden">
                  <Image
                    src="/Inmteejns.png"
                    alt="Gather Integrations Hub Dashboard - Control center for managing all integrations"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>
          </div>
          
          {/* Additional Features Note */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold">
              Plus 20+ more features we offer
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
