import "server-only";
import { db } from "@/lib/db";

export const fetchMessageById = async (id: string) => {
  return db.message.findFirst({
    where: {
      id: id,
    },
  });
};

export const fetchAllMessages = async () => {
  return db.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
