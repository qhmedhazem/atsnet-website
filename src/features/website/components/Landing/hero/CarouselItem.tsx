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
      />
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/70">
        <div className="space-y-8 max-w-sm mx-8 mb-24 md:max-w-3xl md:mx-12 md:mb-32 lg:mx-28 lg:mb-32">
          <div className="space-y-2 md:space-y-4">
            <Typography
              variant="h1"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl"
            >
              {title}
            </Typography>
            <Typography variant="lead" color="white" className="opacity-80">
              {description}
            </Typography>
          </div>
          <div className="flex gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
