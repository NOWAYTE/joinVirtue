"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Adam Gwadyr",
        title: "Entrepreneur",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "Without Max's design resources, I wouldn't have been able to run my online shop as effectively. Since subscribing, our revenues increased by 20%.",
    },
    {
        id: 2,
        name: "Sophie Moore",
        title: "Head of Marketing",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "The subscription to Max's design has radically transformed my enterprise. The premade designs, resources, and support dramatically reduce my costs and effort.",
    },
    {
        id: 3,
        name: "Sophie More",
        title: "CTO of Lambda",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "As a non-designer, I used to struggle with creating visuals. Now I can quickly design professional graphics thanks to Max's service.",
    },
    {
        id: 4,
        name: "Adam Gwadyr",
        title: "Entrepreneur",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "Without Max's design resources, I wouldn't have been able to run my online shop as effectively. Since subscribing, our revenues increased by 20%.",
    },
    {
        id: 5,
        name: "Leslie Deway",
        title: "Designer",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "I had my doubts, yet Max's design membership provided all the necessary resources at a reasonable cost. Best investment I've ever made!",
    },
    {
        id: 6,
        name: "Michel O'Neill",
        title: "Head of Sales",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "Max offers way more quality templates than competitors at the same price point. His design subscription is my go-to creative toolkit.",
    },
    {
        id: 7,
        name: "Bard De Costa",
        title: "Entrepreneur",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "It's astonishing how Max's design resources drastically cut down my work time compared to initiating from scratch. Absolute revolution!",
    },
    {
        id: 8,
        name: "Adam Dennis",
        title: "Entrepreneur",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "Max offers the perfect blend of high quality templates and creative flexibility. I can customize designs to perfectly fit my brand.",
    },
    {
        id: 9,
        name: "Sarah Chen",
        title: "Product Manager",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "The design system is incredibly comprehensive. It's saved our team countless hours and improved our overall design consistency.",
    },
    {
        id: 10,
        name: "Marcus Rodriguez",
        title: "Creative Director",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
            "Outstanding quality and variety. The templates are modern, professional, and easily customizable for any brand or project.",
    },
]

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function AnimatedTestimonials() {
  return (
    <div className="py-24 overflow-hidden relative max-w-4xl mx-auto">
      {/* Radial‐gradient background fade */}
      <div className="absolute w-[100%] left-0 bg-[#04060A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      <div className="absolute w-40 h-[100%] left-0 bg-[#04060A] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      <div
        className="absolute inset-auto left-1/2 h-56 w-[30rem] md:w-[30rem] sm:w-[10rem] bg-gradient-conic from-transparent via-transparent to-neutral-500 text-white [--conic-position:from_290deg_at_center_top]"
      />

      {/* Gradient fades on edges */}
      <div className="absolute w-40 h-[100%] right-0 bg-[#04060A] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
      <div className="absolute w-[100%] right-0 bg-[#04060A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <p className="text-sm text-muted-foreground uppercase tracking-widest">
          What Our Members Say
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Join the Builder Movement
        </h2>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 px-6 md:px-20 lg:px-24 space-y-8">
        {/* Row 1 - scroll left */}
        <div>
          <div className="flex animate-scroll-left">
            {duplicatedTestimonials.slice(0, 15).map((t, i) => (
              <Card
                key={`row1-${t.id}-${i}`}
                className="flex-shrink-0 w-80 mx-3 bg-[#06090f] border border-[#0A0D14] backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-start mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border border-[#04060D]">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback className="bg-[#06090f] text-white text-sm">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-white text-sm">
                        {t.name}
                      </div>
                      <div className="text-gray-400 text-xs">{t.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Row 2 - scroll right */}
        <div>
          <div className="flex animate-scroll-right">
            {duplicatedTestimonials.slice(5, 20).map((t, i) => (
              <Card
                key={`row2-${t.id}-${i}`}
                className="flex-shrink-0 w-80 mx-3 bg-[#06090f] border border-[#0A0D14] backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-start mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border border-[#04060D]">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback className="bg-[#06090f] text-white text-sm">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-white text-sm">
                        {t.name}
                      </div>
                      <div className="text-gray-400 text-xs">{t.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}