import { getServerSession, Session } from "next-auth";
import { User } from "@prisma/client";

import UserSettings from "@/features/auth/components/users/UserSettings";
import { Separator } from "@/components/ui/Separator";

import { authOptions } from "@/lib/authOptions";
import { fetchUserById } from "@/features/auth/services/usersService";
import { notFound } from "next/navigation";
import { CRUDLayout } from "@/components/CRUDLayout";
import UserActions from "@/features/auth/components/users/UserActions";

export default async function UserSettingsManagement({
  params: { id },
}: {
  params: { id: string };
}) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) return null;

  const user: Partial<User> | null = await fetchUserById(id);
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
