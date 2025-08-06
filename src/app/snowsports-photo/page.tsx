// src/app/snowsports-photo/page.tsx
'use client'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Define your images here
const images = [
  { id: 1, src: '/images/snowsports-photo/Air1.jpg', alt: 'Snowsports 1' },
  { id: 2, src: '/images/snowsports-photo/Air2.jpg', alt: 'Snowsports 2' },
  { id: 3, src: '/images/snowsports-photo/Air3.jpg', alt: 'Snowsports 3' },
  // Add more images here
]

export default function SnowsportsPhotoPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <style jsx>{`
        .gallery-container {
          margin: 0;
          padding: 80px 20px 40px;
          min-height: 100vh;
          background: #fafafa;
        }
        
        .gallery-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .gallery-title {
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-weight: 400;
        }
        
        .gallery-description {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          font-weight: 300;
        }
        
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
          }
        }
        
        @media (min-width: 1024px) {
          .image-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .grid-item {
          position: relative;
          background: #f5f5f5;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
        }
        
        @media (min-width: 768px) {
          .grid-item {
            min-height: 300px;
          }
        }
        
        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
          padding: 10px;
        }
        
        .grid-item:hover img {
          transform: scale(1.02);
        }
        
        /* Modal styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }
        
        .modal-image {
          max-width: 90%;
          max-height: 90vh;
          object-fit: contain;
        }
        
        .modal-close {
          position: absolute;
          top: 40px;
          right: 40px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          color: #333;
        }
        
        .modal-close:hover {
          color: #000;
        }
        
        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 20px;
          color: #333;
        }
        
        .modal-nav:hover {
          color: #000;
        }
        
        .modal-prev {
          left: 20px;
        }
        
        .modal-next {
          right: 20px;
        }
        
        button:focus {
          outline: none;
        }
      `}</style>

      <div className="gallery-container">
        <div className="gallery-header">
          <h1 className="gallery-title">Snowsports Photography</h1>
          <p className="gallery-description">
            Capturing the essence of winter sports through dynamic action shots and the serene beauty of alpine landscapes.
          </p>
        </div>

        <div className="image-grid">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="grid-item"
              onClick={() => setSelectedImage(image.id)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <button className="modal-close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          
          <button 
            className="modal-nav modal-prev"
            onClick={(e) => {
              e.stopPropagation()
              const currentIndex = images.findIndex(img => img.id === selectedImage)
              const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
              setSelectedImage(images[prevIndex].id)
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <img 
            className="modal-image"
            src={images.find(img => img.id === selectedImage)?.src}
            alt={images.find(img => img.id === selectedImage)?.alt}
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            className="modal-nav modal-next"
            onClick={(e) => {
              e.stopPropagation()
              const currentIndex = images.findIndex(img => img.id === selectedImage)
              const nextIndex = (currentIndex + 1) % images.length
              setSelectedImage(images[nextIndex].id)
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  )
}