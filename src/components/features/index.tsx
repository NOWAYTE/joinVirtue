"use client";

import {
  Users,
  Zap,
  Gift,
  BookOpen,
  LockKeyhole,
} from "lucide-react";
import { Button } from "../ui/button";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5 text-white group-hover:text-blue-400 transition" />,
      title: "$10K/Month Playbooks",
      description:
        "Step-by-step monetization paths including UGC, SaaS, YouTube, and more to help you scale faster.",
    },
    {
      icon: <Zap className="w-5 h-5 text-white group-hover:text-blue-400 transition" />,
      title: "AI-Powered Tools",
      description:
        "Automated scripts, message templates, and viral growth hacks built for speed and results.",
    },
    {
      icon: <Gift className="w-5 h-5 text-white group-hover:text-blue-400 transition" />,
      title: "Free Premium Modules",
      description:
        "Unlock exclusive builder training lessons before anyone else. No fluff, just results.",
    },
    {
      icon: <Users className="w-5 h-5 text-white group-hover:text-blue-400 transition" />,
      title: "Private Builder Community",
      description:
        "Join thousands inside the private Discord. Collaborate, learn, and grow together.",
    },
    {
      icon: <LockKeyhole className="w-5 h-5 text-white group-hover:text-blue-400 transition" />,
      title: "Hidden Upgrades + Drops",
      description:
        "Earn unlockables and rewards as you take action inside. Momentum meets motivation.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
          Included In Your Membership
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Your Builder Toolkit
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="group transition duration-200"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-base md:text-lg font-medium text-white mb-2">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
          Book a Transition Call Now →
        </Button>
      </div>
    </section>
  );
};

export default Features;