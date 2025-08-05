"use client"

import { useState } from "react"
import { Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type FreeResourceProps = {
  title?: string
  description?: string
  buttonText?: string
  successMessage?: string
}

export function FreeResourceSection({
  title = "Free Resource: 5 Steps to Your First $1K Online",
  description = "Get instant access to our proven framework for starting an online business, even if you're starting from scratch.",
  buttonText = "Get Instant Access",
  successMessage = "Check your email for the download link!"
}: FreeResourceProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

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
      console.log('Email submitted:', email)
      setIsSuccess(true)
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
      
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 md:pr-10">
                <h2 className="text-2xl font-bold text-themeTextWhite mb-3">
                  {title}
                </h2>
                <p className="text-themeTextGray mb-6 md:mb-0">
                  {description}
                </p>
              </div>
              
              <div className="md:w-1/3">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center p-3 bg-green-50 text-green-700 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{successMessage}</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
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
                      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          {buttonText}
                        </>
                      )}
                    </Button>
                  </form>
                )}
                
                <p className="mt-3 text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100/20">
              <h3 className="text-sm font-medium text-themeTextWhite mb-3">What's inside:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-themeTextGray">
                {[
                  "✓ The exact steps to validate your business idea",
                  "✓ How to find your first 100 customers",
                  "✓ Pricing strategies that work",
                  "✓ Free tools and resources to get started",
                  "✓ Case studies of successful students",
                  "✓ Bonus: 30-minute strategy call"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
