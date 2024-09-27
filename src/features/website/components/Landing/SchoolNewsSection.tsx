import List from "@/components/List";
import AnnouncementLandingCard from "./announcements/AnnouncementLandingCard";
import { Annoncement } from "@prisma/client";
import { FC, HTMLAttributes } from "react";
import ScrollableList from "@/components/ScrollableList";

interface Props extends HTMLAttributes<HTMLDivElement> {
  announcements: Annoncement[];
}

const SchoolNewsSection: FC<Props> = ({ announcements }) => {
  return (
    <section id="news" className="w-full flex flex-col gap-8">
      <h1 className="text-3xl font-bold">School News & Updates</h1>
      <ScrollableList>
        {announcements.map((a) => (
          <li
            key={a.id}
            className="flex-1 m-2 flex-grow min-w-[320px] max-w-[320px]"
          >
            <AnnouncementLandingCard key={a.id} announcement={a} />
          </li>
        ))}
      </ScrollableList>
    </section>
  );
};

export default SchoolNewsSection;
