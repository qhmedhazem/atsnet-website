import { useCallback, useMemo, useState } from "react";
import { getDayStartEndDates } from "@/lib/utils";

export const useEvents = (eventList: IEvent[]) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<IEvent[]>([]);
  const datesList = useMemo(() => eventList.map((e) => e.date), [events]);

  const displayEventsInSpecificDay = useCallback(
    (day: Date) => {
      const { startOfDay, endOfDay } = getDayStartEndDates(day);
      const result = eventList.filter((e) => {
        return startOfDay <= e.date && endOfDay >= e.date;
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
