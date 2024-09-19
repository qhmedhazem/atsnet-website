import { NextRequest } from "next/server";
import { Annoncement, PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { annoncementSchema } from "@/features/announcements/validation/announcementSchema";
import { z } from "zod";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const annoncements = await prisma.annoncement.findMany();

  return Response.json(annoncements, { status: 202 });
}

export async function POST(req: NextRequest) {
  const session: Session | null = await getServerSession(authOptions);
  const body = await req.json();

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  try {
    const validatedData = annoncementSchema.parse(body);

    const newAnnoncement = await prisma.annoncement.create({
      data: {
        title: validatedData.title,
        createdAt: new Date(),
        published: true,
        content: validatedData.content,
        author: {
          connect: { id: session.user.id },
        },
      },
    });

    return Response.json(newAnnoncement, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          message: "Validation errors",
          errors: error.errors,
        },
        { status: 400 }
      );
    }
  }

  return Response.json({ message: "Internal server error" }, { status: 500 });
}
