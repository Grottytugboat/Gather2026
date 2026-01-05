import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { href: '/lightspeed-klaviyo-integration', label: 'Lightspeed Klaviyo Integration' },
    { href: '/pos-to-klaviyo', label: 'POS to Klaviyo' },
    { href: '/zapier-alternative', label: 'Zapier Alternative' },
    { href: '/agency-tools', label: 'Agency Tools' },
  ]

  const resourceLinks = [
    { href: '/#pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-white dark:bg-slate-900 border-t-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Product Links */}
          <div>
            <h3 className="text-lg font-black text-black dark:text-white mb-4 uppercase">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black dark:text-white font-bold hover:text-gather-green dark:hover:text-gather-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-black text-black dark:text-white mb-4 uppercase">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black dark:text-white font-bold hover:text-gather-green dark:hover:text-gather-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-black text-black dark:text-white mb-4 uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-black dark:text-white font-bold hover:text-gather-green dark:hover:text-gather-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-black dark:text-white font-bold hover:text-gather-green dark:hover:text-gather-green transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-black dark:border-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black dark:text-white font-bold text-sm">
              © {currentYear} Gather. All rights reserved.
            </p>
            <p className="text-black dark:text-white font-bold text-sm">
              Built for ecommerce agencies tired of broken integrations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
