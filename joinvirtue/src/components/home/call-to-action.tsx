import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import GradientText from "./gradient-text";
import { Plus } from "lucide-react";

const CallToAction = () => {
    return (
        <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0 mt-15">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <div className="flex -space-x-2">
      <img src="/path-to/image1.jpg" alt="user" className="w-6 h-6 rounded-full border border-white" />
      <img src="/path-to/image2.jpg" alt="user" className="w-6 h-6 rounded-full border border-white" />
      <img src="/path-to/image3.jpg" alt="user" className="w-6 h-6 rounded-full border border-white" />
      <img src="/path-to/image4.jpg" alt="user" className="w-6 h-6 rounded-full border border-white" />
      <img src="/path-to/image5.jpg" alt="user" className="w-6 h-6 rounded-full border border-white" />
    </div>
    <div className="flex items-center gap-1">
      <span className="text-yellow-400">★★★★★</span>
      <span className="font-medium text-white">5.0</span>
      <span className="text-muted-foreground">· 1.3k Reviews</span>
    </div>
  </div>
            <GradientText
            element="H1"
             className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
            >
              Monetize smarter 
            </GradientText>

            <div>
                <p className="text-sm md:text-center text-left text-muted-foreground">
                JoinVirtue empowers Gen Z creators with AI-driven tools and playbooks
                <br className="md:hidden" />
                to monetize faster, scale smarter,
                <br className="hidden md:block" />
                and build digital ventures without guesswork.
                <br className="md:hidden" />
                Launch, automate, and grow — all in one platform.
                </p>

            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md pt-5">
                <Input placeholder="Enter your email" className="flex items-center justify-center" />

                <Link href="/join" className="w-full sm:w-auto">
                <Button
                variant="outline"
                className="w-full sm:w-auto rounded-xl flex items-center justify-center gap-2 text-base bg-white text-black hover:bg-gray-300 hover:text-black"
    >
        <Plus className="w-4 h-4"/>
      Join <span className="text-xs text-muted-foreground">30k+ members</span>
    </Button>
                </Link>
            </div>


            <div className="pt-2">
                <GradientText element="H2">
                    <span className="text-xs md:text-center text-center text-muted-foreground">
                        Learn more about joinVirtue →
                    </span>
                </GradientText>
            </div>
        </div>
    );
};

export default CallToAction;