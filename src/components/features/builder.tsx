import { AlertTriangle, Clock, HelpCircle, Frown, Lightbulb, Calendar } from 'lucide-react';
import CtaSection from './cta-section';

const BuilderStruggles = () => {
    const frustrations = [
        {
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    text: "You're testing tools instead of building with a proven system.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-orange-500" />,
    text: "You’ve got ideas—but they stay in Notion, not in motion.",
  },
  {
    icon: <Frown className="w-6 h-6 text-orange-500" />,
    text: "You're stuck watching others scale while you hesitate to start.",
  },
  {
    icon: <Frown className="w-6 h-6 text-orange-500" />,
    text: "You know AI is powerful—but aren’t sure how to apply it profitably.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    text: "Your offers lack leverage because there’s no automation behind them.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-orange-500" />,
    text: "You’re working hard, not smart—because there's no system in place.",
  },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <p className="text-gray-500 text-lg mb-4">Is this you?</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Does Your Experience with Feel<br />
                        More <span className="text-orange-500">Frustrating Than Futuristic ?</span>
                    </h1>

                    {/* Handwritten annotation */}
                    <div className="absolute top-0 right-0 md:right-10 transform rotate-12 hidden md:block">
                        <div className="handwritten text-gray-600 text-xm">
                            SOUNDS FAMILIAR?
                        </div>
                        <svg className="w-24 h-16 text-gray-600 ml-10 -mt-2" viewBox="0 0 120 80" fill="none" preserveAspectRatio="none">
                            <path
                                d="M10,60 
                     C20,40 40,20 60,40 
                     C80,60 90,30 110,20"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="2,4"
                            />
                        </svg>
                    </div>
                </div>

                {/* Frustrations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {frustrations.map((frustration, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                        >
                            <div className="flex justify-center mb-6">
                                {frustration.icon}
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                {frustration.text}
                            </p>
                        </div>
                    ))}
                </div>
                <CtaSection />
            </div>
        </div>
    );
}

export default BuilderStruggles;