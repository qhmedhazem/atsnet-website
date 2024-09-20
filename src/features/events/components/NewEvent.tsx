"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useNewEvent } from "../hooks/useNewEvent";

interface Props {}

const NewEvent: FC<Props> = () => {
  const { create, event, isSuccess, isPending } = useNewEvent();
  const router = useRouter();

  useEffect(() => {
    if (event?.id) {
      router.push(`/admin/events/${event?.id}`);
    }
  }, [event, isSuccess]);

  return (
    <Button onClick={() => create()} isLoading={isPending} disabled={isSuccess}>
      New
    </Button>
  );
};

export default NewEvent;
