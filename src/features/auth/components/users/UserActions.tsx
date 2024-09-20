"use client";

import { FC, useState } from "react";
import { User } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import { useUserLogout } from "../../hooks/useUserLogout";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import Logout from "../actions/Logout";
import DeleteUser from "../actions/DeleteUser";

interface Props {
  user: Partial<User>;
  sameUser: boolean;
}

const UserActions: FC<Props> = ({ sameUser, user }) => {
  return (
    <div className="flex items-center gap-4">
      {!sameUser && <DeleteUser user={user} />}
      {sameUser && <Logout user={user} />}
    </div>
  );
};

export default UserActions;
