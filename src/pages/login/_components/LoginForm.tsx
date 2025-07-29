import type { UseFormReturn } from "react-hook-form";
import type { LoginFormData } from "../../../schema/login.schema";
import { TextInput } from "../../../components/form/TextInput";

interface LoginFormProps {
  form: UseFormReturn<LoginFormData>;
  onSubmit: (data: LoginFormData) => void;
  isPending: boolean;
}

export default function LoginForm({ form, onSubmit, isPending }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[405px] flex flex-col gap-6">
      <h1 className="font-bold text-[32px] leading-none text-black mb-4">Login Admin</h1>

      <TextInput
        {...register("email")}
        id="email"
        label="Email"
        placeholder="Masukkan email"
        error={errors.email?.message}
      />

      <TextInput
        {...register("password")}
        type="password"
        id="password"
        label="Password"
        placeholder="Masukkan password"
        error={errors.password?.message}
      />

      <button type="submit" className="btn" disabled={isPending}>
        {isPending ? "Loading..." : "Masuk"}
      </button>
    </form>
  );
}
