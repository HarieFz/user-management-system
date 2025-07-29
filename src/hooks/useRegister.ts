import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthService } from "../network/services/auth.service";
import { registerInitialState, registerSchema, type RegisterFormData } from "../schema/register.schema";
import type { RegisterRequest } from "../types/auth.types";
import { SHA256 } from "crypto-js";

export const useRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: registerInitialState,
  });

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: (data: RegisterRequest) => {
      return AuthService.register(data);
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error("Register error:", error.message);
      }
    },
  });

  const handleSignUp = (data: RegisterFormData) => {
    const photoFile = data.photo && data.photo.length > 0 ? data.photo[0] : null;

    if (!photoFile) {
      console.error("No photo file selected");
      return;
    }

    signUp({
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      email: data.email,
      phone: data.phone,
      address: data.address,
      photo: photoFile,
      password: SHA256(data.password).toString(),
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return {
    form,
    handleSignUp,
    isPending,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  };
};
