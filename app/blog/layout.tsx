import type { Metadata } from 'next'
import { defaultMetadata } from '../metadata'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Ecommerce Data Integration Insights | Gather',
  description: 'Expert insights on Lightspeed Klaviyo integration, POS data sync, omnichannel marketing, and ecommerce data integration best practices.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Blog - Ecommerce Data Integration Insights | Gather',
    description: 'Expert insights on Lightspeed Klaviyo integration, POS data sync, and omnichannel marketing.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
