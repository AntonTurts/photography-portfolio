// src/lib/images.ts
import { getImagesFromFolder, getVideosFromFolder, Image } from './autoImages'

export type { Image }

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
        images: getImagesFromFolder('images/snowsports-photo')
      },
      {
        slug: 'snowsports-video',
        title: 'Snowsports Videography',
        description: 'Dynamic video content showcasing the energy and excitement of mountain sports.',
        coverImage: '/images/snowsports-video/cover.jpg',
        images: getVideosFromFolder('images/snowsports-video', 'videos')
      },
      {
        slug: 'events',
        title: 'Events Photography',
        description: 'Documenting life\'s special moments with a keen eye for emotion and authentic storytelling.',
        coverImage: '/images/events/cover.jpg',
        images: getImagesFromFolder('images/events')
      },
      {
        slug: 'outdoors',
        title: 'Outdoors Photography',
        description: 'Exploring the natural world through landscape and adventure photography.',
        coverImage: '/images/outdoors/cover.jpg',
        images: getImagesFromFolder('images/outdoors')
      }
    ]
  }
}

export const getCategoryData = (slug: string): Category | undefined => {
  const portfolioData = getPortfolioData()
  return portfolioData.categories.find(category => category.slug === slug)
}