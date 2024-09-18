import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
}

const LandingSection: FC<Props> = ({
  children,
  className,
  title,
  ...props
}) => {
  return (
    <section
      className={cn("w-full max-w-[72rem] m-[0_auto] py-24 px-4", className)}
      {...props}
    >
      {title && (
        <h2 className="text-center font-bold uppercase tracking-[1rem]">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default LandingSection;
