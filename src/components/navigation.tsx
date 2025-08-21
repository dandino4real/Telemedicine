"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/medical-cross-logo-green.png" alt="Rural Health Logo" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">Rural Health</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </a>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors px-4">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors px-4">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors px-4">
                Contact
              </a>
              <div className="px-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
