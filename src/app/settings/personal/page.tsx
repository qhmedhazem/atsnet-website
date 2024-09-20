import React, { ReactNode } from "react";
import { getServerSession, Session } from "next-auth";

import UserSettings from "@/features/auth/components/users/UserSettings";
import { Separator } from "@/components/ui/Separator";

import { authOptions } from "@/lib/authOptions";
import { fetchUserById } from "@/features/auth/services/usersService";
import { User } from "@prisma/client";
import { CRUDLayout } from "@/components/CRUDLayout";
import UserActions from "@/features/auth/components/users/UserActions";

interface Props {
  children: ReactNode;
}

export default async function UserPersonalSettings({ children }: Props) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) return null;

  const user: Partial<User> | null = await fetchUserById(session.user.id);
  if (!user) return null;

  const sameUser = user.id == session.user.id;
  const title = sameUser ? `Personal Settings` : `@${user.username} Settings`;

  return (
    <CRUDLayout
      title={title}
      actions={<UserActions sameUser={sameUser} user={user} />}
    >
      <UserSettings sameUser={sameUser} user={user} />
    </CRUDLayout>
  );
}
