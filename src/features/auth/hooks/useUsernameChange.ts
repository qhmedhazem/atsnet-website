import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import fetch from "@/lib/fetch";
import { AxiosError } from "axios";
import { usernameChangeSchema } from "../validation/userSettingsSchema";
import { User } from "@prisma/client";

export const useUsernameChange = (user: Partial<User>) => {
  const form = useForm<z.infer<typeof usernameChangeSchema>>({
    resolver: zodResolver(usernameChangeSchema),
    defaultValues: {
      username: user.username,
    },
  });
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof usernameChangeSchema>) => {
      const response = await fetch({
        method: "PUT",
        url: `/users/${user.id}`,
        data: data,
      });
      return response;
    },
    onSuccess: () => {
      setServerError("");
    },
    onError: (error: AxiosError) => {
      if (error.response && error.response.status === 400) {
        setServerError(
          "There was an error with your submission. Please try again."
        );
      } else {
        setServerError("An unexpected error occurred. Please try again later.");
      }
    },
  });

  const onSubmit = (data: z.infer<typeof usernameChangeSchema>) => {
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    handleSubmit: form.handleSubmit(onSubmit),
    serverError,
  };
};
