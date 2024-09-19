import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import fetch from "@/lib/fetch";
import { AxiosError } from "axios";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

const passwordChangeSchema = z
  .object({
    password: z.string(),
    new_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),

    confirm_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

export const usePasswordChange = () => {
  const form = useForm<z.infer<typeof passwordChangeSchema>>({
    resolver: zodResolver(passwordChangeSchema),
  });
  const [serverError, setServerError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof passwordChangeSchema>) => {
      const response = await fetch({
        method: "POST",
        url: "/api/user/password",
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

  const onSubmit = (data: z.infer<typeof passwordChangeSchema>) => {
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    handleSubmit: form.handleSubmit(onSubmit),
    serverError,
  };
};
