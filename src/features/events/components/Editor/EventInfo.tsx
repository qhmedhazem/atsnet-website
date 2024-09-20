"use client";

import { FC } from "react";
import { Event } from "@prisma/client";

import FeatureCard from "@/components/FeatureCard";
import EventInfoForm from "./EventInfoForm";

interface Props {
  event: Event;
}

const EventInfo: FC<Props> = ({ event }) => {
  return (
    <FeatureCard title="Event Info">
      <EventInfoForm event={event} />
    </FeatureCard>
  );
};

export default EventInfo;
