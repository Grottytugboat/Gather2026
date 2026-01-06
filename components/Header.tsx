'use client'

import Link from 'next/link'
import Logo from './Logo'
import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  const navLinks = [
    { name: 'Product', href: '/lightspeed-klaviyo-integration' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Resources', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-white dark:bg-slate-900 border-b-2 sm:border-b-4 border-black dark:border-white">
      <div className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity min-h-[44px] sm:min-h-0">
            <Logo size="lg" showText={true} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black dark:text-white font-bold hover:text-gather-green dark:hover:text-gather-green transition-colors uppercase text-xs lg:text-sm"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://buy.stripe.com/7sY4gB7fC4zrgtadbZe3e0b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-6 py-2 lg:py-3 bg-gather-green dark:bg-gather-green text-black dark:text-white text-xs lg:text-sm font-black uppercase border-2 lg:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              Get Started
            </a>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
