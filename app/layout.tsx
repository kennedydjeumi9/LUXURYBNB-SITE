import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'

export const metadata: Metadata = {
  title: 'Kwamou Luxury Stays - Premium Vacation Rentals in Washington, DC',
  description: 'Your gateway to premium vacation experiences in Washington, DC. Discover our collection of luxury properties thoughtfully designed for the discerning traveler.',
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kwamou Luxury Stays',
    description: 'Your journey, made extraordinary. Luxury stays, thoughtfully designed for every traveler.',
    url: 'https://example.com',
    siteName: 'Kwamou Luxury Stays',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kwamou Luxury Stays',
    description: 'Your journey, made extraordinary. Luxury stays, thoughtfully designed for every traveler.'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
