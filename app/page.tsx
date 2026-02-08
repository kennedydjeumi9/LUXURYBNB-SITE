import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Car, Gauge, Battery, Sparkles, Wifi, Utensils, Car as ParkingIcon, Users, Tv, Home } from 'lucide-react'
import fs from 'fs'
import path from 'path'

function getLocalGallery(): string[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery')
    if (!fs.existsSync(dir)) return []
    const files = fs.readdirSync(dir)
    const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp'])
    return files
      .filter((f) => allowed.has(path.extname(f).toLowerCase()))
      .map((f) => `/gallery/${f}`)
  } catch {
    return []
  }
}

export default function HomePage() {
  const local = getLocalGallery()
  const hero = local[0] ?? 'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_14.jpg'
  const gallery = local.length
    ? local
    : [
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_1.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_2.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_3.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_4.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_5.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_6.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_7.jpg',
        'https://ssl.cdn-redfin.com/photo/166/mbphoto/166/genMid.DCDC2144700_8.jpg',
      ]
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Kwamou Luxury Stays"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 container py-32 text-center text-white">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold mb-6">
            Your journey, made extraordinary
          </h1>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-100">
            Luxury stays, thoughtfully designed for every traveler
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
            Welcome to Kwamou Luxury Stays, where you can discover our collection of retreats nestled in the most sought-after destinations. Immerse yourself in the perfect balance of style and comfort as you enjoy stays that have been carefully curated for families, friends, and business travelers alike.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 font-semibold text-neutral-900 hover:bg-gold-400 transition text-lg" target="_blank">
              Book Your Stay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="#properties" className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-4 font-semibold text-white hover:bg-white/10 transition text-lg">
              View Properties
            </Link>
          </div>
        </div>
      </section>

      <section id="properties" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">homes for you</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our curated collection of luxury properties in prime locations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image 
                src={gallery[0] || hero} 
                alt="Luxury DC Property" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold-700 transition-colors">
              Luxury 2BR + Parking | Heart of DC – Walk to Metro
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>4 Guest(s)</span>
              <span>•</span>
              <span>2 Bed(s)</span>
              <span>•</span>
              <span>1.5 Bath(s)</span>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image 
                src={gallery[1] || hero} 
                alt="Luxury Beach Property" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold-700 transition-colors">
              Luxe Beach Home | Heated Pool | Steps to Ocean
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>8 Guest(s)</span>
              <span>•</span>
              <span>4 Bed(s)</span>
              <span>•</span>
              <span>2 Bath(s)</span>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image 
                src={gallery[2] || hero} 
                alt="Luxury DC Property with Outdoor Space" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold-700 transition-colors">
              Luxe 3BR+Parking & Outdoor Space | 6-min to DC
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>6 Guest(s)</span>
              <span>•</span>
              <span>3 Bed(s)</span>
              <span>•</span>
              <span>2 Bath(s)</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" 
            target="_blank"
            className="inline-flex items-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-neutral-900 hover:bg-gold-400 transition"
          >
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="highlights" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl">Elegance</h3>
            <p className="mt-2 text-neutral-600">Thoughtful interiors, premium finishes, and an inviting ambiance.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl">Comfort</h3>
            <p className="mt-2 text-neutral-600">Hotel-grade linens, curated amenities, and quiet rest.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl">Location</h3>
            <p className="mt-2 text-neutral-600">Convenient DC access for culture, dining, and business.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What we Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">All the essentials and more for your perfect stay</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">All The Essentials</h3>
              <p className="text-gray-600 text-sm">Everything you need for a comfortable stay</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fully Equipped Kitchens</h3>
              <p className="text-gray-600 text-sm">Modern appliances and cookware included</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ParkingIcon className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Parking</h3>
              <p className="text-gray-600 text-sm">Free parking available at all properties</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Family Friendly</h3>
              <p className="text-gray-600 text-sm">Perfect for families and groups</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Wireless Internet</h3>
              <p className="text-gray-600 text-sm">High-speed WiFi throughout</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Entertainment</h3>
              <p className="text-gray-600 text-sm">Smart TVs and streaming services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Amenities</h3>
              <p className="text-gray-600 text-sm">Luxury touches throughout</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-gold-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Tesla Rental Available</h3>
              <p className="text-gray-600 text-sm">Enhance your stay with our Tesla</p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">hand picked recommendations, curated for you</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the best local experiences and attractions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Georgetown Park</h3>
              <p className="text-gray-600 text-sm mb-3">Historic shopping and dining district with charming cobblestone streets</p>
              <Link href="#" className="text-gold-700 hover:text-gold-800 text-sm font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Union Market</h3>
              <p className="text-gray-600 text-sm mb-3">Vibrant food hall with local vendors and artisanal eats</p>
              <Link href="#" className="text-gold-700 hover:text-gold-800 text-sm font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Off Record</h3>
              <p className="text-gray-600 text-sm mb-3">Speakeasy-style cocktail bar with craft mixology</p>
              <Link href="#" className="text-gold-700 hover:text-gold-800 text-sm font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-2">The Gibson</h3>
              <p className="text-gray-600 text-sm mb-3">Upscale lounge with inventive cocktails and live music</p>
              <Link href="#" className="text-gold-700 hover:text-gold-800 text-sm font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Old Ebbitt Grill</h3>
              <p className="text-gray-600 text-sm mb-3">Iconic DC institution serving classic American cuisine since 1856</p>
              <Link href="#" className="text-gold-700 hover:text-gold-800 text-sm font-medium">Learn More →</Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Founding Farmers</h3>
              <p className="text-gray-600 text-sm mb-3">Farm-to-table dining with seasonal ingredients</p>
              <Link href="#" className="text-gold-700 hover:text-gold-800 text-sm font-medium">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      

      <section id="gallery" className="container pb-24">
        <h2 className="font-display text-3xl">Gallery</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={src} alt={`Gallery image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl">Guest Testimonials</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <blockquote className="rounded-xl border p-6 bg-white">
            <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
            </div>
            <p className="mt-3 text-neutral-700">“Loved everything about this spot! Super clean, modern, and cozy. The host was quick to respond and gave amazing local recommendations. Definitely coming back next time I’m in town.”</p>
            <footer className="mt-4 text-sm text-neutral-500">— Emily T. (Stayed 3 nights)</footer>
          </blockquote>

          <blockquote className="rounded-xl border p-6 bg-white">
            <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
            </div>
            <p className="mt-3 text-neutral-700">“One of the best Airbnbs I’ve stayed at! Everything looked exactly like the pictures, check-in was smooth, and the neighborhood was quiet but close to everything. 10/10 experience.”</p>
            <footer className="mt-4 text-sm text-neutral-500">— Marcus L. (Stayed 1 week)</footer>
          </blockquote>

          <blockquote className="rounded-xl border p-6 bg-white">
            <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
            </div>
            <p className="mt-3 text-neutral-700">“This place was perfect for our weekend trip! Super comfortable bed, fast Wi‑Fi, and the host made us feel right at home. Highly recommend!”</p>
            <footer className="mt-4 text-sm text-neutral-500">— Jasmine K. (Weekend getaway)</footer>
          </blockquote>

          <blockquote className="rounded-xl border p-6 bg-white">
            <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
            </div>
            <p className="mt-3 text-neutral-700">“Stayed here for work — clean, stylish, and peaceful. I really appreciated how fast the host replied to every message. Way better than a hotel stay.”</p>
            <footer className="mt-4 text-sm text-neutral-500">— Anthony R. (Business traveler)</footer>
          </blockquote>

          <blockquote className="rounded-xl border p-6 bg-white">
            <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
            </div>
            <p className="mt-3 text-neutral-700">“Such a beautiful space! The vibe was relaxing and romantic. Everything was spotless and smelled great. Thank you for making our anniversary weekend special!”</p>
            <footer className="mt-4 text-sm text-neutral-500">— Chloe M. (Couples trip)</footer>
          </blockquote>

          <blockquote className="rounded-xl border p-6 bg-white">
            <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
            </div>
            <p className="mt-3 text-neutral-700">“Perfect location, quiet building, and super easy check‑in. The host even checked in mid‑stay to make sure I was comfortable. Would definitely book again.”</p>
            <footer className="mt-4 text-sm text-neutral-500">— Kevin D. (Solo traveler)</footer>
          </blockquote>
        </div>
      </section>
      <section className="bg-neutral-50">
        <div className="container py-16">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h2 className="font-display text-3xl">Rent Our Tesla Model Y</h2>
              <p className="mt-2 max-w-2xl text-neutral-600">Enhance your DC stay with a quiet, all‑electric ride. Convenient pickup near the property and effortless charging around the city.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2"><Battery className="h-4 w-4 text-gold-600" /> 330+ mile range</div>
                <div className="flex items-center gap-2"><Gauge className="h-4 w-4 text-gold-600" /> Smooth, instant torque</div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold-600" /> Premium, spotless interior</div>
              </div>
              <a
                href="https://turo.com/us/en/suv-rental/united-states/washington-dc/tesla/model-y/3386809"
                target="_blank"
                className="mt-6 inline-flex items-center rounded-full bg-gold-500 px-6 py-3 font-medium text-neutral-900 hover:bg-gold-400 transition"
              >
                <Car className="mr-2 h-4 w-4" /> Book the Tesla on Turo
              </a>
            </div>
            <div className="flex-1 min-w-[260px] space-y-6">
              <div className="rounded-xl border bg-white p-6">
                <div className="text-sm text-neutral-500">Tesla renter reviews</div>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">“This stay was incredible! The house was spotless, beautifully designed, and the Tesla option was a total game changer. We took short drives around the area, and it made the trip feel so luxurious. Definitely coming back again!”</p>
                    <div className="mt-1 text-xs text-neutral-500">— Brianna J. (Stayed 4 nights)</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">“Bro… the Tesla option alone made this place next-level. Smooth check-in, super clean space, and driving that Tesla was the cherry on top. 5 stars easy.”</p>
                    <div className="mt-1 text-xs text-neutral-500">— Malik R. (Weekend getaway)</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gold-600" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />))}
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">“I travel a lot for business, and this host went above and beyond. The place was quiet and modern, and having the Tesla available made commuting effortless. Charging station on‑site was super convenient too!”</p>
                    <div className="mt-1 text-xs text-neutral-500">— Sarah T. (Work trip)</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-white p-6">
                <h3 className="font-display text-xl">Pickup & FAQs</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li><strong>Pickup:</strong> Near the property; exact location shared after booking on Turo.</li>
                  <li><strong>Requirements:</strong> Valid driver’s license and Turo eligibility.</li>
                  <li><strong>Insurance:</strong> Managed through Turo at checkout.</li>
                  <li><strong>Charging:</strong> Local Superchargers nearby; please return with at least 50% charge.</li>
                  <li><strong>Mileage:</strong> See Turo listing for daily mileage limits.</li>
                  <li><strong>Return:</strong> Same location as pickup unless otherwise arranged.</li>
                  <li><strong>No smoking / no pets</strong> in the vehicle; cleaning fees may apply.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="container py-16 text-center">
          <h3 className="font-display text-2xl">Ready to reserve?</h3>
          <p className="mt-2 text-neutral-600">Send an inquiry with your dates and well confirm availability.</p>
          <Link href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76" className="mt-6 inline-flex items-center rounded-full bg-gold-500 px-6 py-3 font-medium text-neutral-900 hover:bg-gold-400 transition" target="_blank">
            Make an inquiry
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
