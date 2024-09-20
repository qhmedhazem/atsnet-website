import { notFound } from "next/navigation";
import { CRUDLayout } from "@/components/CRUDLayout";
import { fetchMessageById } from "@/features/contact/services/messagesService";
import ReplyMessage from "@/features/contact/components/Actions/ReplyMessage";
import MessageInfo from "@/features/contact/components/Messages/MessageInfo";
import MessageContent from "@/features/contact/components/Messages/MessageContent";

export default async function MessageManagementPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const message = await fetchMessageById(id);
  if (message == null) return notFound();

  return (
    <CRUDLayout
      title={`Message (ID: ${message.id})`}
      actions={<ReplyMessage message={message} />}
    >
      <MessageInfo message={message} />
      <MessageContent message={message} />
    </CRUDLayout>
  );
}
