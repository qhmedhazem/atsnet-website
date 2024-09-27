import React, { FC, HTMLAttributes, ReactNode } from "react";
import NoData from "@/components/NoData";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  emptyMessage?: string;
  children: ReactNode[];
}

const List: FC<Props> = ({
  title,
  emptyMessage = "This list is empty",
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      {title && <h2 className="text-3xl">{title}</h2>}
      <div className="flex flex-wrap justify-center gap-4">
        {children.length === 0 && <NoData title={emptyMessage} />}
        {children.length > 0 && (
          <div
            {...props}
            className={cn("flex flex-wrap gap-4 w-full", props.className)}
          >
            {children.map((child, index) => (
              <div key={index} className="flex-1 m-2 flex-grow">
                {child}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
