"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useNewAnnouncement } from "../hooks/useNewAnnouncement";

interface Props {}

const NewAnnouncement: FC<Props> = () => {
  const { create, announcement, isSuccess, isPending } = useNewAnnouncement();
  const router = useRouter();

  useEffect(() => {
    if (announcement?.id) {
      router.push(`/admin/announcements/${announcement?.id}`);
    }
  }, [announcement, isSuccess]);

  return (
    <Button onClick={() => create()} isLoading={isPending} disabled={isSuccess}>
      New
    </Button>
  );
};

export default NewAnnouncement;
