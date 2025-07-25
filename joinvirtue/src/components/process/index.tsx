"use client";

import { Button } from "../ui/button";
import TracingBeam from "../ui/tracing-beam";

const steps = [
  {
    title: "Start Small",
    description:
      "Begin with a side project or small business idea. No need for massive upfront investment.",
  },
  {
    title: "Learn by Doing",
    description:
      "Get hands-on experience with real projects. Learn from mistakes and successes.",
  },
  {
    title: "Build Products",
    description:
      "Create digital products, courses, or services that solve real problems.",
  },
  {
    title: "Build in Public",
    description:
      "Share your progress, get feedback, and stay accountable inside the private builder community.",
  },
  {
    title: "Earn & Scale",
    description:
      "Once things click, scale up what works. Get access to hidden upgrades, advanced strategies, and exclusive drops.",
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
      >
        <div className="flex flex-col gap-16">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex w-full items-start ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`
                    max-w-md w-full p-6 rounded-xl border border-[#1a1a1a] hover:border-[#2b80ff]
                    transition duration-300 relative bg-black/60
                    ${isLeft ? "text-right mr-8" : "text-left ml-8"}
                  `}
                >
                  <h4 className="text-lg font-semibold mb-2">
                    {`${idx + 1}. ${step.title}`}
                  </h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                  <span
                    className={`
                      absolute top-6 w-3 h-3 rounded-full bg-[#2b80ff]
                      ${isLeft ? "right-[-0.75rem]" : "left-[-0.75rem]"}
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </TracingBeam>
      <div className="text-center mt-40 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12"> Are you read <br className="md:block hidden" /> to transform your life?</h1>
      
      <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
        Book a Transition Call Now →
      </Button>
      </div>
    </section>
  );
}
