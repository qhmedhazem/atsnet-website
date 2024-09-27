"use client";

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode, useRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  items?: string[];
  image: ReactNode;
  reverse?: boolean;
}

const AlternatingSection: FC<Props> = ({
  title,
  items,
  image,
  reverse,
  children,
  ...props
}) => (
  <section
    {...props}
    className={cn(
      `flex flex-col gap-8 ${
        reverse ? "flex-col" : "flex-col-reverse"
      } lg:flex-row lg:space-x-8`,
      props.className
    )}
  >
    {!reverse && (
      <div className="w-full lg:w-1/2 text-center flex justify-center">
        {image}
      </div>
    )}
    <div className="w-full lg:w-1/2 space-y-4">
      {title && <h2 className="text-4xl font-bold">{title}</h2>}
      {children}
      {items && (
        <ul className="list-disc pl-5 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
    {reverse && (
      <div className="w-full lg:w-1/2 text-center flex justify-center">
        {image}
      </div>
    )}
  </section>
);

export default AlternatingSection;
