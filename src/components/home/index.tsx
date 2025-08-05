import CallToAction from "./call-to-action";
import DashBoardSnippet from "./dash-board-snippet";
import NavTestimonials from "@/components/testimonials/nav-testimonials";

interface HomeProps {
  onCtaClick: () => void;
}

const Home = ({ onCtaClick }: HomeProps) => {
    return (
        <div className="w-full relative">
            <div className="relative z-0">
                <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-10">
                    <div className="mb-12">
                        <NavTestimonials />
                    </div>
                    <CallToAction onCtaClick={onCtaClick} />
                    <DashBoardSnippet />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;