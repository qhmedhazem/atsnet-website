"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/NavigationMenu";

import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/use-media-query";
import DesktopNavbar from "./Desktop/DesktopNavMenu";
import MobileNavMenu from "./Mobile/MobileNavMenu";

interface Props {
  isScrolled: boolean;
}

export function NavbarMenu({ isScrolled }: Props) {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return isMobile ? (
    <MobileNavMenu isScrolled={isScrolled} />
  ) : (
    <DesktopNavbar isScrolled={isScrolled} />
  );
}
