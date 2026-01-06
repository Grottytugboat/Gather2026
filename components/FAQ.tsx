'use client'

import { useState } from 'react'

export type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  faqs: FAQItem[]
  title?: string
  description?: string
}

export default function FAQ({ faqs, title = 'Frequently Asked Questions', description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase px-2">
              {title}
            </h2>
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold max-w-2xl mx-auto px-2">
                {description}
              </p>
            )}
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border-2 sm:border-3 md:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-4.5 md:py-5 text-left flex items-center justify-between hover:bg-gather-green/10 dark:hover:bg-gather-green/10 transition-colors min-h-[44px]"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-black dark:text-white pr-3 sm:pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gather-green dark:bg-gather-green border-2 border-black dark:border-white flex items-center justify-center font-black text-black dark:text-white text-sm sm:text-base">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-4.5 md:pb-5">
                    <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed font-bold">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
