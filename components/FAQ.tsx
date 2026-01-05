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
      <section className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4 uppercase">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-black dark:text-white font-bold max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gather-green/10 dark:hover:bg-gather-green/10 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-xl font-black text-black dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 bg-gather-green dark:bg-gather-green border-2 border-black dark:border-white flex items-center justify-center font-black text-black dark:text-white">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
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
