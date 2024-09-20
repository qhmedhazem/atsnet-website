"use client";

import { FC } from "react";
import { Annoncement } from "@prisma/client";

import FeatureCard from "@/components/FeatureCard";
import AnnouncementInfoForm from "./AnnouncementInfoForm";

interface Props {
  announcement: Annoncement;
}

const AnnouncementInfo: FC<Props> = ({ announcement }) => {
  return (
    <FeatureCard title="Announcement Info">
      <AnnouncementInfoForm announcement={announcement} />
    </FeatureCard>
  );
};

export default AnnouncementInfo;
