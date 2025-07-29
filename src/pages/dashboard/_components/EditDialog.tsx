import { Dialog } from "../../../components/ui/Dialog";
import { useEditUser } from "../../../hooks/useEditUser";
import type { UserWithSplitName } from "../../../types/admin.types";
import EditUserForm from "./EditUserForm";

interface EditDialogProps {
  data: UserWithSplitName | undefined;
  open: boolean;
  onClose: () => void;
}

export default function EditDialog({ data, open, onClose }: EditDialogProps) {
  const handleSuccess = () => {
    onClose(); // Close dialog on fetched
  };

  const handleError = (error: unknown) => {
    console.error("Failed to update user:", error);
  };

  const { form, handleSubmit, isPending, errors } = useEditUser({
    user: data,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  if (!open) return null;

  return (
    <Dialog title="Edit User" open={open} onClose={onClose}>
      <EditUserForm form={form} onSubmit={handleSubmit} isPending={isPending} errors={errors} />
    </Dialog>
  );
}
