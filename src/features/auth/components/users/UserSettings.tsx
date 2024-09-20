"use client";

import { FC } from "react";
import { User } from "@prisma/client";

import PersonalUserCard from "./UserCard";
import PasswordChangeSection from "../password/PasswordChangeSection";
import UsernameChangeSection from "../username/UsernameChangeSection";

interface Props {
  sameUser: boolean;
  user: Partial<User>;
}

const PersonalSettings: FC<Props> = ({ sameUser, user }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <PersonalUserCard sameUser={sameUser} user={user} />
      <UsernameChangeSection sameUser={sameUser} user={user} />
      <PasswordChangeSection sameUser={sameUser} user={user} />
    </div>
  );
};

export default PersonalSettings;
