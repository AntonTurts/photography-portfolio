// src/components/Navigation/Navigation.tsx
'use client'
import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  
  return (
    <>
      <style jsx>{`
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: ${isHome ? 'transparent' : 'rgba(255, 255, 255, 0.98)'};
          z-index: 100;
          padding: 20px 30px;
          transition: background 0.3s ease;
        }
        
        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        .nav-link {
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          color: ${isHome ? '#333' : '#666'};
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: #000;
        }
        
        .nav-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          color: #000;
          font-weight: 400;
        }
        
        .nav-socials {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        
        .social-link {
          color: ${isHome ? '#333' : '#666'};
          transition: color 0.2s ease;
        }
        
        .social-link:hover {
          color: #000;
        }
      `}</style>

      <nav className="nav-container">
        <div className="nav-inner">
          <div className="nav-links">
            <Link href="/" className="nav-link">Work</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
          
          <Link href="/" className="nav-title">
            ANTON TURTSEVYCH
          </Link>
          
          <div className="nav-socials">
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="mailto:your@email.com"
              className="social-link"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation