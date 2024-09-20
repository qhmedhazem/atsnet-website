import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import fetch from "@/lib/fetch";
import { AxiosError } from "axios";
import { usernameChangeSchema } from "../validation/userSettingsSchema";
import { User } from "@prisma/client";

export const useDeleteUser = (user: Partial<User>) => {
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch({
        method: "DELETE",
        url: `/users/${user.id}`,
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

  return {
    mutation,
    remove: mutation.mutate.bind(mutation),
    isSuccess: mutation.isSuccess,
    isPending: mutation.isPending,
    serverError,
  };
};
