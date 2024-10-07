import { FC, HTMLAttributes, ReactElement } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactElement;
}

export const CarouselItem: FC<Props> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/70">
        <div className="absolute text-center space-y-4 max-w-md md:max-w-lg lg:max-w-5xl p-8 m-[0_auto]">
          <Typography
            variant="h1"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="opacity-80 text-base md:text-lg lg:text-xl"
          >
            {description}
          </Typography>
          <div className="flex justify-center items-center gap-4 mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
