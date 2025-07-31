// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <div className="pt-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Contact</h1>
          <p className="text-lg text-gray-600 font-light">
            Let's create something beautiful together
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-light mb-6 tracking-wide">Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Email:</strong><br />
                your@email.com
              </p>
              <p>
                <strong className="text-gray-900">Phone:</strong><br />
                +1 (555) 123-4567
              </p>
              <p>
                <strong className="text-gray-900">Location:</strong><br />
                Your City, State
              </p>
              <p>
                <strong className="text-gray-900">Instagram:</strong><br />
                <a href="https://instagram.com/yourusername" className="hover:text-gray-900 transition-colors">
                  @yourusername
                </a>
              </p>
            </div>
          </div>
  
          {/* Services */}
          <div>
            <h2 className="text-2xl font-light mb-6 tracking-wide">Services</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Snowsports Photography</li>
              <li>• Snowsports Videography</li>
              <li>• Event Photography</li>
              <li>• Outdoor & Adventure Photography</li>
              <li>• Commercial Photography</li>
              <li>• Print Sales</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }