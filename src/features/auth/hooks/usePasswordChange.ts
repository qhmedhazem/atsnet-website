import { useState } from "react";
import { User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import fetch from "@/lib/fetch";
import { AxiosError } from "axios";
import { passwordChangeSchema } from "../validation/userSettingsSchema";

export const usePasswordChange = (user: Partial<User>) => {
  const form = useForm<passwordChangeSchema>({
    resolver: zodResolver(passwordChangeSchema),
  });
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: passwordChangeSchema) => {
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

  const onSubmit = (data: passwordChangeSchema) => {
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    handleSubmit: form.handleSubmit(onSubmit),
    serverError,
  };
};
