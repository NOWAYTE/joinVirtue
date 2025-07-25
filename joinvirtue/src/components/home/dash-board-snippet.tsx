"use client";

import ReactPlayer from "react-player";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

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
            <div className="relative w-full max-w-2xl md:max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border-5 border-gray-900">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=RNqDkF17ogY" // Replace with your actual video
                    playing={isPlaying}
                    controls={false}
                    width="100%"
                    height="100%"
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    config={{
                        youtube: {
                            playerVars: { modestbranding: 1, rel: 0 },
                        },
                    }}
                />

                {/* Play Overlay */}
                {!isPlaying && (
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all"
                        onClick={togglePlayback}
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-black ml-0.5" />
                        </div>
                    </div>
                )}

                {/* Pause Button (Top-right on hover) */}
                {isPlaying && (
                    <div
                        className="absolute inset-0 cursor-pointer"
                        onClick={togglePlayback}
                    >
                        <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
