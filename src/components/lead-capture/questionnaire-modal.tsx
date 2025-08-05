"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

type Question = {
  id: number
  question: string
  options: string[]
  type: 'single' | 'multiple'
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your current level of experience with online business?",
    type: 'single',
    options: [
      "Complete beginner",
      "Some experience but no sales yet",
      "Made a few sales",
      "Running a business but want to scale"
    ]
  },
  {
    id: 2,
    question: "What's your biggest challenge right now?",
    type: 'single',
    options: [
      "Finding a profitable niche",
      "Getting traffic to my offer",
      "Converting visitors to customers",
      "Scaling my existing business"
    ]
  },
  {
    id: 3,
    question: "How much time can you dedicate weekly?",
    type: 'single',
    options: [
      "Less than 5 hours",
      "5-10 hours",
      "10-20 hours",
      "20+ hours"
    ]
  },
  {
    id: 4,
    question: "What are your main goals? (Select all that apply)",
    type: 'multiple',
    options: [
      "Earn my first $1,000 online",
      "Replace my 9-5 income",
      "Build a scalable business",
      "Achieve financial freedom"
    ]
  }
]

type QuestionnaireModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function QuestionnaireModal({ isOpen, onClose, title, description }: QuestionnaireModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleOptionSelect = (option: string) => {
    const question = questions[currentQuestion]
    
    if (question.type === 'single') {
      setAnswers(prev => ({
        ...prev,
        [question.id]: [option]
      }))
      
      // Auto-advance for single-select questions
      if (currentQuestion < questions.length - 1) {
        setTimeout(() => setCurrentQuestion(prev => prev + 1), 300)
      }
    } else {
      setAnswers(prev => ({
        ...prev,
        [question.id]: prev[question.id]?.includes(option)
          ? prev[question.id].filter(item => item !== option)
          : [...(prev[question.id] || []), option]
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitted:', { email, answers })
      setIsSubmitting(false)
      setIsComplete(true)
    }, 1000)
  }

  const progress = ((currentQuestion + 1) / (questions.length + 1)) * 100

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isComplete ? "Thank You!" : title || "Let's Find Your Perfect Fit"}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {!isComplete && (
                <p className="mt-1 text-gray-600">
                  {description || "Answer a few questions to help us personalize your experience."}
                </p>
              )}
            </div>
            
            {/* Progress bar */}
            {!isComplete && (
              <div className="h-1 bg-gray-100">
                <div 
                  className="h-full bg-orange-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            
            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {!isComplete ? (
                  <motion.div
                    key={`question-${currentQuestion}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {currentQuestion < questions.length ? (
                      <>
                        <h3 className="text-xl font-medium text-gray-900">
                          {questions[currentQuestion].question}
                        </h3>
                        <div className="space-y-3">
                          {questions[currentQuestion].options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleOptionSelect(option)}
                              className={`w-full text-left p-4 rounded-lg border ${
                                answers[questions[currentQuestion].id]?.includes(option)
                                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                              } transition-colors`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Where should we send your personalized recommendations?
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Get My Recommendations'}
                        </Button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">All Set!</h3>
                    <p className="text-gray-600 mb-6">
                      We're preparing your personalized recommendations. Check your email shortly!
                    </p>
                    <Button
                      onClick={onClose}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Close
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Navigation */}
            {!isComplete && currentQuestion < questions.length && (
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                >
                  Back
                </Button>
                <div className="text-sm text-gray-500 flex items-center">
                  {currentQuestion + 1} of {questions.length}
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      setCurrentQuestion(prev => prev + 1)
                    } else {
                      setCurrentQuestion(prev => prev + 1) // Move to email form
                    }
                  }}
                  disabled={!answers[questions[currentQuestion].id]?.length}
                >
                  {currentQuestion < questions.length - 1 ? 'Next' : 'Continue'}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
