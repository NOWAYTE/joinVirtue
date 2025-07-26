"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Play, Pause } from "lucide-react";

// Dynamically import ReactPlayer to avoid SSR errors
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const DashBoardSnippet = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => setIsPlaying((prev) => !prev);

  return (
    <div className="relative w-full pt-16 md:pt-20">
      {/* Radial Background Blur */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[60%] md:w-[80%] h-[60%] md:h-[80%] rounded-full radial--blur opacity-30 bg-themeWhite" />
      </div>

      {/* Video Container */}
      <div className="relative w-full max-w-2xl md:max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border-[5px] border-gray-900">
        {/* ReactPlayer */}
        <video>
            <source src="https://www.youtube.com/watch?v=RNqDkF17ogY" type="video/mp4" />
        </video>


        {/* PLAY Overlay */}
        {!isPlaying && (
          <div
            onClick={togglePlayback}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-black" />
            </div>
          </div>
        )}

        {/* PAUSE Button */}
        {isPlaying && (
          <div
            onClick={togglePlayback}
            className="absolute inset-0 flex items-start justify-end p-4 cursor-pointer"
          >
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-md">
                <Pause className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardSnippet;
