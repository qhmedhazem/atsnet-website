import React, { ReactNode } from "react";
import SettingsLayout from "@/components/SettingsLayout";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { PageLayout } from "@/components/PageLayout";
import AuthForm from "@/features/auth/components/AuthForm";

interface Props {
  children: ReactNode;
}

export default async function UserLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <PageLayout
        imageSrc="/landing2.jpg"
        imageAlt="test"
        title="Log in"
        description="Start logging in if you're admin."
        className="mt-8 w-full flex flex-col items-center"
      >
        <h1 className="text-3xl">Login</h1>
        <div className="mt-8 gap-8 flex flex-col w-full lg:w-[80%]">
          <AuthForm />
        </div>
      </PageLayout>
    );
  }

  return <SettingsLayout>{children}</SettingsLayout>;
}
