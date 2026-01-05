import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import FinalCTA from '@/components/FinalCTA'
import TheShift from '@/components/TheShift'
import WhoItsFor from '@/components/WhoItsFor'
import Founder from '@/components/Founder'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import { generateStructuredData } from './metadata'

const homeFAQs = [
  {
    question: 'Does Klaviyo integrate with Lightspeed X-Series?',
    answer: 'Klaviyo\'s native integration does not support Lightspeed Retail X. You need a third-party solution like Gather. Gather was built specifically for Lightspeed Retail X to Klaviyo integration, with real-time two-way sync and real human support.',
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
]

export default function Home() {
  const faqSchema = generateStructuredData('FAQPage', { faqs: homeFAQs })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        <Hero />
        <Problem />
        <Features />
        <TheShift />
        <WhoItsFor />
        <Pricing />
        <FAQ faqs={homeFAQs} title="Frequently Asked Questions" />
        <Founder />
        <FinalCTA />
      </main>
    </>
  )
}
