import React, { FC, HTMLAttributes } from "react";
import Spinner from "./ui/Spinner";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Loading: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 text-lg",
        className
      )}
      {...props}
    >
      <Spinner />
      <span className="font-bold">Loading...</span>
    </div>
  );
};

export default Loading;
