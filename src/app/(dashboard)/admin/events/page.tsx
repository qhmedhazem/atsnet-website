import { CRUDLayout } from "@/components/CRUDLayout";
import List from "@/components/List";
import NewEvent from "@/features/events/components/NewEvent";
import EventCard from "@/features/events/components/Events/EventCard";

import { fetchAllEvents } from "@/features/events/services/eventsService";

export default async function EventsAdministration() {
  const events = await fetchAllEvents();

  return (
    <CRUDLayout title="Events Management" actions={<NewEvent />}>
      <List emptyMessage="There are no events yet, create one?">
        {events.map((a) => (
          <EventCard key={a.id} event={a} href={`/admin/events/${a.id}`} />
        ))}
      </List>
    </CRUDLayout>
  );
}
