import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import fetch from "@/lib/fetch";
import { AxiosError } from "axios";

const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

const usernameChangeSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(16, { message: "Username must be at most 16 characters long" })
    .regex(usernameRegex, {
      message:
        "Username can only contain alphanumeric characters and underscores",
    }),

  password: z.string(),
});

export const useUsernameChange = () => {
  const form = useForm<z.infer<typeof usernameChangeSchema>>({
    resolver: zodResolver(usernameChangeSchema),
  });
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof usernameChangeSchema>) => {
      const response = await fetch({
        method: "POST",
        url: "/api/user/username",
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
