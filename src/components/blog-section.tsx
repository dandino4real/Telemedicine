import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    category: "AI",
    title: "AI Doctor's Diagnosis",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    category: "Offline",
    title: "Power Out? No Problem!",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    category: "Meds",
    title: "Fake Pills Beware",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    category: "News",
    title: "App Progress Report",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health Bytes & <span className="text-green-600">App Updates</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">{post.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h3>
                  <Button variant="outline" className="w-full rounded-full bg-transparent">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
