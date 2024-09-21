import { z } from "zod";

export const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

export const roleEnum = z.enum(["STUDENT", "TEACHER", "STAFF", "ADMIN"]);
export type roleEnum = z.infer<typeof roleEnum>;

export const usernameChangeSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(16, { message: "Username must be at most 16 characters long" })
    .regex(usernameRegex, {
      message:
        "Username can only contain alphanumeric characters and underscores",
    }),
  password: z.string().optional(),
});
export type usernameChangeSchema = z.infer<typeof usernameChangeSchema>;

export const createUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  role: roleEnum.optional().default("STUDENT"), // Optional field with a default value
});
export type createUserSchema = z.infer<typeof createUserSchema>;

export const passwordChangeSchema = z
  .object({
    password: z.string().optional(),
    new_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),

    confirm_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });
export type passwordChangeSchema = z.infer<typeof passwordChangeSchema>;

export const updateUser = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(16, { message: "Username must be at most 16 characters long" })
      .regex(usernameRegex, {
        message:
          "Username can only contain alphanumeric characters and underscores",
      }),
    password: z.string().optional(),
    new_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),

    confirm_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .partial()
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

export type updateUser = z.infer<typeof updateUser>;
