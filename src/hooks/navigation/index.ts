"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const useNavigation = () => {
    const pathName = usePathname();
    const [section, setSection] = useState(pathName);
    

    const onSetsection = (section: string) => {
        setSection(section);
    };
    
    return {section, onSetsection};
};