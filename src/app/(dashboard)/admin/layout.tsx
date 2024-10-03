import React, { ReactNode } from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import NoAccess from "@/components/NoAccess";

interface Props {
  children: ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session || !["ADMIN", "STAFF"].includes(session.user.role))
    return <NoAccess />;

  return <>{children}</>;
}

export const revalidate = 0;
