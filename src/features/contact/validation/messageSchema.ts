import { z } from "zod";

export const messageSchema = z
  .object({
    replied: z.boolean(),
  })
  .partial();

export type messageSchema = z.infer<typeof messageSchema>;
