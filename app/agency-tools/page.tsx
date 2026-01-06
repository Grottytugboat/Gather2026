import type { Metadata } from 'next'
import { defaultMetadata, generateStructuredData } from '../metadata'
import FAQ, { FAQItem } from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Ecommerce Agency Tools - Client Data Integration Platform | Gather',
  description: 'Gather helps ecommerce agencies manage client data integrations efficiently. Multi-client dashboard, flat pricing, real-time sync. Built for Shopify agencies and retail marketing teams.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Ecommerce Agency Tools - Client Data Integration Platform | Gather',
    description: 'Gather helps ecommerce agencies manage client data integrations efficiently. Multi-client dashboard, flat pricing.',
  },
}

const faqs: FAQItem[] = [
  {
    question: 'What tools do Shopify agencies use for client data integration?',
    answer: 'Many Shopify agencies use generic tools like Zapier or Alloy Automation, but these require manual setup per client and can become expensive. Gather is purpose-built for agencies, offering a single dashboard to manage all client integrations, flat pricing, and retail-specific features that make client onboarding faster.',
  },
  {
    question: 'How do agencies handle multiple client data integrations?',
    answer: 'Without a centralized platform, agencies often end up with separate Zapier accounts or custom integrations for each client. This is inefficient and hard to monitor. Gather provides a single dashboard where agencies can manage all client integrations, monitor sync health, and scale without proportional cost increases.',
  },
  {
    question: 'What are common ecommerce data integration challenges for agencies?',
    answer: 'Agencies face several challenges: unreliable syncs that require constant monitoring, duplicate data when syncing multiple sources, high costs that scale with usage (per-task pricing), lack of retail-specific features, and time spent on maintenance instead of growth. Gather addresses all of these.',
  },
  {
    question: 'Is Gather good for agencies managing multiple retail clients?',
    answer: 'Yes, Gather is specifically designed for agencies. It offers multi-client management, role-based access, priority support, and flat pricing that doesn\'t scale with transaction volume. This makes it cost-effective and efficient for agencies managing dozens of retail clients.',
  },
  {
    question: 'How does Gather help agencies scale their client base?',
    answer: 'Gather makes it easy to onboard new clients quickly with click-and-go setup. The single dashboard lets you monitor all client integrations at once, and flat pricing means adding clients doesn\'t exponentially increase costs. This allows agencies to scale without proportional overhead.',
  },
]

export default function AgencyToolsPage() {
  const articleSchema = generateStructuredData('Article', {
    title: 'Ecommerce Agency Tools - Client Data Integration Platform',
    description: 'How Gather helps ecommerce agencies manage client data integrations efficiently. Multi-client dashboard, flat pricing, and retail-specific features.',
    datePublished: '2024-01-01',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gather-green/10 dark:bg-gather-green/20 border border-gather-green/20 dark:border-gather-green/40 rounded-full text-sm font-medium text-gather-green-dark dark:text-gather-green">
              <span className="w-2 h-2 bg-gather-green rounded-full animate-pulse"></span>
              Built for Ecommerce Agencies
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight">
              Ecommerce Agency Tools
              <span className="block text-gather-green dark:text-gather-green mt-2">
                Client Data Integration Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto font-bold">
              Manage all your client data integrations from one dashboard. 
              Flat pricing, real-time sync, and retail-specific features built for agencies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-5 bg-gather-green text-white text-lg font-semibold rounded-lg hover:bg-gather-green-dark shadow-lg shadow-gather-green/25 hover:shadow-xl hover:shadow-gather-green/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-lg font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                See Features
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 text-center uppercase">
              The Agency Data Integration Challenge
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Managing Integrations Client-by-Client Is Inefficient
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Without a centralized platform, you end up with separate Zapier accounts, custom integrations, or manual processes for each client. Monitoring sync health across dozens of clients becomes a nightmare. There's no single pane of glass to see what's working and what's broken.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Costs Scale with Every Client
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Per-task pricing (like Zapier) means costs balloon as you add clients. A busy retail client can generate thousands of tasks per month. Multiply that across multiple clients, and integration costs eat into your margins. You need predictable, flat pricing that doesn't punish growth.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Time Spent on Maintenance, Not Growth
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Every hour spent troubleshooting broken syncs, debugging API errors, or manually fixing data issues is non-billable time. You want to focus on strategy and creative, not keeping the lights on. Agencies need "set-and-forget" integrations that just work.
                </p>
              </div>

              <div className="p-6 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-3 uppercase">
                  Gather: Built for Agencies, by Agency Founders
                </h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-black">
                  Gather was built by founders who ran a Shopify agency. We understand your pain points because we lived them. That's why Gather offers multi-client management, flat pricing, retail-specific features, and dedicated support-everything agencies need to scale efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              Agency-Focused Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Multi-Client Dashboard</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Manage all client integrations from one central dashboard. Monitor sync health, view logs, and troubleshoot issues without switching between accounts. See at a glance which clients need attention.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Flat Pricing</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  No per-task charges or surprise bills. Gather's flat pricing means you can budget accurately and scale your client base without proportional cost increases. Predictable costs make it easier to price your services.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Fast Client Onboarding</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Set up new client integrations in minutes, not hours. Smart default mappings handle most use cases out of the box. No custom API work or lengthy configuration-just connect and go.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Role-Based Access</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Control who has access to which client integrations. Perfect for agencies with multiple team members. Give clients read-only access to their own sync status, or keep everything internal.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Priority Support</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Agencies get priority support and direct access to the team. When something breaks (and it will), you need fast resolution. Gather's agency plan includes dedicated support channels.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Retail-Specific Features</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Gather understands retail use cases: multi-store sync, loyalty programs, SKU-level data, and customer segmentation. Features built specifically for retail marketing, not generic automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800 border-b-4 border-black dark:border-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-12 text-center uppercase">
              How Agencies Use Gather
            </h2>
            
            <div className="space-y-6">
              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Shopify Agencies</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Shopify agencies use Gather to connect client POS systems (Lightspeed, Retail Express) to Klaviyo. This unifies online and offline customer data, enabling better email marketing and higher client retention rates. Fast onboarding means you can add new clients quickly.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Retail Marketing Agencies</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  Agencies specializing in retail marketing use Gather to ensure client data flows reliably between systems. No more 2am emails about broken syncs. Gather's reliability means you can focus on strategy and creative, not maintenance.
                </p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900 border-4 border-black dark:border-white shadow-brutal-lg dark:shadow-brutal-lg-dark">
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase">Multi-Location Retailers</h3>
                <p className="text-lg text-black dark:text-white leading-relaxed font-bold">
                  For agencies managing multi-location retail clients, Gather syncs data from all locations to a central Klaviyo account. This creates a unified customer view across all stores, enabling location-aware campaigns and better segmentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={faqs}
          title="Agency Tools FAQs"
          description="Common questions about using Gather for agency client data integration"
        />

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
