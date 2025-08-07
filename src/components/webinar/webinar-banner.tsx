"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function WebinarBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide banner when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  if (!isVisible) return null

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-primary-700 to-primary-600 text-white z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium">
            <span className="font-bold">FREE LIVE TRAINING: </span>
            Learn How to Build a Profitable Online Business - August 15th, 7:00 PM EAT
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/webinar"
            className="bg-white text-primary-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium rounded-md whitespace-nowrap transition-colors"
          >
            Register Now
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsVisible(false)
            }}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
