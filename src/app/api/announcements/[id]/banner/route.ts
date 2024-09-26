import { NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { storageMiddleware, upload } from "@/lib/middlewares/storage";

const prisma = new PrismaClient();

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const res = new NextResponse();

  try {
    await storageMiddleware(req as any, res as any, upload.single("file"));

    const { fileId, fileExt } = req as any;
    const attachment = await db.attachment.create({
      data: {
        id: fileId,
        userId: session.user.id,
        extension: fileExt,
      },
    });

    const updatedAnnoncement = await prisma.annoncement.update({
      where: { id },
      data: {
        imageURL: `/api/cdn/${fileId}${fileExt}`,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      message: "Banner uploaded successfully!",
      filePath: `/api/cdn/${fileId}${fileExt}`,
      attachment,
      announcment: updatedAnnoncement,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to upload file or save data." },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
