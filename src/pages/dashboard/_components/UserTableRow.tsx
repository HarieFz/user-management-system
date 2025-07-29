import dayjs from "dayjs";
import UserActions from "./UserActions";
import StatusBadge from "../../../components/table/StatusBadge";
import type { User } from "../../../types/admin.types";

interface UserTableRowProps {
  user: User;
  index: number;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
}

export default function UserTableRow({ user, index, onView, onEdit }: UserTableRowProps) {
  const isEvenRow = index % 2 === 0;

  return (
    <div
      className={`w-full ${isEvenRow ? "bg-[#FFF4ED]" : "bg-transparent"} flex items-center justify-between gap-4 p-4`}
    >
      <p className="w-full font-medium text-sm text-center text-black">{user._id}</p>

      <p className="w-full font-medium text-sm capitalize text-black">{user.name}</p>

      <p className="w-full font-medium text-sm text-black">{dayjs(user.date_of_birth).format("DD/MM/YYYY")}</p>

      <StatusBadge status="Registered" />

      <UserActions user={user} onView={onView} onEdit={onEdit} />
    </div>
  );
}
