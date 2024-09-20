import { useCallback, useMemo, useState } from "react";
import { getDayStartEndDates } from "@/lib/utils";
import { Event } from "@prisma/client";

export const useEvents = (eventList: Event[]) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const datesList = useMemo(() => eventList.map((e) => e.createdAt), [events]);

  const displayEventsInSpecificDay = useCallback(
    (day: Date) => {
      const { startOfDay, endOfDay } = getDayStartEndDates(day);
      const result = eventList.filter((e) => {
        return startOfDay <= e.createdAt && endOfDay >= e.createdAt;
      });
      setEvents(result);
      setSelectedDate(startOfDay);
      setIsOpen(true);
    },
    [setEvents]
  );

  const closeEvents = useCallback(() => {
    setIsOpen(false);
  }, [setEvents]);

  return {
    isOpen,
    selectedDate,
    datesList,
    events,
    displayEventsInSpecificDay,
    closeEvents,
  };
};
