"use client";

import ScrollSection, { ScrollCardItem } from "@/components/ScrollSection";
import AdmissionScrollStageCard from "./AdmissionScrollStageCard";
import {
  AdmissionStage1,
  AdmissionStage2,
  AdmissionStage3,
} from "../AdmissionStagesContent";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdmissionScrollStages: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn("px-4", className)} {...props}>
      <ScrollSection Card={AdmissionScrollStageCard} items={admissionStages} />
    </div>
  );
};

export default AdmissionScrollStages;

const admissionStages: ScrollCardItem[] = [
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
