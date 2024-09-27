"use client";

import Brand from "../Brand";
import { NavbarMenu } from "./NavbarMenu";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/use-media-query";
import useScroll from "@/hooks/use-scroll";

const Navbar = () => {
  const isSmallMobile = useMediaQuery("(max-width: 450px)");
  const isScrolled = useScroll();

  return (
    <div
      className={cn(
        "z-20 max-w-full fixed w-screen transition-colors h-24 duration-300 text-primary-foreground",
        isScrolled ? "bg-background text-primary" : ""
      )}
    >
      <div className="py-2 lg:py-3 px-6 md:px-16 flex justify-between items-center w-full h-full gap-16">
        <Brand withDescription={isSmallMobile ? false : true} />
        <NavbarMenu isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default Navbar;
