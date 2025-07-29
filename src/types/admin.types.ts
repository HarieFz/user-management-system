import type { BaseApiResponse } from ".";

export interface User {
  _id: string;
  name: string;
  gender: "male" | "female";
  date_of_birth: string;
  email: string;
  photo: Blob;
  phone: string;
  address: string;
}

export interface UserWithSplitName extends User {
  firstName: string;
  lastName: string;
}

export interface UsersResponse extends BaseApiResponse {
  data: User[];
}

export interface UpdateUserRequest {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  email: string;
  phone: string;
  address: string;
}

export interface UpdateUserResponse extends BaseApiResponse {
  data: User;
}
