import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import FinalCTA from '@/components/FinalCTA'
import WhoItsFor from '@/components/WhoItsFor'
import Founder from '@/components/Founder'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import LocationsPreview from '@/components/LocationsPreview'
import PartnersPreview from '@/components/PartnersPreview'
import { generateStructuredData } from './metadata'

const allFAQs = [
  {
    question: 'Does Klaviyo integrate with Lightspeed X-Series?',
    answer: 'Yes, Lightspeed and Klaviyo now have a native integration, but Gather offers a much better solution. Gather provides real-time two-way sync, more data points, better filtering options, and real human support. We built Gather specifically for Lightspeed Retail X to Klaviyo integration and it\'s way more powerful than the native option.',
  },
  {
    question: 'How does Gather compare to Zapier for Lightspeed Klaviyo integration?',
    answer: 'Gather is purpose-built for retail data sync, offering real-time event-driven updates (vs Zapier\'s polling intervals), automatic duplicate prevention, retail-specific data mapping, and flat pricing. Zapier requires manual workflow setup and charges per task, which gets expensive as you scale.',
  },
  {
    question: 'How long does it take to set up Lightspeed to Klaviyo sync?',
    answer: 'Gather can be set up in minutes. Simply connect your Lightspeed account via OAuth, connect your Klaviyo account, and configure your sync preferences. No developers or code required. Smart default mappings handle most use cases out of the box.',
  },
  {
    question: 'What data gets synced from Lightspeed to Klaviyo?',
    answer: 'Gather syncs customer profiles, order history, product data, and purchase behavior from Lightspeed to Klaviyo. You can customize which data points to sync and filter out specific sales (like wholesale or staff purchases) to keep your Klaviyo data clean.',
  },
  {
    question: 'Is Gather good for agencies managing multiple retail clients?',
    answer: 'Yes, Gather is specifically designed for agencies. It offers multi-client management from one dashboard, role-based access, priority support, and flat pricing that doesn\'t scale with transaction volume. This makes it cost-effective and efficient for agencies managing dozens of retail clients.',
  },
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

export default function Home() {
  const faqSchema = generateStructuredData('FAQPage', { faqs: allFAQs })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        <Hero />
        <Testimonials />
        <Problem />
        <Features />
        <WhoItsFor />
        <PartnersPreview />
        <LocationsPreview />
        <Pricing />
        <FAQ faqs={allFAQs} title="Frequently Asked Questions" />
        <Founder />
        <FinalCTA />
      </main>
    </>
  )
}
