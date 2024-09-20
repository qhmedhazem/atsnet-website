import React, { ReactNode } from "react";
import { getServerSession, Session } from "next-auth";

import PersonalSettings from "@/features/settings/components/personal/PersonalSettings";
import { Separator } from "@/components/ui/Separator";

import { authOptions } from "@/lib/authOptions";

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
      <PersonalSettings user={session.user} />
      {/* Password */}
    </div>
  );
}
