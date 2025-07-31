// src/components/Gallery/ImageGrid.tsx
'use client'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Image } from '@/lib/images'

interface ImageGridProps {
  images: Image[]
  onImageClick: (image: Image) => void
}

const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onImageClick(image)}
        >
          {/* White border frame effect */}
          <div className="bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Video Play Button Overlay */}
              {image.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 rounded-full p-4 group-hover:bg-opacity-80 transition-all duration-300">
                    <Play size={32} className="text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Optional title below image */}
          {image.title && (
            <p className="text-center text-sm text-gray-600 mt-4 font-light tracking-wide">
              {image.title}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid