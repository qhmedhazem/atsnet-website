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

interface Props {
  isScrolled: boolean;
}

export default function DesktopNavMenu(props: Props) {
  return (
    <NavigationMenu className="text-center hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end items-center rounded-md p-3 no-underline outline-none transition-all focus:shadow-md hover:bg-accent focus:bg-accent"
                    href="/about"
                  >
                    <Image
                      width={108}
                      height={108}
                      src="/brand.png"
                      alt="المدرسة الفنية المتقدمة لتكنولوجيا الطاقة النووية - ATSNEE"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      About School
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      An introduction to the school’s mission, history, and
                      dedication to training professionals for Egypt&apos;s
                      peaceful nuclear energy project.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/academics" title="Academics">
                Overview of the five-year curriculum, practical training, and
                specialized labs in nuclear technology and engineering.
              </ListItem>
              <ListItem href="/nuclearpowerplant" title="Nuclear Power Plant">
                Details the school’s connection to Egypt’s nuclear plant and the
                career paths available for graduates.
              </ListItem>
              <ListItem href="/campus" title="Campus">
                A look at the school&apos;s state-of-the-art campus, including
                classrooms, labs, dormitories, and student amenities.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/announcements" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Announcements
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/admission" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Admission
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/extracurriculars" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Extracurriculars
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
