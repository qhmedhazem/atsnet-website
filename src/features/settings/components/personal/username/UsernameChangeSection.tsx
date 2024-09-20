"use client";

import { FC } from "react";
import { UsernameChangeModal } from "./UsernameChangeModal";
import { User } from "next-auth";

interface Props {
  user: User;
}

const UsernameChangeSection: FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-col items-start gap-6 px-6 py-8 bg-accent rounded-lg shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Change your username</h1>
        <p className="text-md font-light">@{user.username}</p>
        <p className="text-md font-light">
          username used in places that need a shortcut of your name (e.g.
          authors in articles).
        </p>
      </div>
      <UsernameChangeModal />
    </div>
  );
};

export default UsernameChangeSection;
