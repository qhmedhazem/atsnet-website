import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { eventsSchema } from "@/features/events/validation/eventsSchema";
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

  const event = await prisma.event.findUnique({
    where: { id: id },
  });

  if (!event)
    return Response.json({ message: "Event not found" }, { status: 404 });

  try {
    const validatedData = eventsSchema.parse(body);

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title: validatedData.title,
        updatedAt: new Date(),
        content: validatedData.content,
      },
    });

    return Response.json(updatedEvent, { status: 201 });
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

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  const event = await prisma.event.findUnique({
    where: { id: id },
  });

  if (!event)
    return Response.json({ message: "Event not found" }, { status: 404 });

  const userWithEvents = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { events: true },
  });

  if (!userWithEvents?.events.some((item) => item.id === id))
    return Response.json({ message: "Missing Access" }, { status: 403 });

  try {
    const deletedEvent = await prisma.event.delete({
      where: { id },
    });

    return Response.json(deletedEvent, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
