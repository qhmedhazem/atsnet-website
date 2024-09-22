import { FC } from "react";
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
    <div className="w-full h-full">
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

interface Props extends ScrollCardProps<HTMLDivElement> {}

const AdmissionScrollStageCard: FC<Props> = ({
  isFirst,
  isLast,
  isReversed,

  imageSrc,
  imageAlt,

  step,
  isActivated,
  stepRef,

  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("w-full flex justify-between gap-14 relative", className)}
    >
      {isReversed && children}
      {!isReversed && <StageImage imageSrc={imageSrc} imageAlt={imageAlt} />}
      <div
        className={cn(
          "absolute w-full h-full flex justify-center",
          isFirst ? "items-start" : "",
          isLast ? "items-end" : "",
          !isFirst && !isLast ? "items-center" : ""
        )}
      >
        <motion.span
          ref={stepRef}
          className={cn(
            "p-4 w-10 h-10 rounded-full flex items-center justify-center text-center text-white font-bold text-xl transition-colors duration-300",
            isActivated ? "bg-blue-500" : "bg-gray-500"
          )}
          initial={{
            scale: 1,
          }}
          animate={
            isActivated
              ? {
                  scale: [1, 1.2, 0.9, 1], // Bouncing effect
                  transition: {
                    duration: 0.6, // Duration for the entire animation
                    ease: "easeInOut", // Smooth transition
                  },
                }
              : {}
          }
        >
          {step}
        </motion.span>
      </div>
      {!isReversed && children}
      {isReversed && <StageImage imageSrc={imageSrc} imageAlt={imageAlt} />}
    </div>
  );
};

export default AdmissionScrollStageCard;
