"use client";

import { FC } from "react";

import { Event } from "@prisma/client";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@radix-ui/react-label";
import { useUpdateEvent } from "../../hooks/useUpdateEvent";

interface Props {
  event: Event;
}

const PublishEvent: FC<Props> = ({ event }) => {
  const { update, isPending } = useUpdateEvent(event, (e) => {
    e.published = e.published;
  });

  const togglePublished = async () => {
    update({ published: !event.published });
  };

  return (
    <div className="flex gap-4 items-center">
      <Label>Published: </Label>
      <Switch
        id="published"
        checked={isPending ? !event.published : event.published}
        onClick={togglePublished}
        disabled={isPending}
      />
    </div>
  );
};

export default PublishEvent;
