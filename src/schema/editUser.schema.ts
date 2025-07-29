import z from "zod";

export const editUserSchema = z.object({
  id: z.string().min(1, "ID wajib diisi."),
  first_name: z.string().min(1, "Nama depan wajib diisi."),
  last_name: z.string().min(1, "Nama belakang wajib diisi."),
  gender: z.string().min(1, "Jenis kelamin wajib dipilih."),
  date_of_birth: z.string().min(1, "Tanggal lahir wajib diisi."),
  email: z.string().email("Format email tidak valid.").min(1, "Email wajib diisi."),
  phone: z.string().min(1, "Nomor telepon wajib diisi."),
  address: z.string().min(1, "Alamat wajib diisi."),
});

export type EditUserFormData = z.infer<typeof editUserSchema>;

export const editUserInitialState: EditUserFormData = {
  id: "",
  first_name: "",
  last_name: "",
  gender: "",
  date_of_birth: "",
  email: "",
  phone: "",
  address: "",
};
