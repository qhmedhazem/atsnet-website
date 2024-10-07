import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface Props extends ImageProps {
  src: string;
  alt: string;
}

const GalleryImage: FC<Props> = ({ src, alt, ...props }) => {
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={300}
      height={300}
      className={cn(
        "cursor-pointer w-full h-full max-w-xs max-h-xs object-cover rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        props.className
      )}
    />
  );
};

export default GalleryImage;
