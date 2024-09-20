import "server-only";
import { db } from "@/lib/db";

export const previewEvents = async () => {
  return db.event.findMany({
    where: {},
    orderBy: {
      createdAt: "asc",
    },
  });
};

export const fetchAllEvents = async () => {
  return db.event.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
};
