"use client";

import { Button } from "../ui/button";
import TracingBeam from "../ui/tracing-beam";

const steps = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Started as a solo founder with just a laptop and a vision. Working from a small home office, learning the ropes of entrepreneurship.",
    image: "/step1.png"
  },
  {
    year: "2019",
    title: "First Big Break",
    description:
      "Landed first major client that validated the business model. Hired first employee and moved into a small shared office space.",
    image: "/step2.png"
  },
  {
    year: "2020",
    title: "Pandemic Pivot",
    description:
      "Faced with COVID-19 challenges, shifted to remote work and adapted the business model. Discovered new opportunities in the changing market.",
    image: "/step1.png"
  },
  {
    year: "2021",
    title: "Scaling Up",
    description:
      "Expanded the team to 15 people. Secured first round of funding. Moved into proper office space as remote-first company.",
    image: "/step2.png"
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description:
      "Featured in major industry publications. Won first business award. Reached 7-figure revenue milestone.",
    image: "/step1.png"
  },
  {
    year: "2023",
    title: "Giving Back",
    description:
      "Launched mentorship program for new entrepreneurs. Started speaking at conferences to share the journey and lessons learned.",
    image: "/step2.png"
  }
];

export default function ProcessSection() {
  return (
    <section className="w-full py-20 px-6 md:px-10 relative z-10">
      <div className="max-w-5xl mx-auto text-center mb-5 space-y-4">
        <img src="/CEO.jpg" alt="image" style={{ height: "70px", width: "70px" }} className="items-center justify-center mx-auto rounded-xl" />
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

        <Button
          asChild
          className="bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 transform text-base font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
        >
          <a href="https://cal.com/joshnangia" target="_blank" rel="noopener noreferrer">
            Book a Transition Call Now →
          </a>
        </Button>
      </div>
    </section>
  );
}
