// src/components/Gallery/Gallery.tsx
'use client'
import { useState } from 'react'
import ImageGrid from './ImageGrid'
import ImageModal from '@/components/ImageModal/ImageModal'
import { Image } from '@/lib/images'

interface GalleryProps {
  images: Image[]
  title: string
  description?: string
}

const Gallery = ({ images, title, description }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed header space */}
      <div className="h-16 md:h-20" />
      
      {/* Page Header */}
      <div className="text-center py-6 md:py-8 px-4">
        <h1 className="text-xl md:text-2xl font-normal mb-2 tracking-[0.2em] uppercase">{title}</h1>
        {description && (
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Image Grid Container - This is the key part */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 pb-12">
        <div className="max-w-[1400px] mx-auto">
          {images.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No images found. Add images to the folder to see them here.
              </p>
            </div>
          ) : (
            <ImageGrid 
              images={images} 
              onImageClick={setSelectedImage}
            />
          )}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => {
            const currentIndex = images.findIndex(img => img.id === selectedImage.id)
            const nextIndex = (currentIndex + 1) % images.length
            setSelectedImage(images[nextIndex])
          }}
          onPrev={() => {
            const currentIndex = images.findIndex(img => img.id === selectedImage.id)
            const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
            setSelectedImage(images[prevIndex])
          }}
        />
      )}
    </div>
  )
}

export default Gallery