import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminService } from "../network/services/admin.service";
import type { UpdateUserRequest, UserWithSplitName } from "../types/admin.types";
import { editUserInitialState, editUserSchema, type EditUserFormData } from "../schema/editUser.schema";
import dayjs from "dayjs";

interface UseEditUserProps {
  user: UserWithSplitName | undefined;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useEditUser = ({ user, onSuccess, onError }: UseEditUserProps) => {
  const queryClient = useQueryClient();

  const form = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: editUserInitialState,
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  // Update form when user data changes
  const transformUserToFormData = (user: UserWithSplitName): EditUserFormData => {
    return {
      id: user._id,
      first_name: user.firstName,
      last_name: user.lastName,
      gender: user.gender,
      date_of_birth: dayjs(user.date_of_birth).format("YYYY-MM-DD"),
      email: user.email,
      phone: user.phone,
      address: user.address,
    };
  };

  useEffect(() => {
    if (user) {
      const formData = transformUserToFormData(user);
      reset(formData);
    }
  }, [user, reset]);

  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: UpdateUserRequest) => {
      return AdminService.updateUser(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      if (onSuccess) {
        onSuccess();
      } else {
        console.log("User updated successfully");
      }
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error("Update user error:", error.message);
      }

      if (onError) {
        onError(error);
      }
    },
  });

  const handleUpdateUser = (data: EditUserFormData) => {
    updateUser({
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });
  };

  return {
    form,
    handleSubmit: handleSubmit(handleUpdateUser),
    isPending,
    error,
    errors,
    watch,
  };
};
