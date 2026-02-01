import Link from 'next/link'

export default function PartnersPreview() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black dark:bg-white border-y-4 border-black dark:border-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gather-green border-4 border-white dark:border-black shadow-brutal-dark dark:shadow-brutal text-xs font-black text-black uppercase mb-6">
              Agency Partner Program
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white dark:text-black mb-6 uppercase leading-tight">
              Earn 30% Recurring<br />On Every Referral
            </h2>
            <p className="text-lg text-white dark:text-black font-bold mb-8">
              Stop leaving money on the table. When your clients need Lightspeed-Klaviyo integration, earn commission instead of sending them elsewhere.
            </p>
            <Link
              href="/partners"
              className="inline-block px-8 py-4 bg-gather-green border-4 border-white dark:border-black shadow-brutal-dark dark:shadow-brutal text-lg font-black text-black uppercase hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Become a Partner →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-slate-900 border-4 border-white dark:border-black text-center">
              <div className="text-4xl font-black text-gather-green mb-2">30%</div>
              <div className="text-sm font-bold text-black dark:text-white uppercase">Recurring Commission</div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 border-4 border-white dark:border-black text-center">
              <div className="text-4xl font-black text-gather-green mb-2">$60+</div>
              <div className="text-sm font-bold text-black dark:text-white uppercase">Per Client/Month</div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 border-4 border-white dark:border-black text-center">
              <div className="text-4xl font-black text-gather-green mb-2">Lifetime</div>
              <div className="text-sm font-bold text-black dark:text-white uppercase">Commission Duration</div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 border-4 border-white dark:border-black text-center">
              <div className="text-4xl font-black text-gather-green mb-2">Free</div>
              <div className="text-sm font-bold text-black dark:text-white uppercase">To Join</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
