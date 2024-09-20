import fetch from "@/lib/fetch";

import { Event } from "@prisma/client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import { eventsSchema } from "../validation/eventsSchema";

type onSuccess = (event: Event) => any;
type onError = (error: AxiosError<APIErrorPayload>) => any;

export const useUpdateEvent = (
  event: Event,
  onSuccess?: onSuccess,
  onError?: onError
) => {
  const { toast } = useToast();
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: eventsSchema) => {
      const response = await fetch<Event, eventsSchema>({
        method: "PUT",
        url: `/events/${event.id}`,
        data: data,
      });
      return response;
    },
    onSuccess: (response) => {
      toast({
        title: "Event updated successfully.",
      });
      onSuccess?.(response.data);
    },
    onError: (error: AxiosError<APIErrorPayload>) => {
      if (error.response && error.response.status === 400) {
        setServerError(error.response.data.message);
      } else {
        setServerError("An unexpected error occurred. Please try again later.");
      }
      onError?.(error);
    },
  });

  return {
    update: mutation.mutate.bind(mutation),
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    serverError,
  };
};
