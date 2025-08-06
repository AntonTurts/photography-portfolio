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
    <div 
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1"
      style={{ maxWidth: '100%' }}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
          className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          
          {/* Video Play Button */}
          {image.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/40 backdrop-blur-sm rounded-full p-2">
                <Play size={14} className="text-white fill-white" strokeWidth={2} />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid