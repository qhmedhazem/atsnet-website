import "server-only";
import { db } from "@/lib/db";

export const fetchActivityById = async (id: string) => {
  return db.activity.findFirst({
    where: {
      id: id,
    },
    include: {
      teams: {
        select: {
          id: true,
          members: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const previewActivities = async (limit?: number) => {
  return db.activity
    .findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        teams: {
          select: {
            id: true,
            members: true,
          },
        },
      },
      take: limit,
    })
    .catch((e) => [])
    .then((res) => res);
};

export const fetchAllActivities = async () => {
  return db.activity.findMany({
    include: {
      teams: {
        select: {
          id: true,
          members: true,
        },
      },
    },
  });
};
