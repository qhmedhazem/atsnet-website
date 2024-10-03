import { CRUDLayout } from "@/components/CRUDLayout";
import VerticalList from "@/components/VerticalList";
import MessageCard from "@/features/contact/components/Messages/MessageCard";
import { fetchAllMessages } from "@/features/contact/services/messagesService";
import React, { ReactNode } from "react";

export default async function MessagesAdministration() {
  const messages = await fetchAllMessages();

  return (
    <CRUDLayout title="Messages">
      <VerticalList emptyMessage="There are no messages for now.">
        {messages.map((a) => (
          <MessageCard key={a.id} message={a} />
        ))}
      </VerticalList>
    </CRUDLayout>
  );
}
