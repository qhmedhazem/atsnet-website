"use client";

import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Brand from "../Brand";
import { NavbarMenu } from "./NavbarMenu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 10 && !isScrolled) {
      setIsScrolled(true);
    } else if (value < 10 && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <div
      className={cn(
        "z-20 max-w-full fixed w-screen transition-colors h-24 duration-300 text-primary-foreground",
        isScrolled ? "bg-background text-primary" : ""
      )}
    >
      <div className="py-2 lg:py-3 px-6 md:px-16 flex justify-between items-center w-full h-full">
        <Brand />
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
