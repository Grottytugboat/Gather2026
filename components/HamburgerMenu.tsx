'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: 'Product', links: [
      { name: 'Lightspeed Klaviyo Integration', href: '/lightspeed-klaviyo-integration' },
      { name: 'POS to Klaviyo', href: '/pos-to-klaviyo' },
      { name: 'Zapier Alternative', href: '/zapier-alternative' },
      { name: 'Agency Tool', href: '/agency-tools' },
    ]},
    { title: 'Resources', links: [
      { name: 'Pricing', href: '#pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '#contact' },
    ]},
    { title: 'Company', links: [
      { name: 'Home', href: '/' },
      { name: 'Get Started', href: '#contact' },
    ]},
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 flex flex-col items-center justify-center gap-1.5 min-h-[44px] sm:min-h-0"
        aria-label="Toggle menu"
      >
        <span className={`w-5 sm:w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-5 sm:w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 sm:w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <nav className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white dark:bg-slate-900 border-l-2 sm:border-l-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark z-50 overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white flex items-center justify-center min-h-[44px] sm:min-h-0"
                  aria-label="Close menu"
                >
                  <span className="text-xl sm:text-2xl font-black text-black dark:text-white">×</span>
                </button>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                {menuItems.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-base sm:text-lg font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                      {section.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-black dark:text-white font-bold text-sm sm:text-base uppercase min-h-[44px] sm:min-h-0 flex items-center"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
