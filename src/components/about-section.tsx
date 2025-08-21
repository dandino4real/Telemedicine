export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Health for All"
              className="w-64 h-40 object-cover rounded-2xl mx-auto mb-8 shadow-2xl"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Health for <span className="text-green-400">All</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Imagine a world where a doctor is always within reach, even in the most remote corners of Nigeria. Our app
              is that world, connecting you to medical professionals through crystal-clear video calls. We&apos;re bridging
              the healthcare divide, one consultation at a time.
            </p>
            <p>
              Feeling under the weather? Our AI-powered symptom checker is your first line of defense, offering insights
              before you even speak to a doctor. Plus, we&apos;re fighting fake drugs with a simple scan – just point your
              phone at the barcode or QR code to verify authenticity. Your health, secured.
            </p>
            <p>
              Power outages? No problem! Our offline mode queues your consultations, so you&apos;re always connected, even
              when the lights go out. It&apos;s smart tech for a challenging environment, built with robust Service Workers
              for seamless performance. We&apos;re not just an app; we&apos;re a lifeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
