import "server-only";
import { db } from "@/lib/db";

export const fetchAnnouncementById = async (id: string) => {
  return db.annoncement.findFirst({
    where: {
      id: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const previewAnnouncements = async (limit?: number) => {
  return db.annoncement.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  });
};

export const fetchAllAnnouncements = async () => {
  return db.annoncement.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
