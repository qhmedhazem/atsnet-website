import fetch from "@/lib/fetch";

import { Event } from "@prisma/client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";

export const useNewEvent = () => {
  const { toast } = useToast();
  const [event, setEvent] = useState<Event | null>(null);
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch<Event, {}, APIErrorPayload>({
        method: "POST",
        url: "/events",
        data: {},
      });
      return response;
    },
    onSuccess: (response) => {
      setEvent(response.data);
      setServerError("");
    },
    onError: (error: AxiosError<APIErrorPayload>) => {
      if (error.response && error.response.status === 400) {
        setServerError(error.response.data.message);
      } else {
        setServerError("An unexpected error occurred. Please try again later.");
      }

      toast({
        title: "Event Creation Failed.",
        description: serverError,
      });
    },
  });

  return {
    create: mutation.mutate.bind(mutation),
    event,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    serverError,
  };
};
