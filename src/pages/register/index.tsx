import { useRegister } from "../../hooks/useRegister";
import RegisterForm from "./_component/RegisterForm";
import RegisterIllustration from "./_component/RegisterIllustration";

export default function Register() {
  const {
    form,
    handleSignUp,
    isPending,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  } = useRegister();

  return (
    <main className="min-h-dvh w-full h-full flex font-montserrat">
      <RegisterIllustration />
      <div className="w-full flex flex-col items-center py-20">
        <RegisterForm
          form={form}
          onSubmit={handleSignUp}
          isPending={isPending}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          onTogglePassword={togglePasswordVisibility}
          onToggleConfirmPassword={toggleConfirmPasswordVisibility}
        />
      </div>
    </main>
  );
}
