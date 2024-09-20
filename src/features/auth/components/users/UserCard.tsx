"use client";

import { FC, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { User } from "@prisma/client";

interface Props {
  user: Partial<User>;
  sameUser: boolean;
}

const PersonalUserCard: FC<Props> = ({ user }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-accent rounded-lg shadow-md">
      <Avatar className="w-16 h-16">
        <AvatarImage src={user?.avatarURL || ""} />
        <AvatarFallback>{user.fullname?.[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{user.fullname}</h2>
        <p className="text-primary font-light">@{user.username}</p>
      </div>
    </div>
  );
};

export default PersonalUserCard;
