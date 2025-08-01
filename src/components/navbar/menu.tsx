"use client";

import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

interface MenuProps {
  orientation: "desktop" | "mobile";
  section: string;
  onSetsection: (section: string) => void;
}

const sections = [
  // { id: "home", name: "Home" },
  // { id: "features", name: "Features" },
  // { id: "faq", name: "FAQ" },
  // { id: "pricing", name: "Pricing" },
];

const Menu = ({ orientation, section, onSetsection }: MenuProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSetsection(id);
    }
  };

  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-themeBlack bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl text-themeTextWhite border-none">
          <CardContent className="p-0 flex gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "block py-2 px-4 text-sm font-medium text-themeTextWhite hover:text-themeTextWhite",
                  section.id === section.id,
                )}
              >
                {section.name}
              </button>
            ))}
          </CardContent>
        </Card>
      );
    case "mobile":
      return (
        <div className="flex flex-col mt-10">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "block py-2 px-4 text-sm font-medium text-gray-700 hover:text-themeTextWhite",
                section.id === section.id,
              )}
            >
              {section.name}
            </button>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default Menu;