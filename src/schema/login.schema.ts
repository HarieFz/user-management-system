import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Format email tidak valid.").min(1, "Email wajib diisi."),
  password: z.string().min(8, "Kata sandi minimal 8 karakter."),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginInitialState: LoginFormData = {
  email: "",
  password: "",
};
