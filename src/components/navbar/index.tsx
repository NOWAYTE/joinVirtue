"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import GlassSheet from "./glass-sheet";
import Menu from "./menu";
import { Menu as HamburgerMenu, BookOpen } from "lucide-react";
import { useNavigation } from "@/hooks/navigation";
import { QuestionnaireModal } from "../lead-capture";

interface GlassSheetProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
    className?: string;
    triggerClass?: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Navbar = () => {
    const {section, onSetsection} = useNavigation();
    const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

    const openQuestionnaire = () => {
        setIsQuestionnaireOpen(true);
    };

    return (
        <>
            <div className="flex justify-between items-center sticky top-0 z-50 py-5 px-4 md:px-6 max-w-screen-xl mx-auto">
                <h1 className="text-2xl font-bold">Virtue</h1>
                <div className="hidden lg:block">
                    <Menu orientation="desktop" section={section} onSetsection={onSetsection}/>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        onClick={openQuestionnaire}
                        variant="outline"
                        className="rounded-xl flex items-center gap-2 bg-white text-black hover:bg-gray-100 cursor-pointer"
                    >
                        <BookOpen className="h-4 w-4" />
                        <span>Get Free Guide</span>
                    </Button>
                    {/* Mobile menu button - commented out
                    <GlassSheet
                        triggerClass="lg:hidden"
                        open={isMenuOpen}
                        onOpenChange={setIsMenuOpen}
                        trigger={
                            <Button
                                variant="outline"
                                className="rounded-xl flex gap-2 p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <HamburgerMenu className="h-5 w-5" />
                            </Button>
                        }
                    >
                        <div className="p-4">
                            <Menu orientation="mobile" section={section} onSetsection={onSetsection} />
                        </div>
                    </GlassSheet>
                    */}
                </div>
            </div>

            {/* Questionnaire Modal */}
            <QuestionnaireModal 
                isOpen={isQuestionnaireOpen}
                onClose={() => setIsQuestionnaireOpen(false)}
                title="Get Your Free Guide"
                description="Complete this quick questionnaire to receive your free guide"
            />
        </>
    );
};

export default Navbar;