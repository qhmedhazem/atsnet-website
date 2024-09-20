"use client";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Annoncement } from "@prisma/client";
import { useDeleteAnnouncement } from "../../hooks/useDeleteAnnouncement";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

interface Props {
  announcement: Annoncement;
}

const DeleteAnnouncement: FC<Props> = ({ announcement }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { remove, isSuccess, isPending, serverError } =
    useDeleteAnnouncement(announcement);
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push(`/admin/announcements`);
    }
  }, [isSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={(v) => setIsOpen(v)}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          isLoading={isPending}
          disabled={isSuccess}
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action will delete this announcement.
          </DialogDescription>
          {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
        </DialogHeader>
        <DialogFooter>
          <Button isLoading={isPending} type="submit" onClick={() => remove()}>
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

export default DeleteAnnouncement;
