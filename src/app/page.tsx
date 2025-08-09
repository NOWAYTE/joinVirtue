"use client";

import React, { useState } from 'react';
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
import BuilderStruggles from "@/components/features/builder";
import CurriculumSection from '@/components/curriculum/curr';
import VideoTestimonials from '@/components/testimonials/video';
import FounderSection from '@/components/founder/founderSection';
import { QuestionnaireModal, FreeResourceSection, ExitIntentPopup } from '@/components/lead-capture';
import { WebinarBanner } from "@/components/webinar/webinar-banner";


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
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [questionnaireSource, setQuestionnaireSource] = useState('');

  const openQuestionnaire = (source: string) => {
    setQuestionnaireSource(source);
    setIsQuestionnaireOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Lead Capture Components */}
      <QuestionnaireModal 
        isOpen={isQuestionnaireOpen}
        onClose={() => setIsQuestionnaireOpen(false)}
        title={questionnaireSource === 'hero' 
          ? "Find Out If This Is Right For You" 
          : questionnaireSource === 'founder'
          ? "Let's See If We're a Good Fit"
          : "Let's Find Your Perfect Fit"}
        description={questionnaireSource === 'hero' 
          ? "Answer a few questions to get personalized recommendations for your online business journey."
          : questionnaireSource === 'founder'
          ? "I'd love to help you succeed. Let me understand your goals better."
          : "Answer a few questions to help us personalize your experience."}
      />
      
      <ExitIntentPopup />
      
      {/* Webinar Banner - Only on homepage */}
      <WebinarBanner />
      
      {/* Navbar */}
      <header className="mt-10">
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
          <Home onCtaClick={() => openQuestionnaire('hero')} />
        </motion.div>

        <motion.div
          id="lamp"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.2)}
        >
          {/* <LampComponent /> */}
          <BuilderStruggles />
        </motion.div>

        <motion.div
          id="features"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.3)}
        >
        <CurriculumSection />
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
          <FounderSection onCtaClick={() => openQuestionnaire('founder')} />
        </motion.div>

        {/* <motion.div
          id="questionnaire"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.75)}
          className="pt-8"
        >
          <Questionnaire />
        </motion.div> */}

        <motion.div
          id="curriculum"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.4)}
        >
          <Curriculum />
        </motion.div>

        {/* <motion.div
          id="pricing"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.8)}
        >
          <PricingSection onCtaClick={() => openQuestionnaire('pricing')} />
        </motion.div> */}
        
        {/* Free Resource Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant(0.9)}
        >
          <FreeResourceSection />
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
