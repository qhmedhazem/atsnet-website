import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { contactSchema } from "@/features/contact/validation/contactSchema";
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

  const message = await prisma.message.findUnique({
    where: { id: id },
  });

  if (!message)
    return Response.json({ message: "Message not found" }, { status: 404 });

  try {
    const updatedMessage = await prisma.message.update({
      where: { id },
      data: {
        replied: body?.replied,
      },
    });

    return Response.json(updatedMessage, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  const message = await prisma.message.findUnique({
    where: { id: id },
  });

  if (!message)
    return Response.json({ message: "Message not found" }, { status: 404 });

  try {
    const deletedMessage = await prisma.message.delete({
      where: { id },
    });

    return Response.json(deletedMessage, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
