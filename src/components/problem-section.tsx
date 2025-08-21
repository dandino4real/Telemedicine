export function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/african-rural-clinic-empty-waiting-room.png"
              alt="Healthcare Challenges in Rural Nigeria"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nigeria&apos;s <span className="text-red-500">Health Hurdles</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Imagine trekking for hours, only to find the clinic empty. That&apos;s the reality for many in rural Nigeria,
                where doctors are scarcer than a working generator during a heatwave.
              </p>
              <p>
                Long distances, limited specialists, and the sheer lack of medical professionals create a healthcare
                desert. It&apos;s a tough pill to swallow when your health is on the line.
              </p>
              <p>
                We&apos;re talking about a nation where the doctor-to-patient ratio in some areas is frankly embarrassing.
                Access to basic medical advice shouldn&apos;t feel like winning the lottery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
