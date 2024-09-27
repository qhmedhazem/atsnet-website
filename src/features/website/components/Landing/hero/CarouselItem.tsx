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
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
