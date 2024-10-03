import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { updateUser } from "@/features/auth/validation/userSettingsSchema";
import { z } from "zod";
import { compare, hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session.user.id === id)
    return Response.json(
      { message: "You can&apos;t delete your account" },
      { status: 403 }
    );

  if (session?.user.role !== "ADMIN")
    return Response.json({ message: "Missing Access" }, { status: 403 });

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user)
    return Response.json({ message: "User not found" }, { status: 404 });

  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return Response.json(deletedUser, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);
  const body = await req.json();

  if (!session)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  if (session.user.id === id) {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user)
      return Response.json({ message: "User not found" }, { status: 404 });

    if (!body.password)
      return Response.json(
        { message: "You must type your password" },
        { status: 400 }
      );

    try {
      const validatedData = updateUser.parse(body);

      const isValidPassword = await compare(body.password, user.password);
      if (!isValidPassword)
        return Response.json({ message: "Invaild password" }, { status: 400 });

      if (validatedData.username) {
        const updatedUser = await prisma.user.update({
          where: { id },
          data: {
            username: validatedData.username,
          },
        });

        return Response.json(updatedUser, { status: 201 });
      }

      if (validatedData.new_password) {
        const encryptedPassword = await hash(validatedData.new_password, 12);

        const updatedUser = await prisma.user.update({
          where: { id },
          data: {
            password: encryptedPassword,
            lastPasswordChange: new Date(),
          },
        });

        return Response.json(updatedUser, { status: 201 });
      }
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
  } else if (session?.user.role === "ADMIN") {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user)
      return Response.json({ message: "User not found" }, { status: 404 });

    try {
      const validatedData = updateUser.parse(body);

      if (validatedData.username) {
        const updatedUser = await prisma.user.update({
          where: { id },
          data: {
            username: validatedData.username,
          },
        });

        return Response.json(updatedUser, { status: 201 });
      }

      if (validatedData.new_password) {
        const encryptedPassword = await hash(validatedData.new_password, 12);

        const updatedUser = await prisma.user.update({
          where: { id },
          data: {
            password: encryptedPassword,
            lastPasswordChange: new Date(),
          },
        });

        return Response.json(updatedUser, { status: 201 });
      }

      return Response.json(validatedData, { status: 201 });
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
  } else {
    return Response.json({ message: "Missing Access" }, { status: 403 });
  }

  return Response.json({ message: "Internal server error" }, { status: 500 });
}
