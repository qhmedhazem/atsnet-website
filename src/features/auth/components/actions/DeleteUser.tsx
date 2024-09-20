"use client";

import { FC, useEffect, useState } from "react";
import { User } from "@prisma/client";

import { useRouter } from "next/navigation";
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
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

interface Props {
  user: Partial<User>;
}

const DeleteUser: FC<Props> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { remove, isPending, isSuccess, serverError } = useDeleteUser(user);

  useEffect(() => {
    if (isSuccess) {
      router.push(`/admin/users`);
    }
  }, [isSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={(v) => setIsOpen(v)}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete @{user.username}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action will delete this user permanently.
          </DialogDescription>
          {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            type="submit"
            isLoading={isPending}
            onClick={() => remove()}
          >
            Confirm
          </Button>
          <Button
            variant="secondary"
            type="reset"
            disabled={isPending}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUser;
