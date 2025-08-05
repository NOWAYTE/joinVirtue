import { useState, useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

type QuestionnaireProps = {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
};

export default function Questionnaire({ isOpen, onClose, onComplete }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    goal: '',
    level: '',
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle form submission
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Call onComplete after a short delay to show the success message
        if (onComplete) {
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      }, 1500);
    }
  };

  const steps = [
    {
      question: "What's your main goal with English?",
      type: 'radio',
      name: 'goal',
      options: [
        'Career advancement',
        'Travel & communication',
        'Academic studies',
        'Personal growth'
      ]
    },
    {
      question: 'How would you rate your current English level?',
      type: 'radio',
      name: 'level',
      options: [
        'Beginner',
        'Intermediate',
        'Advanced',
        'Fluent but want to improve'
      ]
    },
    {
      question: 'Where should we send your personalized learning plan?',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email address'
    },
    {
      question: 'And your name?',
      type: 'text',
      name: 'name',
      placeholder: 'Your name'
    }
  ];

  const currentQuestion = steps[currentStep];

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div 
          className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-6 sm:p-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isSubmitted 
                  ? "Thank You! 🎉" 
                  : "Let's Find Your Perfect English Learning Path"}
              </h2>
              <p className="text-gray-600">
                {isSubmitted 
                  ? "We've sent your personalized learning plan to your email. Check your inbox!"
                  : `Step ${currentStep + 1} of ${steps.length}`}
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    {currentQuestion.question}
                  </h3>

                  {currentQuestion.type === 'radio' ? (
                    <div className="space-y-4">
                      {currentQuestion.options?.map((option, i) => (
                        <label key={i} className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name={currentQuestion.name}
                            value={option}
                            checked={formData[currentQuestion.name as keyof typeof formData] === option}
                            onChange={handleChange}
                            className="h-5 w-5 text-orange-500 focus:ring-orange-400"
                            required
                          />
                          <span className="ml-3 text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-1">
                      <input
                        type={currentQuestion.type}
                        name={currentQuestion.name}
                        value={formData[currentQuestion.name as keyof typeof formData] as string}
                        onChange={handleChange}
                        placeholder={currentQuestion.placeholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-6 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        {currentStep === steps.length - 1 ? 'Get My Plan' : 'Continue'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-gray-600 mb-6">
                  We've also sent you a special welcome gift! Check your email to get started.
                </p>
                <a
                  href="#pricing"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600"
                >
                  View Pricing Plans
                </a>
              </div>
            )}

            <p className="mt-8 text-center text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
