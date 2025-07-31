
// src/app/snowsports-video/page.tsx
import Gallery from '@/components/Gallery/Gallery'
import { getCategoryData } from '@/lib/images'
import { notFound } from 'next/navigation'

export default function SnowsportsVideoPage() {
  const categoryData = getCategoryData('snowsports-video')
  
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
