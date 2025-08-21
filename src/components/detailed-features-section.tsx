import { Button } from "@/components/ui/button"

const detailedFeatures = [
  {
    title: "Smart Symptom Analysis",
    description:
      "Our AI acts as your first point of contact, offering initial insights and guiding you on next steps for better health outcomes.",
    image: "/placeholder.svg?height=500&width=600",
    buttonText: "Try the AI Checker",
    reverse: false,
  },
  {
    title: "Instant Drug Verification",
    description: "Avoid counterfeit medications. Scan any drug's barcode or QR code to confirm it's the real deal.",
    image: "/placeholder.svg?height=500&width=600",
    buttonText: "Scan Medicine Now",
    reverse: true,
  },
  {
    title: "Seamless Scheduling",
    description: "Book appointments with qualified doctors effortlessly, fitting healthcare into your busy life.",
    image: "/placeholder.svg?height=500&width=600",
    buttonText: "Book Appointment",
    reverse: false,
  },
]

export function DetailedFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {detailedFeatures.map((feature, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${feature.reverse ? "lg:grid-flow-col-dense" : ""}`}
          >
            {/* Content */}
            <div className={feature.reverse ? "lg:col-start-2" : ""}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {feature.title.split(" ").map((word, i) =>
                  i === feature.title.split(" ").length - 1 ? (
                    <span key={i} className="text-green-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{feature.description}</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                {feature.buttonText}
              </Button>
            </div>

            {/* Image */}
            <div className={feature.reverse ? "lg:col-start-1" : ""}>
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
