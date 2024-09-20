import React, { FC } from "react";
import { Event } from "@prisma/client";

import EventCard from "../../../events/components/Events/EventCard";
import NoData from "@/components/NoData";

interface Props {
  events: Event[];
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
