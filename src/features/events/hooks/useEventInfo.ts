import { useState } from "react";
import { Event } from "@prisma/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { eventsSchema } from "../validation/eventsSchema";
import { useUpdateEvent } from "./useUpdateEvent";

export const useEventInfo = (event: Event) => {
  const { update, isPending, isSuccess, serverError } = useUpdateEvent(event);

  const form = useForm<eventsSchema>({
    resolver: zodResolver(eventsSchema),
    defaultValues: {
      ...event,
    },
  });

  const onSubmit = (data: z.infer<typeof eventsSchema>) => {
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
