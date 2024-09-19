import { Separator } from "@/components/ui/Separator";
import PersonalUserCard from "@/features/settings/components/personal/PersonalUserCard";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const user: IUser = {
  id: "123",
  username: "ahmedhazem",
  email: "ahmedhazemcoding@gmail.com",
  fullname: "أحمد حازم أحمد محمد على",
  createdAt: new Date(),
  updatedAt: new Date(),
  lastPasswordChange: new Date(),
  password: "hashed_password",
  avatarURL: undefined,
};

export default function UserPersonalSettings({ children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">Personal Settings</h1>
      <Separator />
      {/* Username */}
      <PersonalUserCard user={user} />
      {/* Password */}
    </div>
  );
}
