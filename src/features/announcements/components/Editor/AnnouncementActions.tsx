import { FC, HTMLAttributes } from "react";
import { Annoncement } from "@prisma/client";

import { cn } from "@/lib/utils";
import DeleteAnnouncement from "../Actions/DeleteAnnouncement";
import PublishAnnouncement from "../Actions/PublishAnnouncement";

interface Props extends HTMLAttributes<HTMLDivElement> {
  announcement: Annoncement;
}

const AnnouncementActions: FC<Props> = ({ announcement, ...props }) => {
  return (
    <div className={cn("flex gap-4 items-center", props.className)} {...props}>
      <DeleteAnnouncement announcement={announcement} />
      <PublishAnnouncement announcement={announcement} />
    </div>
  );
};

export default AnnouncementActions;
