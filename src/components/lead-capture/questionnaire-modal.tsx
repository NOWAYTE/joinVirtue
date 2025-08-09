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
        {/* Backdrop with subtle blur */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isComplete ? "All Set! 🎉" : title || "Let's Get Started"}
                  </h2>
                  {!isComplete && (
                    <p className="mt-2 text-gray-600 text-sm">
                      {description || "Answer a few questions to help us personalize your experience."}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 -m-1 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            {!isComplete && (
              <div className="h-1.5 bg-blue-50">
                <div
                  className="h-full bg-blue-400 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!isComplete ? (
                  <motion.div
                    key={`question-${currentQuestion}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="space-y-6"
                  >
                    {currentQuestion < questions.length ? (
                      <>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-blue-600">
                            Question {currentQuestion + 1} of {questions.length}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {questions[currentQuestion].question}
                          </h3>
                        </div>
                        <div className="space-y-3">
                          {questions[currentQuestion].options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleOptionSelect(option)}
                              className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                answers[questions[currentQuestion].id]?.includes(option)
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            Almost there!
                          </h3>
                          <p className="text-gray-600">
                            Where should we send your personalized recommendations?
                          </p>
                        </div>
                        <div>
                          <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : 'Get My Free Guide →'}
                        </Button>
                        <p className="text-xs text-gray-500 text-center">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-5">
                      <svg
                        className="h-10 w-10 text-green-600"
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Check Your Inbox!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      We've sent your free guide to your email. Don't forget to check your spam folder if you can't find it!
                    </p>
                    <Button
                      onClick={onClose}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all cursor-pointer"
                    >
                      Close
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {!isComplete && currentQuestion < questions.length && (
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  ← Back
                </Button>
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-blue-600">{currentQuestion + 1}</span>
                  <span className="mx-1">/</span>
                  <span>{questions.length}</span>
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      setCurrentQuestion(prev => prev + 1)
                    } else {
                      setCurrentQuestion(prev => prev + 1)
                    }
                  }}
                  disabled={!answers[questions[currentQuestion].id]?.length}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {currentQuestion < questions.length - 1 ? 'Continue →' : 'Get My Guide'}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
