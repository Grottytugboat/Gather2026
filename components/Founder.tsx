'use client'

import Image from 'next/image'
import ContactForm from './ContactForm'
import Signature from './Signature'

export default function Founder() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white mb-4 sm:mb-6 uppercase">
            From the Founder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
            Let's Talk
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Combined Founder Block */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark relative">
            {/* Profile Section with Signature */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 sm:border-b-4 border-black dark:border-white">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex-shrink-0 rounded-none border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark overflow-hidden bg-white dark:bg-slate-900">
                <Image
                  src="/profile.png"
                  alt="Tim - Founder of Gather"
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
              </div>
              <div className="flex-1 flex flex-col w-full sm:w-auto">
                <div className="mb-3 sm:mb-4">
                  <p className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1 uppercase tracking-tight">Tim</p>
                  <p className="text-xs sm:text-sm font-bold text-black dark:text-white uppercase tracking-wider">Founder, Gather</p>
                </div>
                <div className="flex justify-start mb-3 sm:mb-4">
                  <Signature />
                </div>
                <a
                  href="https://x.com/Timishuge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black dark:text-white font-bold hover:text-gather-green dark:hover:text-gather-green transition-colors text-xs sm:text-sm uppercase min-h-[44px] sm:min-h-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Follow me on X
                </a>
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
              
              <div className="p-4 sm:p-6 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark mt-4 sm:mt-8">
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
              className="group inline-flex items-center justify-center w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-black dark:bg-white text-white dark:text-black text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-gather-green dark:border-gather-green shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px] sm:min-h-0"
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
