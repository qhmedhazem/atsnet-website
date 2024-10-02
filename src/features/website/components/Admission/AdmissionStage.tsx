import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const AdmissionStage: FC<Props> = ({
  title,
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn("w-full ", className)} {...props}>
      <div className="space-y-4 w-full">
        <h2 className="text-3xl font-bold lg:mt-8">{title}</h2>
        <div className="space-y-2">{children}</div>
      </div>
    </section>
  );
};

export default AdmissionStage;
