import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SHA256 } from "crypto-js";
import { AuthService } from "../network/services/auth.service";
import Auth from "../lib/auth";
import { loginInitialState, loginSchema, type LoginFormData } from "../schema/login.schema";
import type { LoginResponse } from "../types/auth.types";

export const useLogin = () => {
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginInitialState,
  });

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: (data: LoginFormData) => {
      return AuthService.login(data);
    },
    onSuccess: (data: LoginResponse) => {
      Auth.storeUserInfoToCookie(data.data);
      navigate("/");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
      }
    },
  });

  const handleSignIn = (data: LoginFormData) => {
    signIn({
      email: data.email,
      password: SHA256(data.password).toString(),
    });
  };

  return {
    form,
    handleSignIn,
    isPending,
  };
};
