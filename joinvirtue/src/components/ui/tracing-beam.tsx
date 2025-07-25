"use client";

import React, { useEffect, useRef, useState } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface TracingBeamProps {
  items: TimelineItem[];
  className?: string;
}

const TracingBeam: React.FC<TracingBeamProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [beamHeight, setBeamHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        -timelineRect.top / (timelineRect.height - window.innerHeight)
      );
      const clampedProgress = Math.min(1, progress);

      setBeamHeight(clampedProgress * 100);

      const newIndex = Math.min(
        items.length - 1,
        Math.floor(clampedProgress * items.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <div className={className || "min-h-screen text-white overflow-hidden items-center justify-center mx-auto"}>
      {/* Timeline */}
      <div ref={timelineRef} className="relative py-32">
        {/* Vertical Beam */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800 z-0">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 via-orange-400 to-transparent transition-all duration-500 ease-out"
            style={{ height: `${beamHeight}%` }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 animate-pulse" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 z-10">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            const visible = activeIndex >= index;

            return (
              <div
                key={index}
                className={`relative mb-36 flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-20 md:gap-50`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div
                    className={`transition-all duration-700 ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-20 translate-y-10"
                    }`}
                  >
                    <div className="text-orange-500 text-lg font-semibold tracking-wide">
                      {item.year}
                    </div>
                    <h3 className="text-2xl md:text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xm leading-relaxed max-w-md">
                      {item.description}
                    </p>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`w-full md:w-1/2 transition-all duration-700 ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  {/* <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div> */}
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 top-1/2 -translate-y-1/2">
                  <div
                    className={`w-5 h-5 rounded-full border-4 transition-all duration-500 ${
                      visible
                        ? "bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/50 scale-125"
                        : "bg-gray-800 border-gray-600"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TracingBeam;

