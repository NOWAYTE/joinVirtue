import React from 'react';
import { Play } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-lg mb-4">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Graduates Don't Just<br />
            Learn, <span className="text-orange-500">They Achieve.</span>
          </h1>
        </div>

        {/* Video Section */}
        <div className="relative">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="relative aspect-video bg-gradient-to-br from-amber-100 to-orange-200">
              {/* Using a stock photo from Pexels */}
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
                alt="Professional woman in conversation"
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group">
                  <Play className="w-8 h-8 text-gray-800 ml-1 group-hover:text-orange-500 transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg max-w-xs">
            <div className="flex items-center space-x-3">
              {/* Profile Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Cooper Geidt"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">Cooper Geidt</h3>
                <p className="text-gray-600 text-xs mb-1">Senior Prompt Engineer</p>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">K</span>
                  </div>
                  <span className="text-gray-700 text-xs font-medium">KREA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;