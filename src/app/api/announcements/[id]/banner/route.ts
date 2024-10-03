import { NextRequest, NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { storageMiddleware } from "@/lib/middlewares/storage";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const attachment = await storageMiddleware(req, session.user);
    if (!attachment) {
      return NextResponse.json(
        {
          message: "Failed to upload file or save data.",
        },
        {
          status: 400,
        }
      );
    }

    const updatedAnnoncement = await db.annoncement.update({
      where: { id },
      data: {
        imageURL: `/api/cdn/${attachment.id}${attachment.extension}`,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedAnnoncement);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to upload file or save data." },
      { status: 500 }
    );
  }
}
