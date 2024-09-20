import fetch from "@/lib/fetch";

import { Annoncement } from "@prisma/client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";

export const useNewAnnouncement = () => {
  const { toast } = useToast();
  const [announcement, setAnnouncement] = useState<Annoncement | null>(null);
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch<Annoncement, {}, APIErrorPayload>({
        method: "POST",
        url: "/announcements",
        data: {},
      });
      return response;
    },
    onSuccess: (response) => {
      setAnnouncement(response.data);
      setServerError("");
    },
    onError: (error: AxiosError<APIErrorPayload>) => {
      if (error.response && error.response.status === 400) {
        setServerError(error.response.data.message);
      } else {
        setServerError("An unexpected error occurred. Please try again later.");
      }

      toast({
        title: "Announcement Creation Failed.",
        description: serverError,
      });
    },
  });

  return {
    create: mutation.mutate.bind(mutation),
    announcement,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    serverError,
  };
};
