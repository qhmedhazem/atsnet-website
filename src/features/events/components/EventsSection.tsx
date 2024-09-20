"use client";

import { FC, HTMLAttributes, useMemo, useState } from "react";
import EventModal from "./Events/EventModal";

import { Calendar } from "@/components/ui/Calendar";
import { Event } from "@prisma/client";
import { useEvents } from "../hooks/useEvents";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  events: Event[];
}

const EventsSection: FC<Props> = ({ events, ...props }) => {
  const {
    datesList,
    displayEventsInSpecificDay,
    closeEvents,
    isOpen,
    selectedDate,
    events: displayedEvents,
  } = useEvents(events);

  return (
    <>
      <EventModal
        day={selectedDate}
        events={displayedEvents}
        isOpen={isOpen}
        onClose={closeEvents}
      />
      <section
        className={cn(
          "flex flex-col gap-4 sm:flex-row-reverse sm:gap-4 lg:flex-col lg:items-center lg:gap-2",
          props.className
        )}
      >
        {" "}
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Our Calendar</h1>
          <p className="text-sm">
            Virtual Sessions, Events, Competetions, and more.
          </p>
        </div>
        <div className="w-min flex flex-col items-center">
          <Calendar
            mode="multiple"
            selected={datesList}
            onSelect={(selected, triggered, modifiers, e) => {
              e.preventDefault();
              if (triggered) displayEventsInSpecificDay(triggered);
            }}
            className="rounded-lg border bg-white "
            title="Events Calendar"
          />
          <p className="text-xs font-light">
            Click on shaded day to see available events.
          </p>
        </div>
      </section>
    </>
  );
};

export default EventsSection;
