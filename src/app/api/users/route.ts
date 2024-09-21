import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { createUserSchema } from "@/features/auth/validation/userSettingsSchema";
import { z } from "zod";
import { hash } from "bcryptjs";

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
    const validatedData = createUserSchema.parse(body);
    const encryptedPassword = await hash(validatedData.password, 12);

    const newUser = await prisma.user.create({
      data: {
        username: validatedData.username,
        fullname: validatedData.fullname,
        email: validatedData.email,
        password: encryptedPassword,
        role: validatedData.role,
      },
    });

    return Response.json(newUser, { status: 201 });
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
