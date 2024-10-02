"use client";

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  title?: string;
  items?: string[];
  image: ReactNode;
  reverse?: boolean;
}

interface ImageContainerProps {
  image: ReactNode;
}

const AlternatingSectionImageContainer: FC<ImageContainerProps> = ({
  image,
  ...props
}) => {
  return (
    <div className="relative w-full lg:w-1/2 text-center flex justify-center">
      {image}
      {/* <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to right bottom, rgb(99 184 233 / 20%) 0%, rgb(4 4 5 / 20%) 100%)",
        }}
      /> */}
    </div>
  );
};

const AlternatingSection: FC<Props> = ({
  subtitle,
  title,
  items,
  image,
  reverse,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      {...props}
      className={cn(
        `flex flex-col gap-8 ${
          reverse ? "flex-col" : "flex-col-reverse"
        } lg:flex-row lg:space-x-8`,
        props.className
      )}
    >
      {!reverse && <AlternatingSectionImageContainer image={image} />}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="space-y-2">
          {subtitle && (
            <h3 className="text-sm font-bold uppercase text-blue-500 tracking-wider">
              {subtitle}
            </h3>
          )}
          {title && <h2 className="text-4xl font-bold">{title}</h2>}
        </div>
        {children}
        {items && (
          <ul className="list-disc pl-5 space-y-2">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </motion.div>
      {reverse && <AlternatingSectionImageContainer image={image} />}
    </section>
  );
};

export default AlternatingSection;
