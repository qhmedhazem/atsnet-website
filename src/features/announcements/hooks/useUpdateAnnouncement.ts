import fetch from "@/lib/fetch";

import { Annoncement } from "@prisma/client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import { annoncementSchema } from "../validation/announcementSchema";

type onSuccess = (announcement: Annoncement) => any;
type onError = (error: AxiosError<APIErrorPayload>) => any;

export const useUpdateAnnouncement = (
  announcement: Annoncement,
  onSuccess?: onSuccess,
  onError?: onError
) => {
  const { toast } = useToast();
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: annoncementSchema) => {
      const response = await fetch<Annoncement, annoncementSchema>({
        method: "PUT",
        url: `/announcements/${announcement.id}`,
        data: data,
      });
      return response;
    },
    onSuccess: (response) => {
      toast({
        title: "Announcement updated successfully.",
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
