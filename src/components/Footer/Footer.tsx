"use client";

import React, { useEffect, useState } from "react";
import Brand from "../Brand";
import FooterLinksList from "./FooterLinksList";
import { Separator } from "../ui/Separator";
import { getA7medInstagram, getMohamedInstagram } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  const [isLayoutFound, setIsLayoutFound] = useState(true);

  useEffect(() => {
    const checkForLayout = () => {
      const layoutElement = document.getElementById("pageLayout");
      setIsLayoutFound(!!layoutElement);
    };

    checkForLayout();
    const observer = new MutationObserver(() => {
      checkForLayout();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    isLayoutFound && (
      <footer className="bg-white w-full  border-t border-accent">
        <div className="container">
          <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between py-8">
            <div className="max-w-lg flex flex-col items-start gap-2">
              <Brand />
              <p className="text-primary/50 text-md pt-5">
                El-Dabaa Nuclear School is a premier institution dedicated to
                educating and training the next generation of nuclear engineers
                and scientists.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-24">
              <FooterLinksList
                title="Site Map"
                links={[
                  { title: "Home", href: "/" },
                  { title: "About", href: "/about" },
                  { title: "Campus", href: "/campus" },
                  { title: "Academics", href: "/academics" },
                  { title: "Contact", href: "/contact" },
                ]}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-24">
              <FooterLinksList
                title="Keep In Touch"
                links={[
                  { title: "Facebook", href: "" },
                  { title: "Twitter", href: "" },
                  { title: "+20 122 168 1400", href: "tel:+201221681400" },
                ]}
              />
            </div>
          </div>

          <div className="text-sm flex flex-col gap-4 py-4">
            <Separator />
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between text-primary/70">
              <p>© 2024 ATSNET. All rights reserved</p>
              <p>
                Developed by <Link href={getA7medInstagram()}>Ahmed</Link>, and{" "}
                <Link href={getMohamedInstagram()}>Mohamed</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
