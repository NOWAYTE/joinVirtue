"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Message from "../features/message";
import { SparklesCore } from "./sparkles";
import { TextGenerateEffect } from "./text-generate-effect";

export function LampComponent() {
    const word = "Freedom isn’t earned through burnout—it’s built with intention. At Virtue, we’ll show you how to create smart income streams that generate revenue around the clock, giving you the power to earn while you rest. You'll discover proven methods to grow without stress, scale without hiring a big team, and reclaim your time by building systems that work for you—not the other way around. It's time to earn more, work less, and live on your terms.";
    return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative inset-0 flex items-center justify-center"
      >
            <div className="relative z-0 max-w-5xl mx-auto">
                <TextGenerateEffect
                    words={word}
                    className="text-xs md:text-sm font-normal mb-6 leading-tight text-left text-themeTextGray"
                    duration={1}
                />
                <p className="mt-4 text-xs md:text-sm text-left text-themeTextGray font-semibold">
                    – Josh, CEO
                </p>
            </div>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size and set `isMobile` to true if width is below 640px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener to monitor screen resizing
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "mt-20 pt-20 relative flex min-h-[800px] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        {/* First Conic Gradient Animation */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{
            opacity: 1,
            width: isMobile ? "20rem" : "30rem", // 20rem for mobile, 30rem for desktop
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] md:w-[30rem] sm:w-[10rem] bg-gradient-conic from-neutral-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#04060A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#04060A] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
          
        {/* Second Conic Gradient Animation */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{
            opacity: 1,
            width: isMobile ? "20rem" : "30rem", // 20rem for mobile, 30rem for desktop
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] md:w-[30rem] sm:w-[10rem] bg-gradient-conic from-transparent via-transparent to-neutral-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#04060A] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[#04060A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#04060A] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#04060A] opacity-50 blur-3xl"></div>

        {/* Third Gradient Blur Animation */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-700/50 blur-2xl"
        ></motion.div>
        {/* Horizontal Line Animation */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{
            width: isMobile ? "20rem" : "30rem", // 20rem for mobile, 30rem for desktop
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400/50 "
        ></motion.div>

        <div className="w-[20rem] sm:w-[40rem] h-40 relative">
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.6}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#04060A]"></div>
      </div>

      <div className="relative z-0 flex -translate-y-59 flex-col items-center px-5 ">
        {children}
      </div>
    </div>
  );
};