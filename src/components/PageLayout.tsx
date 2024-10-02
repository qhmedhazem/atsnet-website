import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  headerChildren?: ReactNode;
}

export const PageLayout: FC<Props> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  headerChildren,
  ...props
}) => {
  return (
    <div id="pageLayout">
      <header
        className="relative"
        style={{
          width: "screen",
          height: 500,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={888}
          height={500}
          className="w-screen h-auto bg-cover object-cover "
          style={{
            height: 500,
          }}
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <h1 className="mb-4 text-primary-foreground font-bold text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="text-primary-foreground font-normal opacity-80">
                {description}
              </p>
            )}
          </div>
        </div>
        {headerChildren}
      </header>
      {/* py-8 px-4 md:px-12 */}
      <div className="w-full h-full flex justify-center">
        <main
          {...props}
          className={cn(
            "container py-12 w-full flex flex-col items-center",
            props.className
          )}
        />
      </div>
    </div>
  );
};
