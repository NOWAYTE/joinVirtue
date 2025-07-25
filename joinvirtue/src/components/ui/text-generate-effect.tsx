"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { MaskContainer } from "./svg-mask-effect";


export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          // Calculate the center position
          const centerIdx = Math.floor(wordsArray.length / 2);
          const isCenterWord = idx === centerIdx;
          
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0",
                isCenterWord ? "text-themeWhite" : "text-themeTextGray"
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-4 p-20">
        <div className="text-base md:text-lg lg:text-2xl font-normal mb-6 leading-tight text-left text-gray-400 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
