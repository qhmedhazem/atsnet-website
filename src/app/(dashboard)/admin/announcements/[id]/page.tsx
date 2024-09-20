import { notFound } from "next/navigation";
import { fetchAnnouncementById } from "@/features/announcements/services/announcementsService";
import { CRUDLayout } from "@/components/CRUDLayout";
import AnnouncementActions from "@/features/announcements/components/Editor/AnnouncementActions";
import AnnouncementEditor from "@/features/announcements/components/Editor/AnnouncemetEditor";
import AnnouncementInfo from "@/features/announcements/components/Editor/AnnouncementInfo";

export default async function AnnouncementManagementPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const announcement = await fetchAnnouncementById(id);
  if (announcement == null) return notFound();

  return (
    <CRUDLayout
      title={announcement.title}
      actions={<AnnouncementActions announcement={announcement} />}
    >
      <AnnouncementInfo announcement={announcement} />
      <AnnouncementEditor announcement={announcement} />
    </CRUDLayout>
  );
}
