export default function Testimonials() {
  const testimonials = [
    {
      quote: "I've been with Klaviyo for 3 years - and this is the first Lightspeed integration I've been impressed by.",
      author: "Marketing Specialist",
      company: "Klaviyo",
      highlight: true,
    },
    {
      quote: "We run 4 retail locations across Asia Pacific. Before Gather, our Klaviyo data was a mess - missing consent flags, duplicate profiles, no way to track true retention. Now it just works.",
      author: "Chief Digital Officer",
      company: "Global Luggage Brand",
      highlight: false,
    },
    {
      quote: "Finally a sync that handles multi-location properly. Geo-targeting our email campaigns by store location used to be manual - now it's automatic.",
      author: "Founder",
      company: "Sports Nutrition Retailer (Canada)",
      highlight: false,
    },
    {
      quote: "Our agency was duct-taping Lightspeed to Klaviyo with Zapier. Gather replaced 6 zaps and actually syncs product data correctly.",
      author: "Email Automation Specialist",
      company: "Ecommerce Agency",
      highlight: false,
    },
    {
      quote: "Set it up in 20 minutes. Haven't touched it since. That's exactly what I needed.",
      author: "Marketing Manager",
      company: "Multi-location Footwear Retailer",
      highlight: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white mb-6 uppercase">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase leading-tight px-4">
            Agencies & Retailers
            <span className="block mt-2 text-gather-green dark:text-gather-green">
              Who Get It
            </span>
          </h2>
        </div>

        {/* Klaviyo Featured Testimonial */}
        <div className="mb-8 sm:mb-12">
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 bg-gather-green dark:bg-gather-green border-4 sm:border-6 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
            <div className="absolute -top-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-black dark:bg-white border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-sm-dark flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gather-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black dark:text-white leading-tight mb-6 sm:mb-8">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black dark:bg-white border-3 sm:border-4 border-black dark:border-white flex items-center justify-center">
                <span className="text-white dark:text-black font-black text-lg sm:text-xl">K</span>
              </div>
              <div>
                <div className="font-black text-black dark:text-white text-sm sm:text-base uppercase">
                  {testimonials[0].author}
                </div>
                <div className="font-bold text-black dark:text-white text-xs sm:text-sm">
                  {testimonials[0].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Other Testimonials */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark hover:shadow-brutal-xl dark:hover:shadow-brutal-xl-dark transition-all duration-150 hover:-translate-y-1"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gather-green dark:bg-gather-green border-3 sm:border-4 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-sm-dark flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-base sm:text-lg font-bold text-black dark:text-white leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t-2 sm:border-t-4 border-black dark:border-white pt-4">
                <div className="font-black text-black dark:text-white text-sm sm:text-base uppercase">
                  {testimonial.author}
                </div>
                <div className="font-bold text-black dark:text-white text-xs sm:text-sm mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 bg-black dark:bg-white border-4 border-black dark:border-white shadow-brutal-xl dark:shadow-brutal-xl-dark">
            <p className="text-lg sm:text-xl font-black text-white dark:text-black uppercase mb-4">
              Join 100+ agencies & retailers
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 bg-gather-green dark:bg-gather-green text-black dark:text-white text-base sm:text-lg font-black uppercase border-4 border-black dark:border-white shadow-brutal dark:shadow-brutal-dark hover:shadow-brutal-lg dark:hover:shadow-brutal-lg-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              Get Started Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
