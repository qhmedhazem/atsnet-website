"use client";

import { FC, useEffect, useState } from "react";

import { Annoncement } from "@prisma/client";
import { useUpdateAnnouncement } from "../../hooks/useUpdateAnnouncement";
import FeatureCard from "@/components/FeatureCard";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";

const MarkdownEditor = dynamic(() => import("@/components/MarkdownEditor"), {
  ssr: false,
});

interface Props {
  announcement: Annoncement;
}

const AnnouncementEditor: FC<Props> = ({ announcement }) => {
  const [content, setContent] = useState<string>(announcement.content);
  const { update, isPending } = useUpdateAnnouncement(
    announcement,
    (announc) => {
      announcement.content = announc.content;
    }
  );

  const save = async () => {
    if (!isPending) {
      update({ content: content });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (announcement.content !== content) save?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [announcement.content, content]);

  return (
    <div className="w-full h-full">
      <MarkdownEditor
        className="max-w-full"
        markdown={content}
        onChange={setContent}
      >
        <Button isLoading={isPending} onClick={save}>
          {isPending ? "Saving" : "Save"}
        </Button>
      </MarkdownEditor>
    </div>
  );
};

export default AnnouncementEditor;
