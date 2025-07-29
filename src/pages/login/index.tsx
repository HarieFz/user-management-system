import AuthIllustration from "./_components/AuthIllustration";
import LoginForm from "./_components/LoginForm";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { form, handleSignIn, isPending } = useLogin();

  return (
    <main className="min-h-dvh w-full h-full font-montserrat">
      <div className="w-full h-full flex">
        <AuthIllustration />
        <div className="w-full flex flex-col items-center pt-20">
          <LoginForm form={form} onSubmit={handleSignIn} isPending={isPending} />
        </div>
      </div>
    </main>
  );
}
