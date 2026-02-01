import type { Metadata } from 'next'
import { defaultMetadata } from '../metadata'
import Link from 'next/link'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Agency Partner Program - Earn 30% Recurring | Gather',
  description: 'Join Gather\'s agency partner program. Earn 30% recurring commission on every referral. White-label options available. Perfect for Klaviyo and ecommerce agencies.',
  keywords: ['agency partner program', 'klaviyo agency partner', 'referral program', 'white label integration', 'ecommerce agency partner'],
}

export default function PartnersPage() {
  const benefits = [
    {
      icon: '💰',
      title: '30% Recurring Commission',
      description: 'Earn 30% of every subscription, every month, for the lifetime of the customer. No caps, no limits.',
    },
    {
      icon: '🏷️',
      title: 'White-Label Options',
      description: 'Resell Gather as your own solution. Your branding, your pricing, your client relationships.',
    },
    {
      icon: '🎯',
      title: 'Dedicated Partner Support',
      description: 'Priority support queue, dedicated account manager, and direct Slack channel access.',
    },
    {
      icon: '📦',
      title: 'Sales & Marketing Assets',
      description: 'Case studies, pitch decks, demo accounts, and co-branded materials ready to use.',
    },
    {
      icon: '🔗',
      title: 'Custom Tracking Links',
      description: 'Unique referral links with real-time dashboard to track clicks, trials, and conversions.',
    },
    {
      icon: '🚀',
      title: 'Fast Payouts',
      description: 'Monthly payouts via bank transfer or PayPal. Clear reporting, no surprises.',
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Apply',
      description: 'Fill out the form below. We review applications within 48 hours.',
    },
    {
      step: '02',
      title: 'Get Approved',
      description: 'Receive your partner dashboard, tracking links, and sales materials.',
    },
    {
      step: '03',
      title: 'Refer Clients',
      description: 'Share your link with clients who need Lightspeed-Klaviyo integration.',
    },
    {
      step: '04',
      title: 'Earn Commission',
      description: 'Get 30% of their subscription, every month, automatically.',
    },
  ]

  const idealPartners = [
    'Klaviyo certified agencies',
    'Ecommerce marketing agencies',
    'Shopify & retail consultants',
    'Email marketing specialists',
    'POS implementation partners',
    'Digital transformation consultants',
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gather-green border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-sm font-black text-black uppercase mb-8">
            Agency Partner Program
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white mb-6 uppercase leading-tight">
            Earn 30% Recurring<br />On Every Referral
          </h1>
          
          <p className="text-xl sm:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto mb-10">
            Stop leaving money on the table. When your clients need Lightspeed-Klaviyo integration, earn commission instead of sending them elsewhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="px-8 py-4 bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark text-lg font-black text-black uppercase hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Become a Partner
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark text-lg font-black text-black dark:text-white uppercase hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 bg-black dark:bg-white border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-gather-green mb-1">30%</div>
              <div className="text-sm font-bold text-white dark:text-black uppercase">Recurring Commission</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-gather-green mb-1">$60+</div>
              <div className="text-sm font-bold text-white dark:text-black uppercase">Per Client/Month</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-gather-green mb-1">Lifetime</div>
              <div className="text-sm font-bold text-white dark:text-black uppercase">Commission Duration</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-gather-green mb-1">48hr</div>
              <div className="text-sm font-bold text-white dark:text-black uppercase">Application Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-b-4 border-black dark:border-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 uppercase">
              Partner Benefits
            </h2>
            <p className="text-lg sm:text-xl text-black dark:text-white font-bold">
              Everything you need to succeed as a Gather partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-black text-black dark:text-white mb-3 uppercase">
                  {benefit.title}
                </h3>
                <p className="text-black dark:text-white font-bold">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 uppercase">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-black dark:text-white font-bold">
              Four simple steps to start earning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gather-green border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-2xl font-black text-black mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-black dark:text-white font-bold">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Partners */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-6 uppercase">
                Who This Is For
              </h2>
              <p className="text-lg text-black dark:text-white font-bold mb-8">
                Our most successful partners are agencies already serving ecommerce and retail clients who need data integration solutions.
              </p>
              <ul className="space-y-4">
                {idealPartners.map((partner, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gather-green border-2 border-black dark:border-white flex items-center justify-center">
                      <span className="text-black font-black">✓</span>
                    </span>
                    <span className="text-black dark:text-white font-bold text-lg">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-black dark:bg-white border-4 border-black dark:border-white">
              <h3 className="text-2xl font-black text-white dark:text-black mb-6 uppercase">
                Example Earnings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b-2 border-white/20 dark:border-black/20 pb-4">
                  <span className="text-white dark:text-black font-bold">5 clients on Growth ($199)</span>
                  <span className="text-gather-green font-black text-xl">$299/mo</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-white/20 dark:border-black/20 pb-4">
                  <span className="text-white dark:text-black font-bold">10 clients on Starter ($99)</span>
                  <span className="text-gather-green font-black text-xl">$297/mo</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-white/20 dark:border-black/20 pb-4">
                  <span className="text-white dark:text-black font-bold">20 mixed clients</span>
                  <span className="text-gather-green font-black text-xl">$800+/mo</span>
                </div>
                <div className="pt-4">
                  <p className="text-white/80 dark:text-black/80 font-bold text-sm">
                    Commission compounds over time. Early partners are earning $1,000+/month with minimal ongoing effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 sm:py-24 px-4 sm:px-6 bg-gather-green border-b-4 border-black dark:border-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 uppercase">
              Apply Now
            </h2>
            <p className="text-lg sm:text-xl text-black font-bold">
              Applications reviewed within 48 hours
            </p>
          </div>

          <form 
            action="https://formspree.io/f/xpwzgvkd" 
            method="POST"
            className="bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark p-6 sm:p-8"
          >
            <input type="hidden" name="_subject" value="New Gather Partner Application" />
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green"
                  placeholder="john@agency.com"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  Agency / Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green"
                  placeholder="Awesome Agency"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green"
                  placeholder="https://agency.com"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  How many retail/ecommerce clients do you serve?
                </label>
                <select
                  name="client_count"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green"
                >
                  <option value="1-5">1-5 clients</option>
                  <option value="6-20">6-20 clients</option>
                  <option value="21-50">21-50 clients</option>
                  <option value="50+">50+ clients</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  Are you a Klaviyo Partner?
                </label>
                <select
                  name="klaviyo_partner"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green"
                >
                  <option value="yes">Yes - Certified Partner</option>
                  <option value="using">Using Klaviyo but not certified</option>
                  <option value="no">No - but interested</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-black dark:text-white uppercase mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-4 border-black dark:border-white text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-gather-green resize-none"
                  placeholder="Tell us about your agency and why you're interested..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-black dark:bg-white border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark text-lg font-black text-white dark:text-black uppercase hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>

          <p className="text-center text-black font-bold mt-6">
            Questions? Email <a href="mailto:tim@sondersites.com" className="underline">tim@sondersites.com</a>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-6 uppercase">
            Ready to Partner?
          </h2>
          <p className="text-xl text-black dark:text-white font-bold mb-8 max-w-2xl mx-auto">
            Join agencies earning recurring revenue by solving a real problem for their clients.
          </p>
          <a
            href="#apply"
            className="inline-block px-8 py-4 bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark text-lg font-black text-black uppercase hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Apply Now - It's Free
          </a>
        </div>
      </section>
    </main>
  )
}
