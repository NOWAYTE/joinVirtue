import CallToAction from "./call-to-action";
import DashBoardSnippet from "./dash-board-snippet";


const Home = () => {
    return (
        <div className="w-full">
            <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-10">
                <CallToAction />
                <DashBoardSnippet />
            </div>
        </div>
    );
};

export default Home;