import { FC, HTMLAttributes } from "react";
import { Annoncement } from "@prisma/client";

import VerticalList from "@/components/VerticalList";
import AnnouncementCard from "./Announcements/AnnouncementCard";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  announcements: Annoncement[];
}

const AnnouncementsSection: FC<Props> = ({ announcements, ...props }) => {
  return (
    <section className={cn("w-full", props.className)}>
      <VerticalList>
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} announcement={a} />
        ))}
      </VerticalList>
    </section>
  );
};

export default AnnouncementsSection;
