"use client";

import { FC } from "react";
import { User } from "next-auth";

import PersonalUserCard from "./PersonalUserCard";
import PasswordChangeSection from "./password/PasswordChangeSection";
import UsernameChangeSection from "./username/UsernameChangeSection";

interface Props {
  user: User;
}

const PersonalSettings: FC<Props> = ({ user }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <PersonalUserCard user={user} />
      <UsernameChangeSection user={user} />
      <PasswordChangeSection user={user} />
    </div>
  );
};

export default PersonalSettings;
