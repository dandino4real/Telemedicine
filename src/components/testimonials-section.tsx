import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    text: "This app is a lifesaver! I finally got to see a doctor without traveling for hours. The AI helped me understand my symptoms quickly.",
    name: "Amina Bello",
    role: "Farmer",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    text: "The drug scanner gave me peace of mind. Knowing I'm taking genuine medicine is priceless, especially in my village.",
    name: "Chinedu Okafor",
    role: "Teacher",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    text: "Even with power cuts, I could queue my consultation. This app truly understands our challenges. Brilliant!",
    name: "Fatima Ibrahim",
    role: "Community Health Worker",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users <span className="text-green-600">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
