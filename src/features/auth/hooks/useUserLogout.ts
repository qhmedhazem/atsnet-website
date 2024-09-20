import { useCallback } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useUserLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    signOut();
    router.push("/");
  }, [signOut]);

  return {
    logout,
  };
};
