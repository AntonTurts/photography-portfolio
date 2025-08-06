// src/lib/imagesConfig.ts
import { Image } from './images'

// Add your actual image filenames here
// The names can be anything - DSC_0001.jpg, IMG_1234.jpg, my-photo.jpg, etc.
export const snowsportsPhotoImages: Image[] = [
  { id: 'sp-1', src: '/images/snowsports-photo/Air1.jpg', alt: 'Snowsports Photo 1' },
  { id: 'sp-2', src: '/images/snowsports-photo/Air2.jpg', alt: 'Snowsports Photo 2' },
  { id: 'sp-3', src: '/images/snowsports-photo/Air3.jpg', alt: 'Snowsports Photo 3' },
  // Add more images here with their actual filenames
]

export const snowsportsVideoImages: Image[] = [
  { id: 'sv-1', src: '/images/snowsports-video/video1-thumb.jpg', alt: 'Video 1', type: 'video', videoUrl: '/videos/video1.mp4' },
  { id: 'sv-2', src: '/images/snowsports-video/video2-thumb.jpg', alt: 'Video 2', type: 'video', videoUrl: '/videos/video2.mp4' },
  // Add more video thumbnails here
]

export const eventsImages: Image[] = [
  { id: 'e-1', src: '/images/events/event1.jpg', alt: 'Event Photo 1' },
  { id: 'e-2', src: '/images/events/event2.jpg', alt: 'Event Photo 2' },
  // Add more event images here
]

export const outdoorsImages: Image[] = [
  { id: 'o-1', src: '/images/outdoors/outdoor1.jpg', alt: 'Outdoor Photo 1' },
  { id: 'o-2', src: '/images/outdoors/outdoor2.jpg', alt: 'Outdoor Photo 2' },
  // Add more outdoor images here
]