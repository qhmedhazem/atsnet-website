import fetch from "@/lib/fetch";

import { Message } from "@prisma/client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import { messageSchema } from "../validation/messageSchema";

type onSuccess = (msg: Message) => any;
type onError = (error: AxiosError<APIErrorPayload>) => any;

export const useMessageUpdate = (
  message: Message,
  onSuccess?: onSuccess,
  onError?: onError
) => {
  const { toast } = useToast();
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: messageSchema) => {
      const response = await fetch<Message, messageSchema>({
        method: "PUT",
        url: `/messages/${message.id}`,
        data: data,
      });
      return response;
    },
    onSuccess: (response) => {
      toast({
        title: "Message updated successfully.",
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
