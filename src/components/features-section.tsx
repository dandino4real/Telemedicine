import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "AI Diagnosis",
    description: "Get a preliminary health assessment with our smart AI symptom checker.",
    image: "/placeholder-d2w9p.png",
  },
  {
    title: "Fake Pill Buster",
    description: "Scan drug barcodes or QR codes to verify authenticity instantly.",
    image: "/medicine-barcode-scan.png",
  },
  {
    title: "Book Ahead",
    description: "Schedule video consultations with doctors at your convenience.",
    image: "/calendar-booking-app.png",
  },
  {
    title: "Power Out? No Problem!",
    description: "Queue consultations even when the lights go out with our offline mode.",
    image: "/offline-healthcare.png",
  },
  {
    title: "Rural Reach",
    description: "Connecting underserved Nigerian communities to medical expertise.",
    image: "/african-village-mobile-health.png",
  },
  {
    title: "HealthTracka Plus",
    description: "AI twists and offline capabilities for a superior health experience.",
    image: "/placeholder-zzm5n.png",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-green-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for comprehensive healthcare access, right in your pocket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
