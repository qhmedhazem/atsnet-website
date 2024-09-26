import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const annoncementBannerSchema = z
  .object({
    file: z
      .instanceof(File)
      .refine((file) => file.size <= 5 * 1024 * 1024, "Max file size is 5MB")
      .refine(
        (file) => ["image/jpeg", "image/png"].includes(file.type),
        "Only JPG/PNG files are allowed"
      )
      .optional()
  })
  .partial();

export type annoncementBannerSchema = z.infer<typeof annoncementBannerSchema>;
