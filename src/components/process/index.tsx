"use client";

import { Button } from "../ui/button";
import TracingBeam from "../ui/tracing-beam";

const steps = [
  {
    year: "2023",
    title: "Start Small",
    description:
      "Begin with a side project or small business idea. No need for massive upfront investment.",
    image: "/step1.png"
  },
  {
    year: "2024",
    title: "Learn by Doing",
    description:
      "Get hands-on experience with real projects. Learn from mistakes and successes.",
    image: "/step2.png"
  },
  {
    year: "2025",
    title: "Build Products",
    description:
      "Create digital products, courses, or services that solve real problems.",
    image: "/step3.png"
  },
  {
    year: "2026",
    title: "Build in Public",
    description:
      "Share your progress, get feedback, and stay accountable inside the private builder community.",
    image: "/step4.png"
  },
  {
    year: "2027",
    title: "Earn & Scale",
    description:
      "Once things click, scale up what works. Get access to hidden upgrades, advanced strategies, and exclusive drops.",
    image: "/step5.png"
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-20 px-6 md:px-10 relative z-10">
      <div className="max-w-5xl mx-auto text-center mb-5 space-y-4">
        <img src="/CEO.jpg" alt="image" style={{height: "70px", width: "70px"}} className="items-center justify-center mx-auto rounded-xl"/>
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Meet your <br className="md:block hidden" />mentor Josh
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          No fluff. No gatekeeping. Just a raw system that works — and you're
          part of it from Day 1.
        </p>
      </div>

      <TracingBeam 
        className="relative max-w-5xl mx-auto w-full"
        items={steps}
      />
      <div className="text-center mt-40 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12"> Are you read <br className="md:block hidden" /> to transform your life?</h1>
      
      <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
        Book a Transition Call Now →
      </Button>
      </div>
    </section>
  );
}
