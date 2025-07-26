"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Founder from "@/components/founder";
import Process from "@/components/process";
import { LampComponent } from "@/components/ui/lamp";
import Curriculum from "@/components/curriculum";
import PricingSection from "@/components/pricing";
import Footer from "@/components/footer";
import { motion, Variants } from "framer-motion";

const fadeInVariant = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 space-y-24">
        <motion.div
          id="home"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.1)}
        >
          <Home />
        </motion.div>

        <motion.div
          id="lamp"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.2)}
        >
          <LampComponent />
        </motion.div>

        <motion.div
          id="features"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.3)}
        >
          <Features />
        </motion.div>

        <motion.div
          id="process"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.5)}
        >
          <Process />
        </motion.div>

        <motion.div
          id="testimonials"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.6)}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          id="founder"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.7)}
        >
          <Founder />
        </motion.div>

         <motion.div
          id="curriculum"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.4)}
        >
          <Curriculum />
        </motion.div>

        <motion.div
          id="pricing"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.8)}
        >
          <PricingSection />
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
