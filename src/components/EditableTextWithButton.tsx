import React, { FC } from "react";
import { Button, ButtonProps } from "./ui/Button";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
  children: React.ReactNode;
  buttonLabel: string;
  containerClassName?: string;
  textClassName?: string;
  className?: string;
}

const EditableTextWithButton: FC<Props> = ({
  children,
  buttonLabel,
  className,
  containerClassName,
  textClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-md relative border border-border flex items-center justify-between text-sm gap-4 pl-4 pr-1 py-1 rounded-xl",
        containerClassName
      )}
    >
      <span
        className={cn(
          "max-w-[12rem] md:max-w-[16rem] overflow-hidden",
          textClassName
        )}
      >
        {children}
      </span>
      <Button
        variant="outline"
        className={cn("rounded-lg self-end", className)}
        {...props}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default EditableTextWithButton;
