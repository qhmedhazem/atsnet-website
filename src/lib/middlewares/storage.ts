import "server-only";

import type { NextRequest } from "next/server";
import path from "path";
import { ObjectId } from "mongodb";
import fs from "fs/promises";
import { Attachment, User } from "@prisma/client";
import { db } from "../db";

export const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "uploads");

export const storageMiddleware = async (
  req: NextRequest,
  user: Partial<User>
): Promise<Attachment | null> => {
  if (!user.id) return null;

  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as Blob) || null;

  if (file) {
    const id = new ObjectId();
    const name = id.toString();
    const ext = path.extname((file as File).name);
    const filename = name + ext;

    const buffer = Buffer.from(await file.arrayBuffer());
    try {
      try {
        await fs.access(UPLOAD_DIR);
      } catch {
        await fs.mkdir(UPLOAD_DIR);
      }
      await fs.writeFile(path.resolve(UPLOAD_DIR, filename), buffer);

      return db.attachment.create({
        data: {
          id: name,
          userId: user.id,
          extension: ext,
        },
      });
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  return null;
};
