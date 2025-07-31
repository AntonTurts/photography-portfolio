// src/app/snowsports-photo/page.tsx
import Gallery from '@/components/Gallery/Gallery'
import { getCategoryData } from '@/lib/images'
import { notFound } from 'next/navigation'

export default function SnowsportsPhotoPage() {
  const categoryData = getCategoryData('snowsports-photo')
  
  if (!categoryData) {
    notFound()
  }

  return (
    <Gallery
      images={categoryData.images}
      title={categoryData.title}
      description={categoryData.description}
    />
  )
}