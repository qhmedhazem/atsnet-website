"use client";

import { FC } from "react";
import { Event } from "@prisma/client";

import FeatureCard from "@/components/FeatureCard";
import EventBannerForm from "./EventBannerForm";

interface Props {
  event: Event;
}

const EventBannerEditor: FC<Props> = ({ event }) => {
  return (
    <FeatureCard title="Event Banner">
      <EventBannerForm event={event} />
    </FeatureCard>
  );
};

export default EventBannerEditor;
