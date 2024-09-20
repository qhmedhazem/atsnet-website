import { useState } from "react";
import { Annoncement } from "@prisma/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { annoncementSchema } from "../validation/announcementSchema";
import { useUpdateAnnouncement } from "./useUpdateAnnouncement";

export const useAnnouncementInfo = (announcement: Annoncement) => {
  const { update, isPending, isSuccess, serverError } =
    useUpdateAnnouncement(announcement);

  const form = useForm<annoncementSchema>({
    resolver: zodResolver(annoncementSchema),
    defaultValues: {
      title: announcement.title,
    },
  });

  const onSubmit = (data: z.infer<typeof annoncementSchema>) => {
    update(data);
  };

  return {
    form,
    isPending,
    isSuccess,
    handleSubmit: form.handleSubmit(onSubmit),
    serverError,
  };
};
