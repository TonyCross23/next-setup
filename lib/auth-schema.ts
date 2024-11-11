import { string, z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name field is required",
    })
    .max(50, {
      message: "Name can not exceed 50 characters",
    }),
  email: z
    .string()
    .min(1, {
      message: "Email field is required",
    })
    .max(50, {
      message: "Email can not exceed 50 characters",
    })
    .email("Invalid email"),
  password: z
    .string()
    .min(8, {
      message: "Password must be at lest 8 characters long",
    })
    .max(50, {
      message: "Password can not exceed 50 characters",
    }),
});

export const sigInFormSchema = formSchema.pick({
  email: true,
  password: true,
});
