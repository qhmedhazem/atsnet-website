import fetch from "@/lib/fetch";

import { Event } from "@prisma/client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";

export const useDeleteEvent = (event: Event) => {
  const { toast } = useToast();
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch({
        method: "DELETE",
        url: `/events/${event.id}`,
      });
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Event deleted successfully.",
      });
    },
    onError: (error: AxiosError<APIErrorPayload>) => {
      if (error.response && error.response.status === 400) {
        setServerError(error.response.data.message);
      } else {
        setServerError("An unexpected error occurred. Please try again later.");
      }
    },
  });

  return {
    remove: mutation.mutate.bind(mutation),
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    serverError,
  };
};
