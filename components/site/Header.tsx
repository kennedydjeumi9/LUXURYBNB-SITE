'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold text-gray-900">KWAMOU LUXE STAYS</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm">
          <Link href="/" className="text-gray-700 hover:text-gold-700 transition-colors">Home</Link>
          <Link href="#properties" className="text-gray-700 hover:text-gold-700 transition-colors">Properties</Link>
          <Link href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" target="_blank" className="text-gray-700 hover:text-gold-700 transition-colors">Booking</Link>
          <Link href="https://turo.com/us/en/suv-rental/united-states/washington-dc/tesla/model-y/3386809" target="_blank" className="text-gray-700 hover:text-gold-700 transition-colors">Rent Tesla</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gold-700 transition-colors">Contact</Link>
          <Link href="/policies" className="text-gray-700 hover:text-gold-700 transition-colors">Policies</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 space-y-3 text-sm">
            <Link href="/" className="block text-gray-700 hover:text-gold-700 transition-colors">Home</Link>
            <Link href="#properties" className="block text-gray-700 hover:text-gold-700 transition-colors">Properties</Link>
            <Link href="https://www.airbnb.com/rooms/1572548932592569761?viralityEntryPoint=1&s=76&source_impression_id=p3_1770146471_P3lICg-adODSOdr2" target="_blank" className="block text-gray-700 hover:text-gold-700 transition-colors">Booking</Link>
            <Link href="https://turo.com/us/en/suv-rental/united-states/washington-dc/tesla/model-y/3386809" target="_blank" className="block text-gray-700 hover:text-gold-700 transition-colors">Rent Tesla</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-gold-700 transition-colors">Contact</Link>
            <Link href="/policies" className="block text-gray-700 hover:text-gold-700 transition-colors">Policies</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
