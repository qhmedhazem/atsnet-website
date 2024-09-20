import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const annoncementSchema = z
  .object({
    title: z
      .string()
      .min(2, { message: "Title must be at least 2 characters long." })
      .max(128, { message: "Title must not exceed 128 characters." })
      .default("Untitled"),
    content: z
      .string()
      .max(6096, { message: "Content must not exceed 6096 characters." })
      .default(""),
    published: z.boolean().default(false),
  })
  .partial();

export type annoncementSchema = z.infer<typeof annoncementSchema>;
