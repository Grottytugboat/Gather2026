import type { Metadata } from 'next'
import { defaultMetadata } from '../metadata'
import Founder from '@/components/Founder'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - Get Started with Gather | Data Integration Platform',
  description: 'Ready to streamline your data integrations? Contact Gather to discuss how we can help sync your POS, ecommerce, and marketing platforms.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      <Founder />
    </main>
  )
}
