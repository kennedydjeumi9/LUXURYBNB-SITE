import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">KWAMOU LUXE STAYS</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your gateway to premium vacation experiences in Washington, DC. Discover our collection of luxury properties thoughtfully designed for the discerning traveler.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" 
                target="_blank"
                className="inline-flex items-center rounded-full bg-gold-500 px-6 py-2 font-medium text-neutral-900 hover:bg-gold-400 transition text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="#properties" className="text-gray-300 hover:text-gold-400 transition-colors">Properties</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><Link href="/policies" className="text-gray-300 hover:text-gold-400 transition-colors">Policies</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" 
                  target="_blank"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Vacation Rentals
                </Link>
              </li>
              <li>
                <Link 
                  href="https://turo.com/us/en/suv-rental/united-states/washington-dc/tesla/model-y/3386809" 
                  target="_blank"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Tesla Rental
                </Link>
              </li>
              <li><Link href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Property Management</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Concierge Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Washington, DC Area</li>
              <li>
                <Link href="mailto:rooseveltkwamou@gmail.com" className="hover:text-gold-400 transition-colors">
                  rooseveltkwamou@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+12404295860" className="hover:text-gold-400 transition-colors">
                  +1 (240) 429-5860
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Kwamou Luxury Stays. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/policies" className="text-gray-400 hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link href="/policies" className="text-gray-400 hover:text-gold-400 transition-colors">Terms of Service</Link>
              <Link href="/policies" className="text-gray-400 hover:text-gold-400 transition-colors">Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
