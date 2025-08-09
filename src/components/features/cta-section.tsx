import { Button } from "../ui/button";

export default function CtaSection() {
    return (
        <section className="relative rounded-lg py-24 px-4 overflow-hidden mt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center">
                    <h2 className="text-2xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Ready to Transform Your Life?
                    </h2>
                    
                    <p className="text-base md:text-lg lg:text-lg text-gray-900 mb-8 max-w-xl mx-auto leading-relaxed">
                        No fluff. No gatekeeping. Just a proven system that works — and you're part of it from Day 1.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
                        <Button 
                            size="lg"
                            className="bg-blue-500 text-white hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 transform text-base font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
                        >
                            Book Your Transition Call Now →
                        </Button>
                    </div>
                    
                    <p className="text-base md:text-lg lg:text-lg text-gray-900 mt-8">
                        Join 1,000+ builders who've already transformed their workflow
                    </p>
                </div>
            </div>
            
            {/* Bottom wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,50,583,67.23c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="0.1" fill="#fff"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,141.56,70.22,6.8,11.36,11.67,24.1,11.11,40.71V0Z" opacity="0.2" fill="#fff"></path>
                </svg>
            </div>
        </section>
    );
}