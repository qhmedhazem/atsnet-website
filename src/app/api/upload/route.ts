import { NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import authOptions from "@/lib/authOptions";
import { db } from "@/lib/db";
import { storageMiddleware, upload } from "@/lib/middlewares/storage";

export async function POST(req: Request) {
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

    return NextResponse.json({
      message: "File uploaded successfully!",
      filePath: `/api/cdn/${fileId}${fileExt}`,
      attachment,
    });
  } catch (error) {
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
