"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import GlassSheet from "./glass-sheet";
import Menu from "./menu";
import { Menu as HamburgerMenu } from "lucide-react";
import { useNavigation } from "@/hooks/navigation";

interface GlassSheetProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
    className?: string;
    triggerClass?: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {section, onSetsection} = useNavigation();

    return (
        <div className="flex justify-between items-center sticky top-0 z-50 py-5 px-4 md:px-6 max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold">Virtue</h1>
            <div className=" hidden lg:block">
                <Menu orientation="desktop" section={section} onSetsection={onSetsection}/>
            </div>
            <div className="flex gap-2 items-center">
                <Link href="" className="hidden sm:block">
                <Button
                variant="outline"
                 className="rounded-xl flex gap-2 bg-white text-black">
                Join Now
                </Button>
                </Link>
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
            </div>
        </div>
    );
};

export default Navbar;