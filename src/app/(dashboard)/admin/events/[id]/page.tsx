import { notFound } from "next/navigation";
import { fetchEventById } from "@/features/events/services/eventsService";
import { CRUDLayout } from "@/components/CRUDLayout";
import EventActions from "@/features/events/components/Editor/EventActions";
import EventEditor from "@/features/events/components/Editor/EventEditor";
import EventInfo from "@/features/events/components/Editor/EventInfo";
import EventBannerEditor from "@/features/events/components/Editor/EventBannerEditor";

export default async function AnnouncementManagementPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await fetchEventById(id);
  if (event == null) return notFound();

  return (
    <CRUDLayout title={event.title} actions={<EventActions event={event} />}>
      <EventInfo event={event} />
      <EventBannerEditor event={event} />
      <EventEditor event={event} />
    </CRUDLayout>
  );
}

export const revalidate = 0;
