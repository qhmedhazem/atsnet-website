import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, User } from "@prisma/client";
import { compare } from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        const user: User | null = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("No user found");
        }

        const isValidPassword = await compare(
          credentials.password,
          user.password
        );
        if (!isValidPassword) {
          throw new Error("Incorrect credentials");
        }

        return {
          id: user.id,
          fullname: user.fullname,
          username: user.username,
          lastPasswordChange: null,
          avatarURL: user.avatarURL,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.id) {
        const user = await prisma.user.findUnique({
          where: { id: token.id as string },
        });

        if (user) {
          session.user = {
            id: user.id,
            fullname: user.fullname,
            username: user.username,
            lastPasswordChange: user.lastPasswordChange,
            avatarURL: user.avatarURL,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
          };
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/api/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
  },
};

// Ensure to export the default NextAuth function with the authOptions
export default NextAuth(authOptions);
