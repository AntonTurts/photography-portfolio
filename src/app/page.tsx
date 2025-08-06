// src/app/page.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SNOWSPORTS PHOTOGRAPHY',
    slug: '/snowsports-photo',
    description: 'Dynamic action shots and alpine landscapes',
    coverImage: '/images/snowsports-photo/cover.jpg'
  },
  {
    title: 'SNOWSPORTS VIDEOGRAPHY',
    slug: '/snowsports-video',
    description: 'Capturing motion and energy on the mountain',
    coverImage: '/images/snowsports-video/cover.jpg'
  },
  {
    title: 'EVENTS PHOTOGRAPHY',
    slug: '/events',
    description: 'Documenting moments that matter',
    coverImage: '/images/events/cover.jpg'
  },
  {
    title: 'OUTDOORS PHOTOGRAPHY',
    slug: '/outdoors',
    description: 'Exploring the natural world',
    coverImage: '/images/outdoors/cover.jpg'
  }
]

export default function Home() {
  return (
    <>
      <style jsx>{`
        .home-container {
          min-height: 100vh;
          padding: 120px 30px 60px;
          background: #fafafa;
        }
        
        .intro-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 100px;
        }
        
        .intro-title {
          font-size: 28px;
          font-weight: 300;
          line-height: 1.4;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }
        
        .intro-subtitle {
          font-size: 16px;
          color: #666;
          font-weight: 300;
          line-height: 1.6;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }
        
        .project-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .project-item {
          cursor: pointer;
        }
        
        .project-image-container {
          position: relative;
          overflow: hidden;
          background: #e0e0e0;
        }
        
        .project-image-container::before {
          content: '';
          display: block;
          padding-top: 66.67%; /* 3:2 aspect ratio */
        }
        
        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .project-item:hover .project-image {
          transform: scale(1.05);
        }
        
        .project-info {
          padding: 30px 0;
          text-align: center;
        }
        
        .project-title {
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-weight: 400;
        }
        
        .project-description {
          font-size: 14px;
          color: #666;
          font-weight: 300;
        }
      `}</style>

      <div className="home-container">
        <motion.div 
          className="intro-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="intro-title">
            Photographer, Videographer and Drone Pilot
          </h1>
          <p className="intro-subtitle">
            specialising in Snowsports and Events
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={project.slug} className="project-link">
                <div className="project-item">
                  <div className="project-image-container">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <div className="project-info">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}