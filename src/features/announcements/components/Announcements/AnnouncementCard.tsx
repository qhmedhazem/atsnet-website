import React from "react";
import Link from "next/link";

import { Annoncement } from "@prisma/client";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { getRelativeTime } from "@/lib/utils";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/Badge";

interface Props {
  announcement: Annoncement;
  href?: string;
}

const AnnouncementCard: React.FC<Props> = ({ announcement, href }) => {
  return (
    <Card className="w-full cursor-pointer mx-auto duration-300 transition-all rounded-lg border border-gray-200 hover:shadow-xl  hover:-translate-y-0.5">
      <Link href={href || `/announcements/${announcement.id}`}>
        {/* Card Header */}
        <CardHeader className="px-6 pt-6 pb-0">
          <div className="flex flex-row gap-2">
            <h2 className="text-xl font-semibold line-clamp-1">
              {announcement.title}
            </h2>
            {!announcement.published && <Badge>Unpublished</Badge>}
          </div>
          <p className="text-sm font-light line-clamp-1">
            {getRelativeTime(announcement.createdAt)}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-6 pt-4 pb-4">
          <Markdown className="text-gray-600 line-clamp-3">
            {announcement.content}
          </Markdown>
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
