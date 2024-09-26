// app/api/upload/route.ts

import { NextResponse } from "next/server";
import { getServerSession, Session } from "next-auth";
import { ObjectId } from "mongodb";
import multer from "multer";
import path from "path";
import fs from "fs";
import type { NextApiRequest } from "next";
import authOptions from "@/lib/authOptions";
import { db } from "@/lib/db";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const objectId = new ObjectId();
    const ext = path.extname(file.originalname);
    cb(null, `${objectId}${ext}`);
    (req as any).fileId = objectId.toString();
    (req as any).fileExt = ext;
  },
});

// Multer instance
const upload = multer({ storage });

const runMiddleware = (req: NextApiRequest, res: any, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
};

export async function POST(req: Request) {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const res = new NextResponse();

  try {
    await runMiddleware(req as any, res as any, upload.single("file"));

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
      filePath: `/uploads/${fileId}${fileExt}`,
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
