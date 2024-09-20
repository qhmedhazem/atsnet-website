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
import { Event } from "@prisma/client";
import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

interface Props {
  event: Event;
}

const DeleteEvent: FC<Props> = ({ event }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { remove, isSuccess, isPending, serverError } = useDeleteEvent(event);
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push(`/admin/events`);
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
            This action will cancel this event.
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

export default DeleteEvent;
