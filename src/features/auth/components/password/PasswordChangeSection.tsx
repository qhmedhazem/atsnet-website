"use client";

import { FC, useState } from "react";
import { User } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { PasswordChangeModal } from "./PasswordChangeModal";
import { getRelativeTime } from "@/lib/utils";

interface Props {
  user: Partial<User>;
  sameUser: boolean;
}

const PasswordChangeSection: FC<Props> = ({ sameUser, user }) => {
  const lastPasswordChange: string = user.lastPasswordChange
    ? getRelativeTime(user.lastPasswordChange)
    : "No Reconds";

  return (
    <div className="flex flex-col items-start gap-6 px-6 py-8 bg-accent rounded-lg shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Change your password</h1>
        <p className="text-md font-light">
          Last Password Change: {lastPasswordChange}
        </p>
      </div>
      <PasswordChangeModal sameUser={sameUser} user={user} />
    </div>
  );
};

export default PasswordChangeSection;
