import type { UseFormReturn } from "react-hook-form";
import { TextInput } from "../../../components/form/TextInput";
import { PasswordInput } from "../../../components/form/PasswordInput";
import { FileUpload } from "../../../components/form/FileUpload";
import type { RegisterFormData } from "../../../schema/register.schema";
import { SelectInput } from "../../../components/form/SelecInput";
import { GENDER_OPTIONS } from "../../../constants";

interface RegisterFormProps {
  form: UseFormReturn<RegisterFormData>;
  onSubmit: (data: RegisterFormData) => void;
  isPending: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
}

export default function RegisterForm({
  form,
  onSubmit,
  isPending,
  showPassword,
  showConfirmPassword,
  onTogglePassword,
  onToggleConfirmPassword,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[405px] flex flex-col gap-6">
      <h1 className="font-bold text-[32px] leading-none text-black mb-4">Daftar</h1>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          {...register("first_name")}
          id="first_name"
          label="Nama Depan"
          placeholder="Masukkan nama depan"
          error={errors.first_name?.message}
        />

        <TextInput
          {...register("last_name")}
          id="last_name"
          label="Nama Belakang"
          placeholder="Masukkan nama belakang"
          error={errors.last_name?.message}
        />

        <SelectInput
          {...register("gender")}
          id="gender"
          label="Jenis Kelamin"
          placeholder="Pilih jenis kelamin"
          options={GENDER_OPTIONS}
          error={errors.gender?.message}
          defaultValue=""
        />

        <TextInput
          {...register("date_of_birth")}
          id="date_of_birth"
          type="date"
          label="Tanggal Lahir"
          placeholder="Masukkan tanggal lahir"
          error={errors.date_of_birth?.message}
        />

        <div className="col-span-2">
          <TextInput
            {...register("email")}
            id="email"
            type="email"
            label="Email"
            placeholder="Masukkan email"
            error={errors.email?.message}
          />
        </div>

        <div className="col-span-2">
          <TextInput
            {...register("phone")}
            id="phone"
            label="No. Handphone"
            placeholder="Masukkan no. handphone"
            error={errors.phone?.message}
          />
        </div>

        <div className="col-span-2">
          <TextInput
            {...register("address")}
            id="address"
            label="Alamat"
            placeholder="Masukkan alamat"
            error={errors.address?.message}
          />
        </div>

        <PasswordInput
          {...register("password")}
          id="password"
          label="Password"
          placeholder="Masukkan password"
          showPassword={showPassword}
          onToggleVisibility={onTogglePassword}
          error={errors.password?.message}
        />

        <PasswordInput
          {...register("confirm_password")}
          id="confirm_password"
          label="Konfirmasi Password"
          placeholder="Masukkan konfirmasi password"
          showPassword={showConfirmPassword}
          onToggleVisibility={onToggleConfirmPassword}
          error={errors.confirm_password?.message}
        />

        <div className="col-span-2">
          <FileUpload
            {...register("photo")}
            id="photo"
            label="Foto Profil"
            placeholder="Pilih foto profil"
            accept="image/jpeg, image/jpg"
            error={errors.photo?.message}
          />
        </div>
      </div>

      <button type="submit" className="btn" disabled={isPending}>
        {isPending ? "Loading..." : "Tambah"}
      </button>
    </form>
  );
}
