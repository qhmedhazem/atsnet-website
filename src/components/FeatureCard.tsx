"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { AspectRatio } from "./ui/AspectRatio";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  Icon: LucideIcon;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
  // image: ;
}

const FeatureCard: FC<Props> = ({
  Icon,
  subtitle,
  title,
  description,
  image,
  isReversed = false,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className={cn(
        "flex w-full justify-between gap-12 px-8",
        isReversed ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      )}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.4,
        }}
        className="flex flex-col gap-4 items-start max-w-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex bg-muted w-auto p-3 rounded-full">
            <Icon size={24} />
          </div>
          <h3 className="text-sm font-bold tracking-[0.1rem]">{subtitle}</h3>
        </div>

        <div className="text-lg mt-4">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="mt-4 leading-8">{description}</p>
        </div>
      </motion.div>
      <div className="flex justify-center items-center min-w-[16rem] min-h-[16rem] md:min-w-[24rem] md:min-h-[24rem] max-w-96 max-h-96 lg:w-96 lg:h-96 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <AspectRatio
          ratio={1 / 1}
          className=" max-w-full bg-primary rounded-xl overflow-hidden"
        >
          <Image
            src={image}
            alt={description}
            className="w-full h-full object-cover origin-center"
            width={350}
            height={350}
          />
        </AspectRatio>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
