export function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/african-doctor-telemedicine.png"
              alt="Digital Doctor Solution"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your <span className="text-green-600">Digital Doctor</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Enter the Telemedicine Connector: your pocket-sized portal to medical expertise. We link you directly to
                doctors via crystal-clear video calls, no matter how remote your location.
              </p>
              <p>
                Got a weird rash? Use our AI symptom checker to get a preliminary idea. Worried about fake meds? Scan
                that barcode and we&apos;ll tell you if it&apos;s legit. Plus, booking appointments is a breeze.
              </p>
              <p>
                And for those moments when the power grid decides to take a nap? Our offline mode queues your
                consultation, so your health doesn&apos;t wait for the lights to come back on. It&apos;s like having a doctor on
                standby, even when the internet is playing hide-and-seek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
