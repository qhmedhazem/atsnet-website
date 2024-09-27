import React from "react";
import Link from "next/link";

import { Annoncement } from "@prisma/client";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { getRelativeTime } from "@/lib/utils";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";

interface Props {
  announcement: Annoncement;
  href?: string;
}

const AnnouncementLandingCard: React.FC<Props> = ({ announcement, href }) => {
  return (
    <Card className="bg-white shadow-none border-0 h-full w-full text-primary mx-auto duration-300 transition-all rounded-lg">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={announcement.imageURL || "/landing2.jpg"}
          alt={announcement.title}
          className="object-cover w-full h-full rounded-sm"
        />
      </div>

      {/* Card Content */}
      <CardContent className="flex flex-col gap-4 py-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold line-clamp-1">
              {announcement.title}
            </h2>
            {!announcement.published && <Badge>Unpublished</Badge>}
          </div>
        </div>
        <Markdown className="text-sm font-light line-clamp-2">
          {announcement.content}
        </Markdown>
        <div>
          <LinkButton
            className="self-end rounded-sm bg-light-blue-800 hover:bg-light-blue-900"
            href={href || `/announcements/${announcement.id}`}
          >
            Read more
          </LinkButton>
        </div>
      </CardContent>

      {/* Read More Button */}
    </Card>
  );
};

export default AnnouncementLandingCard;
