import React, { FC } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import EventCard from "./EventCard";
import NoData from "@/components/NoData";

interface Props {
  events: IEvent[];
}

const EventsList: FC<Props> = ({ events }) => {
  return (
    <>
      {events.length == 0 && <NoData title="There are no available events" />}
      <ul className="w-full flex flex-col gap-4 mt-2 text-md box-border">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsList;
