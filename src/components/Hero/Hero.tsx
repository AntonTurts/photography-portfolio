// src/components/Hero/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-8">
          Photographer, Videographer and Drone Pilot
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-gray-600 mb-16">
          specialising in Snowsports and Events
        </h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm text-gray-500 font-light tracking-wider"
        >
          Scroll down to see some recent work
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-gray-400" size={24} />
      </motion.div>
    </div>
  )
}

export default Hero