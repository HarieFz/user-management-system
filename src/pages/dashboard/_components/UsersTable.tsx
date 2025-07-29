import TableHeader from "../../../components/table/TableHeader";
import Pagination from "../../../components/ui/Pagination";
import type { User } from "../../../types/admin.types";
import UserTableRow from "./UserTableRow";

interface UsersTableProps {
  users: User[];
  pageCount: number;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  handlePageClick: (selectedItem: { selected: number }) => void;
}

export default function UsersTable({ users, pageCount, onView, onEdit, handlePageClick }: UsersTableProps) {
  return (
    <div className="w-full h-fit bg-white rounded-md p-3">
      <TableHeader />

      <div className="min-h-[640px] w-full">
        {users?.map((user, index) => (
          <UserTableRow key={user._id} user={user} index={index} onView={onView} onEdit={onEdit} />
        ))}
      </div>

      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
}
