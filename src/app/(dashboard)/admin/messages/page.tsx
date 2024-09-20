import { CRUDLayout } from "@/components/CRUDLayout";
import List from "@/components/List";
import MessageCard from "@/features/contact/components/Messages/MessageCard";
import { fetchAllMessages } from "@/features/contact/services/messagesService";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function MessagesAdministration({ children }: Props) {
  const messages = await fetchAllMessages();

  return (
    <CRUDLayout title="Messages">
      <List emptyMessage="There are no messages for now.">
        {messages.map((a) => (
          <MessageCard key={a.id} message={a} />
        ))}
      </List>
    </CRUDLayout>
  );
}
