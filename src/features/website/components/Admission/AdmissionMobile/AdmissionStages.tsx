"use client";

import AdmissionStageCard, { AdmissionStageProps } from "./AdmissionStageCard";
import {
  AdmissionStage1,
  AdmissionStage2,
  AdmissionStage3,
} from "../AdmissionStagesContent";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLUListElement> {
  containerClassName?: string;
}

const AdmissionStages: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn("space-y-12", props.containerClassName)}>
      <div className="w-full">
        <hr className="w-20 h-2 rounded-xl bg-light-blue-500" />
      </div>
      <ul
        className={cn("flex flex-col gap-12 items-center my-8", className)}
        {...props}
      >
        {admissionStages.map((stage, i) => (
          <AdmissionStageCard key={i} {...stage} />
        ))}
      </ul>
    </div>
  );
};

export default AdmissionStages;

const admissionStages: AdmissionStageProps[] = [
  {
    imageSrc: "/landing2.jpg",
    imageAlt: "test",
    step: 1,
    children: <AdmissionStage1 />,
  },
  {
    imageSrc: "/landing2.jpg",
    imageAlt: "test",
    step: 2,
    children: <AdmissionStage2 />,
  },
  {
    imageSrc: "/landing6.jpg",
    imageAlt: "test",
    step: 3,
    children: <AdmissionStage3 />,
  },
];
