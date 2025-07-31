// src/components/ImageModal/ImageModal.tsx
'use client'
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Image } from '@/lib/images'

interface ImageModalProps {
  image: Image
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const ImageModal = ({ image, onClose, onNext, onPrev }: ImageModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === ' ') {
        e.preventDefault()
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play()
          } else {
            videoRef.current.pause()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white z-50 flex items-center justify-center p-8"
        onClick={onClose}
      >
        {/* Media with white border frame */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl max-h-full bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {image.type === 'video' && image.videoUrl ? (
            <video
              ref={videoRef}
              src={image.videoUrl}
              controls
              autoPlay
              className="max-w-full max-h-[75vh] object-contain"
              poster={image.src}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[75vh] object-contain"
            />
          )}
          
          {image.title && (
            <div className="text-center mt-6">
              <h3 className="text-lg font-light text-gray-700 tracking-wide">{image.title}</h3>
              {image.type === 'video' && (
                <p className="text-sm text-gray-500 mt-2">Press spacebar to play/pause</p>
              )}
            </div>
          )}
        </motion.div>

        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <X size={28} />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={onNext}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronRight size={40} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageModal