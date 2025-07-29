import Illustration from "../../../assets/images/auth-illustration.png";
import Logo from "../../../assets/logos/logo-1.png";

export default function AuthIllustration() {
  return (
    <div className="relative shrink-0 w-[548px] h-dvh bg-[#FD5725] p-15">
      <div className="absolute -top-[62px] -left-[214px] w-[605px] h-[552px] opacity-25">
        <img src={Illustration} alt="illustration" className="w-full h-full" />
      </div>

      <img src={Logo} alt="logo" className="w-auto h-8" />
    </div>
  );
}
