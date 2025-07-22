import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center sticky top-0 z-50 py-5 px-4 md:px-6">
            <h1 className="text-2xl font-bold">joinVirtue</h1>
            <div className=" hidden lg:block">
                {/* <Menu orientation="desktop" /> */}
            </div>
            <div className="flex gap-2 items-center">
                <Link href="" className="hidden sm:block">
                Buy Now
                </Link>
            </div>
        </div>
    );
};