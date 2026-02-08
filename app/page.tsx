'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Car, Gauge, Battery, Sparkles, Wifi, Utensils, Car as ParkingIcon, Users, Tv, Home } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float-in')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  
  return ref
}

function getLocalGallery(): string[] {
  // Static array of all 116 images with correct extensions for production deployment
  return [
    // Images 1-6 (.jpg)
    '/gallery/image1.jpg', '/gallery/image2.jpg', '/gallery/image3.jpg', '/gallery/image4.jpg', '/gallery/image5.jpg', '/gallery/image6.jpg',
    // Images 7-58 (.jpeg)
    '/gallery/image7.jpeg', '/gallery/image8.jpeg', '/gallery/image9.jpeg', '/gallery/image10.jpeg', '/gallery/image11.jpeg', '/gallery/image12.jpeg',
    '/gallery/image13.jpeg', '/gallery/image14.jpeg', '/gallery/image15.jpeg', '/gallery/image16.jpeg', '/gallery/image17.jpeg', '/gallery/image18.jpeg',
    '/gallery/image19.jpeg', '/gallery/image20.jpeg', '/gallery/image21.jpeg', '/gallery/image22.jpeg', '/gallery/image23.jpeg', '/gallery/image24.jpeg',
    '/gallery/image25.jpeg', '/gallery/image26.jpeg', '/gallery/image27.jpeg', '/gallery/image28.jpeg', '/gallery/image29.jpeg', '/gallery/image30.jpeg',
    '/gallery/image31.jpeg', '/gallery/image32.jpeg', '/gallery/image33.jpeg', '/gallery/image34.jpeg', '/gallery/image35.jpeg', '/gallery/image36.jpeg',
    '/gallery/image37.jpeg', '/gallery/image38.jpeg', '/gallery/image39.jpeg', '/gallery/image40.jpeg', '/gallery/image41.jpeg', '/gallery/image42.jpeg',
    '/gallery/image43.jpeg', '/gallery/image44.jpeg', '/gallery/image45.jpeg', '/gallery/image46.jpeg', '/gallery/image47.jpeg', '/gallery/image48.jpeg',
    '/gallery/image49.jpeg', '/gallery/image50.jpeg', '/gallery/image51.jpeg', '/gallery/image52.jpeg', '/gallery/image53.jpeg', '/gallery/image54.jpeg',
    '/gallery/image55.jpeg', '/gallery/image56.jpeg', '/gallery/image57.jpeg', '/gallery/image58.jpeg',
    // Images 59-64 (.jpg)
    '/gallery/image59.jpg', '/gallery/image60.jpg', '/gallery/image61.jpg', '/gallery/image62.jpg', '/gallery/image63.jpg', '/gallery/image64.jpg',
    // Images 65-116 (.jpeg)
    '/gallery/image65.jpeg', '/gallery/image66.jpeg', '/gallery/image67.jpeg', '/gallery/image68.jpeg', '/gallery/image69.jpeg', '/gallery/image70.jpeg',
    '/gallery/image71.jpeg', '/gallery/image72.jpeg', '/gallery/image73.jpeg', '/gallery/image74.jpeg', '/gallery/image75.jpeg', '/gallery/image76.jpeg',
    '/gallery/image77.jpeg', '/gallery/image78.jpeg', '/gallery/image79.jpeg', '/gallery/image80.jpeg', '/gallery/image81.jpeg', '/gallery/image82.jpeg',
    '/gallery/image83.jpeg', '/gallery/image84.jpeg', '/gallery/image85.jpeg', '/gallery/image86.jpeg', '/gallery/image87.jpeg', '/gallery/image88.jpeg',
    '/gallery/image89.jpeg', '/gallery/image90.jpeg', '/gallery/image91.jpeg', '/gallery/image92.jpeg', '/gallery/image93.jpeg', '/gallery/image94.jpeg',
    '/gallery/image95.jpeg', '/gallery/image96.jpeg', '/gallery/image97.jpeg', '/gallery/image98.jpeg', '/gallery/image99.jpeg', '/gallery/image100.jpeg',
    '/gallery/image101.jpeg', '/gallery/image102.jpeg', '/gallery/image103.jpeg', '/gallery/image104.jpeg', '/gallery/image105.jpeg', '/gallery/image106.jpeg',
    '/gallery/image107.jpeg', '/gallery/image108.jpeg', '/gallery/image109.jpeg', '/gallery/image110.jpeg', '/gallery/image111.jpeg', '/gallery/image112.jpeg',
    '/gallery/image113.jpeg', '/gallery/image114.jpeg', '/gallery/image115.jpeg', '/gallery/image116.jpeg'
  ]
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
  
  const heroRef = useScrollAnimation()
  const titleRef = useScrollAnimation()
  const subtitleRef = useScrollAnimation()
  const descriptionRef = useScrollAnimation()
  const buttonsRef = useScrollAnimation()

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
        <div ref={heroRef} className="relative z-10 container py-32 text-center text-white opacity-0">
          <h1 ref={titleRef} className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold mb-6 opacity-0 transform translate-y-8">
            Your journey, made extraordinary
          </h1>
          <h2 ref={subtitleRef} className="font-display text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-100 opacity-0 transform translate-y-8">
            Luxury stays, thoughtfully designed for every traveler
          </h2>
          <p ref={descriptionRef} className="mt-6 text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed opacity-0 transform translate-y-8">
            Welcome to Kwamou Luxury Stays, where you can discover our collection of retreats nestled in the most sought-after destinations. Immerse yourself in the perfect balance of style and comfort as you enjoy stays that have been carefully curated for families, friends, and business travelers alike.
          </p>
          <div ref={buttonsRef} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 transform translate-y-8">
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
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Property Card */}
          <div className="group cursor-pointer lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <Image 
                src={gallery[0] || hero} 
                alt="Kwamou Luxury Stays - Washington, DC" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-gold-700 transition-colors">
              Kwamou Luxury Stays | Washington, DC
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>10 Guest(s)</span>
              <span>•</span>
              <span>5 Bedrooms</span>
              <span>•</span>
              <span>6 Beds</span>
              <span>•</span>
              <span>5.5 Baths</span>
            </div>
            <Link 
              href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" 
              target="_blank"
              className="inline-flex items-center rounded-full bg-gold-500 px-6 py-3 font-semibold text-neutral-900 hover:bg-gold-400 transition"
            >
              Book This Property
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
