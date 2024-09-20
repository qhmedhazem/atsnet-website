import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuth } from "@/hooks/use-auth";
import { loginSchema } from "../validation/loginSchema";

export const useAuthForm = () => {
  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useAuth();

  const onSubmit = (data: loginSchema) => {
    mutation.mutate(data);
  };

  return {
    form,
    mutation,
    handleSubmit: form.handleSubmit(onSubmit),
    serverError: mutation.error,
  };
};
