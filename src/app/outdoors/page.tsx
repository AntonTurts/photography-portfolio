// src/app/outdoors/page.tsx
import Gallery from '@/components/Gallery/Gallery'
import { getCategoryData } from '@/lib/images'
import { notFound } from 'next/navigation'

export default function OutdoorsPage() {
  const categoryData = getCategoryData('outdoors')
  
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