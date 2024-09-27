import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { UPLOAD_DIR } from "@/lib/middlewares/storage";

export async function GET(
  req: Request,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;

  try {
    const filePath = path.join(UPLOAD_DIR, filename);

    try {
      await fs.access(filePath);
    } catch (error) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }

    const fileBuffer = await fs.readFile(filePath);
    const fileExt = path.extname(filename).toLowerCase();
    let mimeType = "application/octet-stream";

    if (fileExt === ".jpg" || fileExt === ".jpeg") mimeType = "image/jpeg";
    else if (fileExt === ".png") mimeType = "image/png";
    else if (fileExt === ".gif") mimeType = "image/gif";

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error reading file" },
      { status: 500 }
    );
  }
}
