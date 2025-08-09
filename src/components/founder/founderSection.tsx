import React from 'react';
import { Quote } from 'lucide-react';

interface FounderSectionProps {
  onCtaClick: () => void;
}

const FounderSection = ({ onCtaClick }: FounderSectionProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Founder Info */}
          <div className="mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                  alt="Shokhnur Ruziev"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse"></div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Josh Nangia
            </h2>
            <div className="text-gray-400 space-y-1">
              <p className="text-lg font-medium">Founder of virtue School.</p>
              <p>Teaching experience since 2010.</p>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 opacity-20">
              <Quote className="w-16 h-16 text-blue-500" />
            </div>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed italic relative z-10">
              <span className="text-blue-400">"</span>This course is designed to help you launch, optimize, and scale paid ad campaigns that actually work!<span className="text-blue-400">"</span>
            </blockquote>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 opacity-20">
              <Quote className="w-16 h-16 text-blue-500 rotate-180" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Can this course help me?
            </button>
          </div>


          {/* Decorative line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}></div>

      {/* Testimonial Card */}
      <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-8 mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200">
                <img
                  src="https://randomuser.me/api/portraits/women/43.jpg"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "This course completely transformed how I approach paid advertising. I went from wasting money on ads to consistently getting 3x ROAS within just 2 months!"
              </blockquote>
              <div className="text-blue-600 font-medium">Sarah Johnson</div>
              <div className="text-sm text-gray-500">E-commerce Store Owner</div>
              <div className="flex justify-center md:justify-start mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;