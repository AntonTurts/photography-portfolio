// src/components/Navigation/Navigation.tsx
'use client'
import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          
          {/* Left Side - Work & Contact */}
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-sm uppercase tracking-wide text-gray-900 hover:text-gray-600 transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className="text-sm uppercase tracking-wide text-gray-900 hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Center - Name */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl font-light tracking-wide">Your Name</h1>
          </Link>

          {/* Right Side - Instagram & Mail */}
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:your@email.com"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
