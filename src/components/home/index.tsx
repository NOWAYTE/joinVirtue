import CallToAction from "./call-to-action";
import DashBoardSnippet from "./dash-board-snippet";
import NavTestimonials from "@/components/testimonials/nav-testimonials";

const Home = () => {
    return (
        <div className="w-full">
            <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-10">
                <div className="mb-12">
                    <NavTestimonials />
                </div>
                <CallToAction />
                <DashBoardSnippet />
            </div>
        </div>
    );
};

export default Home;