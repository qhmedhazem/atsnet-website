import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

interface SignInOptions {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();

  const mutate = async (options: SignInOptions) => {
    setIsPending(true);
    setIsError(false);
    setIsSuccess(false);
    setError(null);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: options.email,
        password: options.password,
      });

      if (res?.error) {
        setError(res.error);
        setIsError(true);
        setIsPending(false);
        return;
      }

      router.refresh();
      setIsSuccess(true);
    } catch (error) {
      console.error("Sign in error:", error);
      setError("Something went wrong. Please try again.");
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return {
    mutate,
    isPending,
    isError,
    isSuccess,
    error,
  };
};
