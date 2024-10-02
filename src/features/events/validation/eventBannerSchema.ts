import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const eventBannerSchema = z.object({
  file: z
    .instanceof(File, { message: "You must upload banner" })
    .refine((file) => file.size <= 5 * 1024 * 1024, "Max file size is 5MB")
    .refine(
      (file) => ["image/jpeg", "image/png"].includes(file.type),
      "Only JPG/PNG files are allowed"
    ),
});

export type eventBannerSchema = z.infer<typeof eventBannerSchema>;
