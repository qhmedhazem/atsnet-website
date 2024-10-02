"use client";

import { FC } from "react";
import { Annoncement } from "@prisma/client";

import FeatureCard from "@/components/FeatureCard";
import AnnouncementBannerForm from "./AnnouncementBannerForm";

interface Props {
  announcement: Annoncement;
}

const AnnouncementBannerEditor: FC<Props> = ({ announcement }) => {
  return (
    <FeatureCard title="Announcement Banner">
      <AnnouncementBannerForm announcement={announcement} />
    </FeatureCard>
  );
};

export default AnnouncementBannerEditor;
