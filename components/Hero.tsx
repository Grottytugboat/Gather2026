'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
          Stop Babysitting Systems That Quietly Kill Sales
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Gather stores customer data once, then pushes it wherever it needs to go — so agencies don't have to keep fixing broken connections.
        </p>
        <div className="pt-8">
          <a
            href="#contact"
            className="inline-block bg-gather-green text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-green-600"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  )
}
