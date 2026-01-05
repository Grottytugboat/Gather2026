import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://usegather.com.au'
const siteName = 'Gather'
const defaultTitle = 'Gather - Lightspeed to Klaviyo Integration | Real-Time POS Data Sync'
const defaultDescription = 'Gather syncs Lightspeed POS data to Klaviyo in real-time. Built for ecommerce agencies tired of broken integrations. Connect offline sales to email marketing automatically.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'Lightspeed Klaviyo integration',
    'Lightspeed X Klaviyo',
    'Vend Klaviyo integration',
    'POS data to Klaviyo',
    'offline sales into Klaviyo',
    'Lightspeed to Klaviyo sync',
    'retail data integration',
    'ecommerce data sync',
    'Shopify agency tools',
    'omnichannel customer data',
  ],
  authors: [{ name: 'Gather' }],
  creator: 'Gather',
  publisher: 'Gather',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    // Add verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export function generateStructuredData(type: 'Organization' | 'SoftwareApplication' | 'FAQPage' | 'Article', data?: any) {
  const baseUrl = siteUrl

  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: defaultDescription,
        sameAs: [
          // Add social media links when available
        ],
      }

    case 'SoftwareApplication':
      return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: siteName,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: defaultDescription,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          ratingCount: '1',
        },
      }

    case 'FAQPage':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data?.faqs?.map((faq: { question: string; answer: string }) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })) || [],
      }

    case 'Article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data?.title || defaultTitle,
        description: data?.description || defaultDescription,
        author: {
          '@type': 'Organization',
          name: siteName,
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
        datePublished: data?.datePublished,
        dateModified: data?.dateModified || data?.datePublished,
      }

    default:
      return null
  }
}
