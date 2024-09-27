import { Event } from "@prisma/client";
import { FC, HTMLAttributes } from "react";
import ScrollableList from "@/components/ScrollableList";
import EventLandingCard from "./announcements/EventLandingCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
  events: Event[];
}

const UpcomingEventsSection: FC<Props> = ({ events }) => {
  return (
    <section id="events" className="w-full flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      <ScrollableList>
        {[...events, ...events, ...events, ...events].map((a) => (
          <li
            key={a.id}
            className="flex-1 m-2 flex-grow min-w-[320px] max-w-[320px]"
          >
            <EventLandingCard key={a.id} event={a} />
          </li>
        ))}
      </ScrollableList>
    </section>
  );
};

export default UpcomingEventsSection;
