import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import GradientText from "./gradient-text";
import { ArrowUpRight, Plus } from "lucide-react";

const CallToAction = () => {
    return (
        <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0 mt-15">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <div className="flex items-center gap-1">
                <span>The #1 digital-blueprint</span>
                <span className="text-gray-400 text-bold text-2xl">★★★★★</span>
                <span className="text-muted-foreground">Trusted by over 1250 people</span>
              </div>
            </div>
            <GradientText
            element="H1"
             className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[70px] leading-tight font-semibold md:text-center"
            >
              Start Building <br/> Your $10K/Month System
            </GradientText>

            <div>
  <p className="text-sm md:text-center text-left text-muted-foreground">
    Learn how thousands
    <br className="md:hidden" />
    are building smart income streams using our proven frameworks
    <br className="hidden md:block" />
    no fluff, no gatekeeping, just results.
  </p>
</div>

            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md pt-8">
                <div className="max-w-4xl mx-auto">
                  <Button
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ArrowUpRight className="w-4 h-4 mr-2" />
          Get Instant Access - $59
        </Button>

        <p className="text-gray-400 text-xs mt-1 text-center">Limited-time offer: Price increases soon</p>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;