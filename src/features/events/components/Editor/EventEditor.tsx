"use client";

import { FC, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { Event } from "@prisma/client";
import { useUpdateEvent } from "../../hooks/useUpdateEvent";
import { Button } from "@/components/ui/Button";

const MarkdownEditor = dynamic(() => import("@/components/MarkdownEditor"), {
  ssr: false,
});

interface Props {
  event: Event;
}

const EventEditor: FC<Props> = ({ event }) => {
  const [content, setContent] = useState<string>(event.content);
  const { update, isPending } = useUpdateEvent(event, (e) => {
    event.content = e.content;
  });

  const save = async () => {
    if (!isPending) {
      update({ content: content });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (event.content !== content) save?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [event.content, content]);

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

export default EventEditor;
