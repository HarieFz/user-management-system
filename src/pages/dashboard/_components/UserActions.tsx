import { HiEye, HiOutlinePencilAlt } from "react-icons/hi";
import type { User } from "../../../types/admin.types";

interface UserActionsProps {
  user: User;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
}

export default function UserActions({ user, onView, onEdit }: UserActionsProps) {
  return (
    <div className="w-full h-fit flex items-center justify-center gap-6">
      <button
        className="flex items-center gap-2 font-medium text-sm text-[#FD5725] hover:opacity-80 transition-opacity"
        onClick={() => onView(user)}
      >
        <HiEye size={24} color="#FD5725" />
        <p>Lihat</p>
      </button>

      <button
        className="flex items-center gap-2 font-medium text-sm text-[#FD5725] hover:opacity-80 transition-opacity"
        onClick={() => onEdit(user)}
      >
        <HiOutlinePencilAlt size={24} color="#FD5725" />
        <p>Edit</p>
      </button>
    </div>
  );
}
