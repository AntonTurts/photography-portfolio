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

// This function will be called at build time
export function getImagesFromFolder(folderPath: string): Image[] {
  try {
    const publicPath = path.join(process.cwd(), 'public', folderPath)
    
    // Check if directory exists
    if (!fs.existsSync(publicPath)) {
      console.log(`Directory not found: ${publicPath}`)
      return []
    }
    
    const files = fs.readdirSync(publicPath)
    
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase()
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)
      })
      .filter(file => !file.toLowerCase().includes('cover')) // Exclude cover images
      .map((file, index) => {
        const nameWithoutExt = path.basename(file, path.extname(file))
        const cleanName = nameWithoutExt
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase())
        
        return {
          id: `${folderPath.replace(/[\/\\]/g, '-')}-${index + 1}`,
          src: `/${folderPath}/${file}`,
          alt: cleanName,
          title: cleanName
        }
      })
      .sort((a, b) => a.src.localeCompare(b.src))
    
    console.log(`Found ${images.length} images in ${folderPath}`)
    return images
  } catch (error) {
    console.error(`Error reading folder ${folderPath}:`, error)
    return []
  }
}

export function getVideosFromFolder(folderPath: string, videoFolderPath: string): Image[] {
  try {
    const publicPath = path.join(process.cwd(), 'public', folderPath)
    
    if (!fs.existsSync(publicPath)) {
      console.log(`Directory not found: ${publicPath}`)
      return []
    }
    
    const files = fs.readdirSync(publicPath)
    
    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase()
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext)
      })
      .filter(file => !file.toLowerCase().includes('cover'))
      .map((file, index) => {
        const baseName = path.basename(file, path.extname(file))
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
        
        const cleanName = baseName
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase())
        
        return {
          id: `video-${index + 1}`,
          src: `/${folderPath}/${file}`,
          alt: cleanName,
          title: cleanName,
          type: 'video' as const,
          videoUrl: videoUrl || undefined
        }
      })
      .sort((a, b) => a.src.localeCompare(b.src))
  } catch (error) {
    console.error(`Error reading folder ${folderPath}:`, error)
    return []
  }
}