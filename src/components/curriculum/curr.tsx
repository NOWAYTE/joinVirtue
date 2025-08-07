import React, { useState } from 'react';
import { Plus, X, BarChart3, Award, Clock, Infinity, Check, ArrowRight, Sparkles } from 'lucide-react';

const CurriculumSection = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };
  const modules = [
    {
      title: "The Generative AI Landscape",
      week: "Week 01",
      description: "Dive into the world of generative AI and understand its capabilities and limitations.",
      topics: [
        "Introduction to AI and Machine Learning",
        "Understanding Generative Models",
        "Current State of AI Technology",
        "Ethical Considerations in AI"
      ]
    },
    {
      title: "The Anatomy of a Perfect Prompt",
      week: "Week 02",
      description: "Master the art of crafting effective prompts for AI models.",
      topics: [
        "Prompt Structure and Components",
        "Using Context and Examples",
        "Handling Ambiguity",
        "Prompt Iteration Strategies"
      ]
    },
    {
      title: "Advanced Prompting Techniques",
      week: "Week 03",
      description: "Take your prompting skills to the next level with advanced techniques.",
      topics: [
        "Chain-of-Thought Prompting",
        "Few-shot Learning",
        "Temperature and Sampling",
        "Handling Complex Queries"
      ]
    },
    {
      title: "AI for Creativity & Content",
      week: "Week 04",
      description: "Leverage AI for creative projects and content generation.",
      topics: [
        "Content Ideation",
        "Writing with AI",
        "Visual Content Generation",
        "Maintaining Brand Voice"
      ]
    },
    {
      title: "AI for Productivity & Workflow",
      week: "Week 05",
      description: "Streamline your workflow with AI-powered tools and automation.",
      topics: [
        "Task Automation",
        "Email and Communication",
        "Data Analysis",
        "Integrating AI into Existing Tools"
      ]
    },
    {
      title: "The Responsible AI Operator",
      week: "Week 06",
      description: "Understand the ethical implications and best practices of AI usage.",
      topics: [
        "Bias and Fairness",
        "Privacy Concerns",
        "Future of AI",
        "Building Trust with AI"
      ]
    }
  ];

  const features = [
    "Instant access to the full 6-week curriculum",
    "All future updates and bonus content included",
    "Weekly live workshops",
    "1 on 1 Mentorship"
  ];

  const courseFeatures = [
    { icon: <BarChart3 className="w-5 h-5" />, text: "Beginner Friendly" },
    { icon: <Award className="w-5 h-5" />, text: "Completion Certificate" },
    { icon: <Clock className="w-5 h-5" />, text: "21 Hours" },
    { icon: <Infinity className="w-5 h-5" />, text: "Full lifetime access" }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-themeTextWhite text-lg mb-4">Curriculum Overview</p>
          <h1 className="text-4xl md:text-5xl font-bold text-themeTextWhite leading-tight">
            Unlock the secret sauce<br />
            behind <span className="text-primary-600">world-class products.</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Course Modules */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:border hover:border-primary-500 ${
                  expandedModule === index ? 'shadow-lg' : 'hover:shadow-md'
                }`}
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleModule(index)}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {module.title}
                    </h3>
                    <p className="text-gray-500 font-medium">
                      {module.week}
                    </p>
                  </div>
                  {expandedModule === index ? (
                    <X className="w-6 h-6 text-primary-500 transition-colors" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 hover:text-primary-500 transition-colors" />
                  )}
                </div>
                
                {/* Expanded Content */}
                {expandedModule === index && (
                  <div className="bg-gray-100 rounded-lg px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 mb-4">{module.description}</p>
                    <h4 className="font-medium text-gray-900 mb-3">Topics Covered:</h4>
                    <ul className="space-y-2 mb-4">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-600 flex items-center">
                      View detailed module <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Enrollment Card */}
          <div className="bg-background rounded-2xl p-8 text-white relative overflow-hidden border border-white/20">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gray-900" />
              </div>
              <span className="text-xs text-gray-300 ml-2">AI</span>
            </div>

            {/* Money back guarantee badge */}
            <div className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              30 day money back guarantee
            </div>

            <h2 className="text-3xl font-bold mb-8">Join Virtue Today</h2>

            {/* Course features grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary-500">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Course overview */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
                A QUICK OVERVIEW OF THE COURSE
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll button */}
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 group mb-6">
              <span>Enroll now for $59</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Webinar section */}
            <div className="bg-background bg-opacity-10 border border-white/20 rounded-lg p-4 text-sm text-white backdrop-blur-sm">
              <h4 className="text-base font-semibold mb-2">🎓 Free Upcoming Webinar</h4>
              <p className="mb-3">Join our live session on <span className="font-semibold text-primary-300">August 10th</span> to get a sneak peek into the curriculum and meet the instructors.</p>
              <a
                href="/webinar"
                className="text-primary-400 hover:underline font-medium"
              >
                Reserve your seat →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;