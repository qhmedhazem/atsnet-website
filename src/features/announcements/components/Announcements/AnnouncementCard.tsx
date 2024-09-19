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

interface Props {
  announcement: IAnnouncement;
}

const AnnouncementCard: React.FC<Props> = ({ announcement }) => {
  return (
    <Card className="w-full cursor-pointer mx-auto duration-300 transition-all rounded-lg border border-gray-200 hover:shadow-xl  hover:-translate-y-0.5">
      <Link href={`/announcements/${announcement.id}`}>
        {/* Card Header */}
        <CardHeader className="px-6 pt-6 pb-0">
          <h2 className="text-xl font-semibold line-clamp-1">
            {announcement.title}
          </h2>
          <p className="text-sm font-light line-clamp-1">
            {getRelativeTime(announcement.date)}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-6 pt-4 pb-4">
          <p className="text-gray-600 line-clamp-3">{announcement.content}</p>
          {announcement.imageURL && (
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <img
                src={announcement.imageURL}
                alt={announcement.title}
                className="object-center w-auto h-auto"
              />
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export default AnnouncementCard;
