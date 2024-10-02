import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { newsLetterSchema } from "@/features/website/validation/newsLetterSchema";
import { z } from "zod";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const validatedData = newsLetterSchema.parse(body);

    const newsLetter = await prisma.newsLetter.create({
      data: {
        email: validatedData?.email,
        subscribedAt: new Date(),
      },
    });

    return Response.json(newsLetter, { status: 201 });
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
