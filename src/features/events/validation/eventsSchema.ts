import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const eventsSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long." })
    .max(128, { message: "Title must not exceed 128 characters." }),
  content: z
    .string()
    .max(500, { message: "Content must not exceed 500 characters." }),
});

export type eventsSchema = z.infer<typeof eventsSchema>;
