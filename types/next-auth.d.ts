import { Role } from "@prisma/client";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    fullname: string;
    username: string;
    avatarURL: string | null;
    email: string;
    lastPasswordChange: Date | null;
    role: Role;
    createdAt: Date;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
    fullname: string;
    username: string;
    avatarURL: string | null;
    email: string;
    lastPasswordChange: Date | null;
    role: string;
    createdAt: Date;
  }
}
