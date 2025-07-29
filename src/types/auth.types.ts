import type { BaseApiResponse } from ".";

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  email: string;
  phone: string;
  address: string;
  photo: File;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterResponse extends BaseApiResponse {
  data: {
    name: string;
    email: string;
  };
}

export interface LoginResponse extends BaseApiResponse {
  data: {
    name: string;
    email: string;
    token: string;
  };
}
