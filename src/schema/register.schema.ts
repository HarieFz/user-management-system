import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

export const registerSchema = z
  .object({
    first_name: z.string().min(1, "Nama depan wajib diisi."),
    last_name: z.string().min(1, "Nama belakang wajib diisi."),
    gender: z.string().min(1, "Jenis kelamin wajib dipilih."),
    date_of_birth: z.string().min(1, "Tanggal lahir wajib diisi."),
    email: z.email("Format email tidak valid.").min(1, "Email wajib diisi."),
    phone: z.string().min(1, "Nomor telepon wajib diisi."),
    address: z.string().min(1, "Alamat wajib diisi."),
    photo: z
      .custom<FileList>(
        (fileList) => {
          return fileList instanceof FileList && fileList.length > 0;
        },
        {
          message: "Foto wajib diunggah.",
        }
      )
      .refine(
        (fileList) => {
          const file = fileList[0];
          return file && file.size <= MAX_FILE_SIZE;
        },
        {
          message: "Ukuran maksimal foto adalah 5MB.",
        }
      )
      .refine(
        (fileList) => {
          const file = fileList[0];
          return file && ACCEPTED_IMAGE_TYPES.includes(file.type);
        },
        {
          message: "Format yang diperbolehkan hanya .jpg atau .jpeg.",
        }
      ),
    password: z
      .string()
      .min(8, "Kata sandi minimal 8 karakter.")
      .regex(/[A-Z]/, "Kata sandi harus mengandung huruf kapital.")
      .regex(/[a-z]/, "Kata sandi harus mengandung huruf kecil.")
      .regex(/[0-9]/, "Kata sandi harus mengandung angka."),
    confirm_password: z
      .string()
      .min(8, "Kata sandi konfirmasi minimal 8 karakter.")
      .regex(/[A-Z]/, "Kata sandi konfirmasi harus mengandung huruf kapital.")
      .regex(/[a-z]/, "Kata sandi konfirmasi harus mengandung huruf kecil.")
      .regex(/[0-9]/, "Kata sandi konfirmasi harus mengandung angka."),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Kata sandi dan konfirmasi tidak cocok.",
    path: ["confirm_password"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const registerInitialState: Omit<RegisterFormData, "photo"> & { photo: undefined } = {
  first_name: "",
  last_name: "",
  gender: "",
  date_of_birth: "",
  email: "",
  phone: "",
  address: "",
  photo: undefined,
  password: "",
  confirm_password: "",
};

export const getFileFromFileList = (fileList: FileList | null | undefined): File | null => {
  if (!fileList || fileList.length === 0) return null;
  return fileList[0];
};
