"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import BackdropGradient from "../ui/backdropGradient";
import { LampComponent } from "../ui/lamp";

const Message = () => {
    const word = "Freedom isn’t earned through burnout—it’s built with intention. At Virtue, we’ll show you how to create smart income streams that generate revenue around the clock, giving you the power to earn while you rest. You'll discover proven methods to grow without stress, scale without hiring a big team, and reclaim your time by building systems that work for you—not the other way around. It's time to earn more, work less, and live on your terms.";

    return (
    <section className="relative w-full py-24 overflow-hidden h-full ">
        <LampComponent />
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
                <TextGenerateEffect
                    words={word}
                    className="text-xs md:text-xs font-normal mb-6 leading-tight text-left text-gray-400"
                    duration={1}
                />
                <p className="mt-4 text-sm md:text-base text-left text-gray-500 font-semibold">
                    – Josh, CEO
                </p>
            </div>
        </section>
    );
};

export default Message;
