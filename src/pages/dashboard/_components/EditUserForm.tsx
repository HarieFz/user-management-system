/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormReturn } from "react-hook-form";
import type { EditUserFormData } from "../../../schema/editUser.schema";
import { TextInput } from "../../../components/form/TextInput";
import { SelectInput } from "../../../components/form/SelecInput";
import { GENDER_OPTIONS } from "../../../constants";

interface EditUserFormProps {
  form: UseFormReturn<EditUserFormData>;
  onSubmit: () => void;
  isPending: boolean;
  errors: any;
}

export default function EditUserForm({ form, onSubmit, isPending, errors }: EditUserFormProps) {
  const { register } = form;

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        <TextInput
          {...register("first_name")}
          id="first_name"
          label="Nama Depan"
          placeholder="Masukkan Nama Depan"
          error={errors.first_name?.message}
        />

        <TextInput
          {...register("last_name")}
          id="last_name"
          label="Nama Belakang"
          placeholder="Masukkan Nama Belakang"
          error={errors.last_name?.message}
        />

        <SelectInput
          {...register("gender")}
          id="gender"
          label="Jenis Kelamin"
          placeholder="Pilih jenis kelamin"
          options={GENDER_OPTIONS}
          error={errors.gender?.message}
        />

        <TextInput
          {...register("date_of_birth")}
          id="date_of_birth"
          type="date"
          label="Tanggal Lahir"
          placeholder="Masukkan Tanggal Lahir"
          error={errors.date_of_birth?.message}
        />

        <div className="col-span-2">
          <TextInput
            {...register("email")}
            id="email"
            type="email"
            label="Email"
            placeholder="Masukkan Email"
            error={errors.email?.message}
          />
        </div>

        <div className="col-span-2">
          <TextInput
            {...register("phone")}
            id="phone"
            label="No. Handphone"
            placeholder="Masukkan No. Handphone"
            error={errors.phone?.message}
          />
        </div>

        <div className="col-span-2">
          <TextInput
            {...register("address")}
            id="address"
            label="Alamat"
            placeholder="Masukkan Alamat"
            error={errors.address?.message}
          />
        </div>
      </div>

      <button type="submit" className="btn" disabled={isPending}>
        {isPending ? "Loading..." : "Simpan"}
      </button>
    </form>
  );
}
