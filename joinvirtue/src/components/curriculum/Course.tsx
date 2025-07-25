"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface CourseCurriculumProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
  className?: string;
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  title,
  subtitle,
  faqs,
  className = "",
}) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section
      className={`py-16 px-4 md:px-8 text-white ${className} max-w-7xl mx-auto`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-2xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-base text-gray-400 mt-2">{subtitle}</p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-800 pb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left group"
            >
              <h3 className="text-base font-medium text-white group-hover:text-gray-300 transition">
                {faq.question}
              </h3>
              <X
                className={`w-5 h-5 text-blue-400 transform transition-transform duration-300 ${
                  expandedFAQ === index ? "rotate-0" : "rotate-45"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedFAQ === index
                  ? "max-h-96 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-400 leading-relaxed pr-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCurriculum;
