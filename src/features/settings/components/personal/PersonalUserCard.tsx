"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { UsernameChangeModal } from "./username/UsernameChangeModal";
import { PasswordChangeModal } from "./password/PasswordChangeModal";

interface Props {
  user: IUser;
}

type FieldToEdit = "username" | "password";

const PersonalUserCard: FC<Props> = ({ user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingField, setEditingField] = useState("");

  return (
    <div className="flex items-center gap-4 p-4 bg-accent rounded-lg shadow-md">
      <Avatar className="w-16 h-16">
        <AvatarImage src={user.avatarURL} />
        <AvatarFallback>{user.fullname[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{user.fullname}</h2>
        <p className="text-primary font-light">@{user.username}</p>
        <p className="text-primary font-light">Last Password Change:</p>
      </div>
      <div className="flex flex-col">
        <UsernameChangeModal />
        <PasswordChangeModal />
      </div>
    </div>
  );
};

export default PersonalUserCard;
