import { Button } from "@/components/ui/button"
import { Play, Shield, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/african-telemedicine-village.png"
          alt="Rural Healthcare Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-5 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 z-5">
        {/* Medical Cross */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-500/30 rounded-lg flex items-center justify-center animate-float">
          <div className="w-8 h-2 bg-emerald-400 rounded-full"></div>
          <div className="absolute w-2 h-8 bg-emerald-400 rounded-full"></div>
        </div>

        {/* Shield Icon */}
        <div className="absolute top-32 right-20 w-14 h-14 bg-cyan-500/30 rounded-full flex items-center justify-center animate-float-delayed">
          <Shield className="w-7 h-7 text-cyan-400" />
        </div>

        {/* Users Icon */}
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center animate-bounce">
          <Users className="w-6 h-6 text-blue-400" />
        </div>

        {/* Zap Icon */}
        <div className="absolute bottom-20 right-32 w-10 h-10 bg-emerald-500/30 rounded-full flex items-center justify-center animate-pulse">
          <Zap className="w-5 h-5 text-emerald-400" />
        </div>

        {/* Floating Pills */}
        <div className="absolute top-1/2 right-10 w-6 h-12 bg-gradient-to-b from-red-400 to-white rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionizing Rural Healthcare
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rural
            </span>{" "}
            <span className="text-white">Health</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Bridging the gap between Nigerian villages and quality healthcare through
            <span className="font-semibold text-emerald-400"> AI-powered telemedicine</span> solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>

            <Button
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-4 text-lg rounded-full transition-all duration-300 flex items-center gap-2 bg-transparent"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
