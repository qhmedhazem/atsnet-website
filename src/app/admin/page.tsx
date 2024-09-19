import { PageLayout } from "@/components/PageLayout";
import { getSession } from "next-auth/react";
import AuthForm from "@/features/auth/components/authForm";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  console.log(session)

  return session ? (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="test"
      title="Log in"
      description="Start logging in if you're an admin."
      className="mt-8 w-full flex flex-col items-center"
    >
      <h1 className="text-3xl">Logged In</h1>
      <div className="mt-8 gap-8 flex flex-col w-full lg:w-[80%]"></div>
    </PageLayout>
  ) : (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="test"
      title="Log in"
      description="Start logging in if you're an admin."
      className="mt-8 w-full flex flex-col items-center"
    >
      <h1 className="text-3xl">Login</h1>
      <div className="mt-8 gap-8 flex flex-col w-full lg:w-[80%]">
        <AuthForm />
      </div>
    </PageLayout>
  );
}
