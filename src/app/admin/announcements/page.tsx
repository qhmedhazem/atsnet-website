import { CRUDLayout } from "@/components/CRUDLayout";
import List from "@/components/List";
import AnnouncementCard from "@/features/announcements/components/Announcements/AnnouncementCard";
import NewAnnouncement from "@/features/announcements/components/Settings/NewAnnouncement";
import { fetchAllAnnouncements } from "@/features/announcements/services/announcementsService";

export default async function AnnouncementsAdministration() {
  const announcements = await fetchAllAnnouncements();

  return (
    <CRUDLayout title="Announcement Management" actions={<NewAnnouncement />}>
      <List emptyMessage="There are no announcement yet, create one?">
        {announcements.map((a) => (
          <AnnouncementCard
            key={a.id}
            announcement={a}
            href={`/admin/announcements/${a.id}`}
          />
        ))}
      </List>
    </CRUDLayout>
  );
}
