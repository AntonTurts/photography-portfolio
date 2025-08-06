import Gallery from '@/components/Gallery/Gallery'
import { getCategoryData } from '@/lib/images'
import { notFound } from 'next/navigation'

export default function EventsPage() {
  const categoryData = getCategoryData('events')
  
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