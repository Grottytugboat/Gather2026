'use client'

import Image from 'next/image'
import ContactForm from './ContactForm'
import Signature from './Signature'

export default function Founder() {
  return (
    <section id="contact" className="relative pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white mb-4 sm:mb-6 uppercase">
            From the Founder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
            Let's Talk
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-4 sm:mb-6 md:mb-8">
          {/* Combined Founder Block */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark relative">
            {/* Profile Section with Signature */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b-2 sm:border-b-4 border-black dark:border-white">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex-shrink-0 rounded-none border-3 sm:border-4 md:border-[6px] border-black dark:border-white shadow-brutal sm:shadow-brutal-lg dark:shadow-brutal-dark sm:dark:shadow-brutal-lg-dark overflow-visible bg-white dark:bg-slate-900">
                <Image
                  src="/profile.png"
                  alt="Tim Sullivan - Founder of Gather"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gather-green"><span class="text-white dark:text-black font-black text-5xl">T</span></div>'
                    }
                  }}
                />
                <a
                  href="https://x.com/Timishuge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 translate-x-1 translate-y-1 inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black dark:bg-white text-white dark:text-black hover:bg-gather-green dark:hover:bg-gather-green hover:text-black dark:hover:text-white transition-all duration-150 border-2 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-sm-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-0 hover:translate-y-0 z-10"
                  aria-label="Follow me on X"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <div className="flex-1 flex flex-col items-center sm:items-start w-full sm:w-auto text-center sm:text-left">
                <div className="mb-4 sm:mb-5">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-black dark:text-white mb-2 uppercase tracking-tight">Tim Sullivan</p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-black dark:text-white uppercase tracking-wider">Founder, Gather</p>
                </div>
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-5">
                  <Signature />
                </div>
              </div>
            </div>
            
            {/* Personal Message */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed font-medium">
                  I built Gather because I was tired of the same problem: every client integration breaks, and I'm the one fixing it at midnight.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed font-medium">
                  This isn't a side project or a "maybe it'll work" solution. It's the tool I wish existed when I was managing client integrations.
                </p>
              </div>
              
              <div className="p-4 sm:p-6 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark mt-4 sm:mt-8">
                <p className="text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed font-bold">
                  If you're dealing with the same frustration, let's talk. No sales pitch, no pressure - just a real conversation about whether Gather can solve your problem.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <a
              href="https://cal.com/usegather/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-black dark:bg-white text-white dark:text-black text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-gather-green dark:border-gather-green shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px] sm:min-h-0"
            >
              <svg className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="whitespace-nowrap">Find a Time to Chat</span>
            </a>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
