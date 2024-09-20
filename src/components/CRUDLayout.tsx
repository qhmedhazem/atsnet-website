import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, ReactNode, HTMLAttributes } from "react";
import { Separator } from "./ui/Separator";
import { LinkButton } from "./ui/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const CRUDLayout: FC<Props> = ({
  title,
  description,
  actions,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full gap-4 flex flex-col md:flex-row justify-between items-center">
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          {description && <p className="text-md font-light">{description}</p>}
        </header>
        {actions}
      </div>
      <Separator />
      <div className="py-4 w-full h-full flex justify-center">
        <main
          {...props}
          className={cn(
            "w-full flex flex-col gap-4 items-center",
            props.className
          )}
        />
      </div>
    </div>
  );
};
