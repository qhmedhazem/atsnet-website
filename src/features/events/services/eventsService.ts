import "server-only";
import { db } from "@/lib/db";

export const fetchEventById = async (id: string) => {
  return db.event.findFirst({
    where: {
      id: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const previewEvents = async () => {
  return db.event.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchAllEvents = async () => {
  return db.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
