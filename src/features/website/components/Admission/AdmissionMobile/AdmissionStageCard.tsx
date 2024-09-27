import { FC, HTMLAttributes } from "react";
import { ScrollCardProps } from "@/components/ScrollSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface StageImageProps {
  imageSrc: string;
  imageAlt: string;
}

const StageImage: FC<StageImageProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex justify-center w-full h-full">
      <Image
        width={500}
        height={500}
        src={imageSrc}
        alt={imageAlt}
        className="rounded-lg"
      />
    </div>
  );
};

export interface AdmissionStageProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  step?: number;
}

const AdmissionStageCard: FC<AdmissionStageProps> = ({
  imageSrc,
  imageAlt,

  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full flex flex-col items-center justify-between gap-8",
        className
      )}
    >
      {children}
      <StageImage imageSrc={imageSrc} imageAlt={imageAlt} />
    </div>
  );
};

export default AdmissionStageCard;
