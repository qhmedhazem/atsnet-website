import { NextRequest } from "next/server";
import { Annoncement, PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { annoncementSchema } from "@/features/announcements/validation/announcementSchema";
import { z } from "zod";

const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);
  const body = await req.json();

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  const annoncement = await prisma.annoncement.findUnique({
    where: { id: id },
  });

  if (!annoncement)
    return Response.json({ message: "Annoncement not found" }, { status: 404 });

  const userWithAnnoncements = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { annoncements: true },
  });

  if (!userWithAnnoncements?.annoncements.some((item) => item.id === id))
    return Response.json({ message: "Missing Access" }, { status: 403 });

  try {
    const validatedData = annoncementSchema.parse(body);

    const updatedAnnoncement = await prisma.annoncement.update({
      where: { id },
      data: {
        title: validatedData.title,
        updatedAt: new Date(),
        content: validatedData.content,
      },
    });

    return Response.json(updatedAnnoncement, { status: 201 });
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);
  const body = await req.json();

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  const annoncement = await prisma.annoncement.findUnique({
    where: { id: id },
  });

  if (!annoncement)
    return Response.json({ message: "Annoncement not found" }, { status: 404 });

  const userWithAnnoncements = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { annoncements: true },
  });

  if (!userWithAnnoncements?.annoncements.some((item) => item.id === id))
    return Response.json({ message: "Missing Access" }, { status: 403 });

  try {
    const deletedAnnoncement = await prisma.annoncement.delete({
      where: { id },
    });

    return Response.json(deletedAnnoncement, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
