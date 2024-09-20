import { FC, HTMLAttributes } from "react";
import { Event } from "@prisma/client";

import { cn } from "@/lib/utils";
import DeleteEvent from "../Actions/DeleteEvent";
import PublishEvent from "../Actions/PublishEvent";

interface Props extends HTMLAttributes<HTMLDivElement> {
  event: Event;
}

const EventActions: FC<Props> = ({ event, ...props }) => {
  return (
    <div className={cn("flex gap-4 items-center", props.className)} {...props}>
      <DeleteEvent event={event} />
      <PublishEvent event={event} />
    </div>
  );
};

export default EventActions;
