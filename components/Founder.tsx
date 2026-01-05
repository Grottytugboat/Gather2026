'use client'

import ContactForm from './ContactForm'

export default function Founder() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            I built Gather because I was tired of the same problem: every client integration breaks, and I'm the one fixing it at midnight. This isn't a side project or a "maybe it'll work" solution. It's the tool I wish existed when I was managing client integrations.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            If you're dealing with the same frustration, let's talk. No sales pitch, no pressure — just a real conversation about whether Gather can solve your problem.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
