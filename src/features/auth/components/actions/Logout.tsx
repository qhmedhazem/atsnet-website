"use client";

import { FC, useState } from "react";
import { User } from "@prisma/client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { useUserLogout } from "../../hooks/useUserLogout";

interface Props {
  user: Partial<User>;
}

const Logout: FC<Props> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logout } = useUserLogout();

  return (
    <Dialog open={isOpen} onOpenChange={(v) => setIsOpen(v)}>
      <DialogTrigger asChild>
        <Button variant="destructive">Logout</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action will delete this announcement.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" type="submit" onClick={() => logout()}>
            Confirm
          </Button>
          <Button
            variant="secondary"
            type="reset"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
