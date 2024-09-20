import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { eventsSchema } from "@/features/events/validation/eventsSchema";
import { z } from "zod";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const events = await prisma.event.findMany();

  return Response.json(events, { status: 202 });
}

export async function POST(req: NextRequest) {
  const session: Session | null = await getServerSession(authOptions);
  const body = await req.json();

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  try {
    const validatedData = eventsSchema.parse(body);

    const newEvent = await prisma.event.create({
      data: {
        title: validatedData?.title || "Untitled",
        createdAt: new Date(),
        date: validatedData?.date ? new Date(validatedData?.date) : new Date(),
        published: false,
        content: validatedData?.content || "",
        registerLink: "",
        author: {
          connect: { id: session.user.id },
        },
      },
    });

    return Response.json(newEvent, { status: 201 });
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
