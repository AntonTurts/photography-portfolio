// src/lib/images.ts
import { snowsportsPhotoImages, snowsportsVideoImages, eventsImages, outdoorsImages } from './imagesConfig'

export interface Image {
  id: string
  src: string
  alt: string
  title?: string
  type?: 'image' | 'video'
  videoUrl?: string
}

export interface Category {
  slug: string
  title: string
  description: string
  coverImage: string
  images: Image[]
}

export interface PortfolioData {
  categories: Category[]
}

export const getPortfolioData = (): PortfolioData => {
  return {
    categories: [
      {
        slug: 'snowsports-photo',
        title: 'Snowsports Photography',
        description: 'Capturing the thrill and beauty of winter sports through dynamic action shots and stunning alpine landscapes.',
        coverImage: '/images/snowsports-photo/cover.jpg',
        images: snowsportsPhotoImages
      },
      {
        slug: 'snowsports-video',
        title: 'Snowsports Videography',
        description: 'Dynamic video content showcasing the energy and excitement of mountain sports.',
        coverImage: '/images/snowsports-video/cover.jpg',
        images: snowsportsVideoImages
      },
      {
        slug: 'events',
        title: 'Events Photography',
        description: 'Documenting life\'s special moments with a keen eye for emotion and authentic storytelling.',
        coverImage: '/images/events/cover.jpg',
        images: eventsImages
      },
      {
        slug: 'outdoors',
        title: 'Outdoors Photography',
        description: 'Exploring the natural world through landscape and adventure photography.',
        coverImage: '/images/outdoors/cover.jpg',
        images: outdoorsImages
      }
    ]
  }
}

export const getCategoryData = (slug: string): Category | undefined => {
  const portfolioData = getPortfolioData()
  return portfolioData.categories.find(category => category.slug === slug)
}