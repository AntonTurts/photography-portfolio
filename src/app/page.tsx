// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Portfolio Grid */}
      <div className="pt-24 px-8 max-w-7xl mx-auto">
        
        {/* Top Row - Snowsports Photo & Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Snowsports Photography */}
          <Link href="/snowsports-photo" className="portfolio-tile aspect-[4/3]">
            <img
              src="/images/snowsports-photo/cover.jpg"
              alt="Snowsports Photography"
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h2 className="portfolio-text">Snowsports Photography</h2>
            </div>
          </Link>

          {/* Snowsports Videography */}
          <Link href="/snowsports-video" className="portfolio-tile aspect-[4/3]">
            <img
              src="/images/snowsports-video/cover.jpg"
              alt="Snowsports Videography"
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h2 className="portfolio-text">Snowsports Videography</h2>
            </div>
          </Link>
        </div>

        {/* Bottom Row - Events & Outdoors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Events Photography */}
          <Link href="/events" className="portfolio-tile aspect-[4/3]">
            <img
              src="/images/events/cover.jpg"
              alt="Events Photography"
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h2 className="portfolio-text">Events Photography</h2>
            </div>
          </Link>

          {/* Outdoors Photography */}
          <Link href="/outdoors" className="portfolio-tile aspect-[4/3]">
            <img
              src="/images/outdoors/cover.jpg"
              alt="Outdoors Photography"
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h2 className="portfolio-text">Outdoors Photography</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}