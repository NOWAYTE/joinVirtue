"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah J.",
    title: "Marketing Director of Innovators",
    quote:
      "We partnered with Virtue to improve our conversion rates, and the results have been phenomenal.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_1",
    logo: "/client-logo.svg",
  },
  {
    name: "David R.",
    title: "Founder of Green Earth Products",
    quote:
      "Working with Virtue has been a game-changer for our business. Their design strategy helped us secure top results.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_2",
    logo: "/client-logo.svg",
  },
  {
    name: "Alex T.",
    title: "Head of Growth, Lumina",
    quote:
      "We engaged Virtue to revamp our landing experience, and the results have been outstanding.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_3",
    logo: "/client-logo.svg",
  },
]

export default function VideoTestimonials() {
  return (
    <section className="bg-[#06070A] py-24 px-6 md:px-10 text-white relative overflow-hidden"> 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-[#0A0D14]/60 rounded-2xl border border-[#1B1E24] backdrop-blur-sm p-4 flex flex-col shadow-md hover:shadow-lg hover:border-[#2c2f38] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <iframe
                src={t.videoUrl}
                title={t.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl border-none"
              ></iframe>
            </div>
            <p className="text-sm text-gray-300 mb-4 italic">“{t.quote}”</p>
            <div className="mt-auto">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.title}</p>
            </div>
            {t.logo && (
              <img
                src={t.logo}
                alt="Client Logo"
                className="w-5 h-5 mt-2 opacity-70"
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button className="text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2 text-base font-medium rounded-xl transition">
          Book a Call
        </Button>
      </div>
      {/* <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[90%] h-[300px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" /> */}
    </section>
  )
}
