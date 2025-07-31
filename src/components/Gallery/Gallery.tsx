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
    <div className="pt-24 px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">{title}</h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>

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