'use client'

import FAQ, { FAQItem } from './FAQ'

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'For small - medium teams',
      price: '$99',
      period: '/mo',
      cta: 'Start 14-day free trial',
      ctaLink: 'https://buy.stripe.com/7sY4gB7fC4zrgtadbZe3e0b',
      popular: false,
      features: [
        'Access to core features',
        'Real-time data sync',
        'Up to 2 locations',
        'Basic performance reporting',
        'Email support',
        'Strategy onboarding guide',
        'Monthly check-in summary',
      ],
    },
    {
      name: 'Growth',
      description: 'For scaling businesses',
      price: '$199',
      period: '/mo',
      cta: 'Start 14-day free trial',
      ctaLink: 'https://buy.stripe.com/8x27sNgQc4zr1yg3Bpe3e0c',
      popular: true,
      features: [
        'Everything in Starter',
        'Unlimited locations',
        'Multiple Klaviyo accounts',
        'Advanced filtering & segmentation',
        'Historical data import',
        'Priority support',
        'Dedicated account manager',
        'Custom integrations',
        'Quarterly strategy reviews',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: '',
      cta: 'Contact Sales',
      ctaLink: '#contact',
      popular: false,
      features: [
        'Everything in Growth',
        'Custom contract terms',
        'SLA guarantees',
        'Advanced security features',
        'Dedicated infrastructure',
        '24/7 phone support',
        'Implementation support',
        'Training sessions',
        'Custom development',
      ],
    },
  ]

  const comparisonFeatures = [
    { feature: 'Real-time data sync to Klaviyo', gather: '✓', others: 'Delayed' },
    { feature: 'Free trial available', gather: '✓', others: '✗' },
    { feature: 'Multi-location support', gather: '✓', others: 'Limited' },
    { feature: 'Deep Klaviyo integration', gather: '✓', others: 'Basic' },
    { feature: 'Easy setup (no developer needed)', gather: '✓', others: '✗' },
    { feature: 'Designed for agencies', gather: '✓', others: '✗' },
    { feature: 'Dedicated support', gather: '✓', others: 'Enterprise only' },
  ]

  const pricingFAQs: FAQItem[] = [
    {
      question: 'What are the pricing plans for Gather?',
      answer: 'Gather offers three plans: Starter ($99/mo) for small-medium teams, Growth ($199/mo) for scaling businesses, and custom Enterprise pricing for large organizations. All plans include a 14-day free trial.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial on all plans. No credit card required to start your trial.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for Enterprise customers.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees. Ever. You only pay the monthly subscription cost for your chosen plan.',
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime. No long-term contracts or cancellation fees. Your service continues until the end of your billing period.',
    },
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white mb-4 sm:mb-6 uppercase">
            Flexible Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase px-4">
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white font-bold max-w-3xl mx-auto px-4">
            Start with a free 14-day trial. No credit card required. Scale as you grow.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16 lg:mb-24">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-5 md:p-6 lg:p-8 bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark ${
                tier.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark">
                  <span className="text-black dark:text-white font-black text-xs sm:text-sm uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`mb-4 sm:mb-6 ${tier.popular ? 'pt-3 sm:pt-4' : ''}`}>
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
                  {tier.name}
                </h3>
                <p className="text-base sm:text-lg text-black dark:text-white font-bold mb-3 sm:mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold">
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <a
                href={tier.ctaLink}
                target={tier.ctaLink.startsWith('http') ? '_blank' : undefined}
                rel={tier.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block w-full text-center px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 min-h-[44px] sm:min-h-0 ${
                  tier.popular
                    ? 'bg-gather-green dark:bg-gather-green text-black dark:text-white'
                    : 'bg-white dark:bg-slate-900 text-black dark:text-white'
                }`}
              >
                {tier.cta}
              </a>

              <div>
                <h4 className="text-base sm:text-lg font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                  What's included:
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gather-green dark:bg-gather-green border-2 border-black dark:border-white flex items-center justify-center mt-0.5">
                        <span className="text-black dark:text-white font-black text-xs sm:text-sm">✓</span>
                      </span>
                      <span className="text-black dark:text-white font-bold text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-12 sm:mb-16 md:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase px-4">
              How do we stack up?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold px-4">
              See why teams choose Gather over alternatives
            </p>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {comparisonFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-sm-dark p-4"
              >
                <h4 className="text-sm font-black text-black dark:text-white mb-3 uppercase">
                  {item.feature}
                </h4>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-black dark:text-white">Gather:</span>
                    {item.gather === '✓' ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gather-green dark:bg-gather-green border-2 border-black dark:border-white font-black text-black dark:text-white text-sm">
                        ✓
                      </span>
                    ) : (
                      <span className="text-black dark:text-white font-bold text-sm">{item.gather}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-black dark:text-white">Others:</span>
                    {item.others === '✗' ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 dark:bg-red-600 border-2 border-black dark:border-white font-black text-white text-sm">
                        ×
                      </span>
                    ) : (
                      <span className="text-black dark:text-white font-bold text-sm">{item.others}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark overflow-hidden">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 sm:border-b-4 border-black dark:border-white">
                    <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-left text-sm md:text-base lg:text-lg font-black text-black dark:text-white uppercase bg-gather-green dark:bg-gather-green">
                      Feature
                    </th>
                    <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center text-sm md:text-base lg:text-lg font-black text-black dark:text-white uppercase bg-gather-green dark:bg-gather-green">
                      Gather
                    </th>
                    <th className="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center text-sm md:text-base lg:text-lg font-black text-black dark:text-white uppercase bg-white dark:bg-slate-900">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b-2 border-black dark:border-white ${
                        index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'
                      }`}
                    >
                      <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-sm md:text-base text-black dark:text-white font-bold">
                        {item.feature}
                      </td>
                      <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center">
                        {item.gather === '✓' ? (
                          <span className="inline-flex items-center justify-center w-6 sm:w-7 md:h-7 lg:w-8 lg:h-8 bg-gather-green dark:bg-gather-green border-2 border-black dark:border-white font-black text-black dark:text-white text-sm md:text-base">
                            ✓
                          </span>
                        ) : (
                          <span className="text-black dark:text-white font-bold text-sm md:text-base">{item.gather}</span>
                        )}
                      </td>
                      <td className="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center">
                        {item.others === '✗' ? (
                          <span className="inline-flex items-center justify-center w-6 sm:w-7 md:h-7 lg:w-8 lg:h-8 bg-red-500 dark:bg-red-600 border-2 border-black dark:border-white font-black text-white text-sm md:text-base">
                            ×
                          </span>
                        ) : (
                          <span className="text-black dark:text-white font-bold text-sm md:text-base">{item.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
