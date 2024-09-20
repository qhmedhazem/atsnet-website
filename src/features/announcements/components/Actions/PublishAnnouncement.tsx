"use client";

import { FC } from "react";

import { Annoncement } from "@prisma/client";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@radix-ui/react-label";
import { useUpdateAnnouncement } from "../../hooks/useUpdateAnnouncement";
import FeatureCard from "@/components/FeatureCard";

interface Props {
  announcement: Annoncement;
}

const PublishAnnouncement: FC<Props> = ({ announcement }) => {
  const { update, isPending } = useUpdateAnnouncement(
    announcement,
    (announc) => {
      announcement.published = announc.published;
    }
  );

  const togglePublished = async () => {
    update({ published: !announcement.published });
  };

  return (
    <div className="flex gap-4 items-center">
      <Label>Published: </Label>
      <Switch
        id="published"
        checked={isPending ? !announcement.published : announcement.published}
        onClick={togglePublished}
        disabled={isPending}
      />
    </div>
  );
};

export default PublishAnnouncement;
