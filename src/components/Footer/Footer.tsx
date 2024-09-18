import React from "react";
import Brand from "../Brand";
import FooterLinksList from "./FooterLinksList";
import { Separator } from "../ui/Separator";
import { getA7medInstagram, getMohamedInstagram } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-4 lg:px-24 border-t border-accent">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between py-8">
        <div className="max-w-lg flex flex-col items-start gap-2">
          <Brand />
          <p className="text-primary/50">
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-24">
          <FooterLinksList
            title="Social Media"
            links={[{ title: "Instagram", href: "" }]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <Separator />
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between text-primary/70">
          <p>© 2024 ATSNET. All rights reserved</p>
          <p>
            Made with ❤️ by <Link href={getA7medInstagram()}>Ahmed</Link>, and{" "}
            <Link href={getMohamedInstagram()}>Mohamed</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
