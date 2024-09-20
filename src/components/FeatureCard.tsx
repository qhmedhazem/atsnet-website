"use client";

import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const FeatureCard: FC<Props> = ({ title, description, children, ...props }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-start gap-6 px-6 py-8 bg-accent rounded-lg shadow-md",
        props.className
      )}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-md font-light">{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default FeatureCard;
