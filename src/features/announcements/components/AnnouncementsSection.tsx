import { FC, HTMLAttributes } from "react";
import { Annoncement } from "@prisma/client";

import List from "@/components/List";
import AnnouncementCard from "./Announcements/AnnouncementCard";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  announcements: Annoncement[];
}

const AnnouncementsSection: FC<Props> = ({ announcements, ...props }) => {
  return (
    <section className={cn("w-full", props.className)}>
      <List>
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} announcement={a} />
        ))}
      </List>
    </section>
  );
};

export default AnnouncementsSection;
