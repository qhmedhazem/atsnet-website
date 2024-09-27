import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const eventsSchema = z
  .object({
    title: z
      .string()
      .min(2, { message: "Title must be at least 2 characters long." })
      .max(128, { message: "Title must not exceed 128 characters." })
      .default("Untitled"),
    content: z
      .string()
      .max(1024, { message: "Content must not exceed 1024 characters." })
      .default(""),
    registerLink: z
      .string()
      .max(1024, { message: "register link must not exceed 1024 characters." })
      .default(""),
    location: z
      .string()
      .max(128, { message: "location must not exceed 128 characters." })
      .default(""),
    published: z.boolean().default(false),
    date: z.preprocess((arg) => {
      if (arg === undefined || arg === null) {
        return new Date();
      }
      if (typeof arg === "string") {
        return new Date(arg);
      }
      return arg;
    }, z.date()),
  })
  .partial();

export type eventsSchema = z.infer<typeof eventsSchema>;
