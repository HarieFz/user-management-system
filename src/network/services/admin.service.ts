import { HTTP_METHODS } from "../../constants";
import type { UpdateUserRequest, UpdateUserResponse, UsersResponse } from "../../types/admin.types";
import request from "../config/request";

const AdminService = {
  getUsers: (): Promise<UsersResponse> => {
    return request({
      url: "/admin",
      method: HTTP_METHODS.GET,
    });
  },
  updateUser: ({
    id,
    first_name,
    last_name,
    gender,
    date_of_birth,
    email,
    phone,
    address,
  }: UpdateUserRequest): Promise<UpdateUserResponse> => {
    return request({
      url: `/admin/${id}/update`,
      method: HTTP_METHODS.PUT,
      data: {
        first_name,
        last_name,
        gender,
        date_of_birth,
        email,
        phone,
        address,
      },
    });
  },
};

export { AdminService };
