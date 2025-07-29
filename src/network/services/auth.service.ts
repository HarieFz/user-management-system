import { HTTP_METHODS } from "../../constants";
import type { LoginResponse, RegisterRequest, RegisterResponse } from "../../types/auth.types";
import request from "../config/request";

export const AuthService = {
  register: ({
    first_name,
    last_name,
    gender,
    date_of_birth,
    email,
    phone,
    address,
    photo,
    password,
  }: RegisterRequest): Promise<RegisterResponse> => {
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("gender", gender);
    formData.append("date_of_birth", date_of_birth);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("photo", photo);
    formData.append("password", password);

    return request({
      url: "/auth/register",
      method: HTTP_METHODS.POST,
      data: formData,
    });
  },
  login: ({ email, password }: { email: string; password: string }): Promise<LoginResponse> => {
    return request({
      url: "/auth/login",
      method: HTTP_METHODS.POST,
      data: {
        email,
        password,
      },
    });
  },
};
