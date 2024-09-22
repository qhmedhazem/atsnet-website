"use client";

import AdmissionStageCard, { AdmissionStageProps } from "./AdmissionStageCard";
import {
  AdmissionStage1,
  AdmissionStage2,
  AdmissionStage3,
} from "../AdmissionStagesContent";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLUListElement> {}

const AdmissionStages: FC<Props> = ({ className, ...props }) => {
  return (
    <ul
      className={cn("flex flex-col gap-12 items-center my-8", className)}
      {...props}
    >
      {admissionStages.map((stage, i) => (
        <AdmissionStageCard key={i} {...stage} />
      ))}
    </ul>
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
    imageSrc: "/landing2.jpg",
    imageAlt: "test",
    step: 3,
    children: <AdmissionStage3 />,
  },
];
