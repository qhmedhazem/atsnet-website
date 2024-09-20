import "server-only";
import { db } from "@/lib/db";

export const fetchUserById = async (id: string) => {
  return db.user.findFirst({
    where: {
      id: id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      fullname: true,
      username: true,
      role: true,
      lastPasswordChange: true,
      avatarURL: true,
      email: true,
      createdAt: true,
    },
  });
};

export const fetchAllUsers = async () => {
  return db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      fullname: true,
      username: true,
      role: true,
      lastPasswordChange: true,
      avatarURL: true,
      email: true,
      createdAt: true,
    },
  });
};
