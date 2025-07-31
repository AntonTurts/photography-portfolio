// src/lib/autoImages.ts
import fs from 'fs'
import path from 'path'

export interface Image {
  id: string
  src: string
  alt: string
  title?: string
  type?: 'image' | 'video'
  videoUrl?: string
}

export function getImagesFromFolder(folderPath: string): Image[] {
  try {
    const publicPath = path.join(process.cwd(), 'public', folderPath)
    const files = fs.readdirSync(publicPath)
    
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .filter(file => !file.toLowerCase().includes('cover')) // Exclude cover images
      .map((file, index) => ({
        id: `${folderPath.replace(/[\/\\]/g, '-')}-${index + 1}`,
        src: `/${folderPath}/${file}`,
        alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' '),
        title: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }))
      .sort((a, b) => a.src.localeCompare(b.src)) // Sort alphabetically
  } catch (error) {
    console.log(`Folder ${folderPath} not found, returning empty array`)
    return []
  }
}

export function getVideosFromFolder(folderPath: string, videoFolderPath: string): Image[] {
  try {
    const publicPath = path.join(process.cwd(), 'public', folderPath)
    const files = fs.readdirSync(publicPath)
    
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .filter(file => !file.toLowerCase().includes('cover'))
      .map((file, index) => {
        const baseName = file.replace(/\.[^/.]+$/, "")
        const videoExtensions = ['.mp4', '.webm', '.mov']
        
        // Look for matching video file
        let videoUrl = ''
        for (const ext of videoExtensions) {
          const videoPath = path.join(process.cwd(), 'public', videoFolderPath, baseName + ext)
          if (fs.existsSync(videoPath)) {
            videoUrl = `/${videoFolderPath}/${baseName}${ext}`
            break
          }
        }
        
        return {
          id: `video-${index + 1}`,
          src: `/${folderPath}/${file}`,
          alt: baseName.replace(/[-_]/g, ' '),
          title: baseName.replace(/[-_]/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          type: 'video' as const,
          videoUrl: videoUrl || undefined
        }
      })
      .sort((a, b) => a.src.localeCompare(b.src))
  } catch (error) {
    console.log(`Folder ${folderPath} not found, returning empty array`)
    return []
  }
}