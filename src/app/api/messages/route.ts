import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { contactSchema } from "@/features/contact/validation/contactSchema";
import { z } from "zod";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const validatedData = contactSchema.parse(body);

    const newMessage = await prisma.message.create({
      data: {
        content: validatedData?.message || "Untitled",
        createdAt: new Date(),
        name: validatedData?.fullname || "Unknown User",
        email: validatedData?.email,
        phone: validatedData?.phone || "Unknown",
        replied: false,
      },
    });

    return Response.json(newMessage, { status: 201 });
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
