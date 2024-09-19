import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/Separator";
import PersonalUserCard from "@/features/settings/components/personal/PersonalUserCard";
import { authOptions } from "@/lib/authOptions";
import { getServerSession, Session } from "next-auth";

interface Props {
  children: ReactNode;
}

export default async function UserPersonalSettings({ children }: Props) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">Personal Settings</h1>
      <Separator />
      {/* Username */}
      <PersonalUserCard user={session.user} />
      {/* Password */}
    </div>
  );
}
