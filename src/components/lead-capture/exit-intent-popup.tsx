"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

type ExitIntentPopupProps = {
  title?: string
  description?: string
  buttonText?: string
  successMessage?: string
  cookieName?: string
  cookieExpiryDays?: number
}

export function ExitIntentPopup({
  title = "Wait! Before you go...",
  description = "Get our free guide: 5 Steps to Your First $1K Online. Enter your email below to download it now.",
  buttonText = "Get Instant Access",
  successMessage = "Check your email for the download link!",
  cookieName = "exitIntentShown",
  cookieExpiryDays = 7
}: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Check if cookie exists
  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`))
      ?.split('=')[1]

    if (cookieValue !== 'true') {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger if the mouse is moving toward the top of the page
        if (e.clientY < 50) {
          setIsOpen(true)
          document.removeEventListener('mouseleave', handleMouseLeave)
          
          // Set cookie to prevent showing again for X days
          const date = new Date()
          date.setTime(date.getTime() + (cookieExpiryDays * 24 * 60 * 60 * 1000))
          document.cookie = `${cookieName}=true; expires=${date.toUTCString()}; path=/`
        }
      }

      // Add event listener when component mounts
      document.addEventListener('mouseleave', handleMouseLeave)
      
      // Clean up event listener on unmount
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [cookieName, cookieExpiryDays])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Exit intent email submitted:', email)
      setIsSuccess(true)
      setEmail('')
      
      // Close after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
      
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {isSuccess ? "Check Your Inbox!" : title}
              </h2>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-gray-600 mb-6"
                  >
                    {successMessage}
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-600">
                      {description}
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="exit-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="exit-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                        {error && (
                          <p className="mt-1 text-sm text-red-600">{error}</p>
                        )}
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : buttonText}
                      </Button>
                    </form>
                    
                    <p className="text-xs text-gray-500">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
