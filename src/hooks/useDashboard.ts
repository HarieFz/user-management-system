import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AdminService } from "../network/services/admin.service";
import { splitFullName } from "../utils/splitFullname";
import { ITEMS_PER_PAGE } from "../constants";
import type { User, UserWithSplitName } from "../types/admin.types";

export const useDashboard = () => {
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserWithSplitName | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => AdminService.getUsers(),
  });

  // Pagination logic
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = data?.data?.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = data?.data?.length ? Math.ceil(data?.data?.length / ITEMS_PER_PAGE) : 0;

  // Dialog handler
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleOpenView = (userData: User) => {
    const { firstName, lastName } = splitFullName(userData.name);
    setOpenView(true);
    setSelectedUser({ ...userData, firstName, lastName });
  };

  const handleOpenEdit = (userData: User) => {
    const { firstName, lastName } = splitFullName(userData.name);
    setOpenEdit(true);
    setSelectedUser({ ...userData, firstName, lastName });
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return {
    // Data
    currentItems,
    selectedUser,
    isLoading,
    isFetching,
    error,

    // Pagination
    currentPage,
    pageCount,
    handlePageClick,

    // Dialog states
    openView,
    openEdit,
    handleOpenView,
    handleOpenEdit,
    handleCloseView,
    handleCloseEdit,
  };
};
