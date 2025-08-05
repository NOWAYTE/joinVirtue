import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User, Users, DollarSign, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto py-20 px-6 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-6">
            LIVE WEBINAR
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Building a Profitable Online Business
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Learn the exact strategies to build a successful online business from scratch, even with no prior experience.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-3 mb-10">
            <div className="flex items-center text-gray-700">
              <Calendar className="h-5 w-5 mr-2" />
              <span>August 15, 2024</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className="h-5 w-5 mr-2" />
              <span>7:00 PM - 8:30 PM (EAT)</span>
            </div>
          </div>
          
          <div className="space-y-4 max-w-md mx-auto">
            <Button className="w-full py-6 text-base font-medium rounded-lg bg-orange-500 text-white hover:bg-gray-800 transition-colors">
              Reserve My Spot - It's Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-500">
              Limited seats available. Secure your spot now.
            </p>
          </div>
        </div>
        
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-16">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-xl font-semibold mb-2">Webinar Starting Soon</h3>
              <p className="text-gray-600">August 15, 2024 at 7:00 PM EAT</p>
            </div>
          </div>
        </div>
        
        {/* What You'll Learn */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="space-y-4">
            {[
              "The #1 mistake beginners make when starting an online business",
              "How to validate your business idea before spending money",
              "Steps to build a profitable online business from scratch",
              "Attracting your first 100 customers without paid ads",
              "Scaling strategies for 6-figure growth",
              "Live Q&A session"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Instructor */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
              <User className="h-10 w-10 mx-auto mt-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold">Josh Nangia</h3>
            <p className="text-gray-600 mb-6">Business Coach & Entrepreneur</p>
            <p className="text-gray-700 mb-6 max-w-2xl">
              With over a decade of experience in building and scaling online businesses, I've helped thousands of students achieve financial independence through practical, actionable strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" /> 50,000+ Students
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" /> $10M+ Generated
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for this free masterclass and take the first step towards building your dream business.
          </p>
          <div className="space-y-4 max-w-md mx-auto">
            <Button className="w-full py-6 text-base font-medium rounded-lg bg-orange-500 text-white hover:bg-gray-800 transition-colors">
              Reserve My Free Spot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-500">
              Limited seats available. Registration closes soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
