import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";

interface Props {
  event: IEvent;
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <Card className="w-full mx-auto duration-300 transition-all rounded-lg border border-gray-200">
      {/* Card Header */}
      <CardHeader className="px-6 pt-6 pb-0 space-y-0">
        <div className="w-full flex justify-between">
          <div>
            <h2 className="text-xl font-semibold line-clamp-2">
              {event.title}
            </h2>
            <p className="text-sm font-light">{getRelativeTime(event.date)}</p>
          </div>
          {event.registerLink && (
            <LinkButton href={event.registerLink} target="_blank">
              Register
            </LinkButton>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 px-6 pt-4 pb-4">
        <p className="text-gray-600 line-clamp-3">{event.description}</p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
