import { ObjectId } from "mongodb";
import multer from "multer";
import path from "path";
import fs from "fs";
import type { NextApiRequest } from "next";

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

export const upload = multer({ storage });

export const storageMiddleware = (
  req: NextApiRequest,
  res: any,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
};
