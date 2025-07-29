import { useDashboard } from "../../hooks/useDashboard";
import EmptyState from "./_components/conditional/EmptyState";
import ErrorState from "./_components/conditional/ErrorState";
import LoadingState from "./_components/conditional/LoadingState";
import UsersTable from "./_components/UsersTable";
import EditDialog from "./_components/EditDialog";
import ViewDialog from "./_components/ViewDialog";
import UpdateState from "./_components/conditional/UpdateState";

export default function Dashboard() {
  const {
    currentItems,
    selectedUser,
    isLoading,
    isFetching,
    error,
    pageCount,
    handlePageClick,
    openView,
    openEdit,
    handleOpenView,
    handleOpenEdit,
    handleCloseView,
    handleCloseEdit,
  } = useDashboard();

  // Loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Update state
  if (isFetching) {
    return <UpdateState />;
  }

  // Error state
  if (error) {
    return <ErrorState error={error} />;
  }

  // Empty state
  if (!currentItems || currentItems.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <UsersTable
        users={currentItems}
        pageCount={pageCount}
        onView={handleOpenView}
        onEdit={handleOpenEdit}
        handlePageClick={handlePageClick}
      />

      <ViewDialog data={selectedUser} open={openView} onClose={handleCloseView} handleOpenEdit={handleOpenEdit} />

      <EditDialog data={selectedUser} open={openEdit} onClose={handleCloseEdit} />
    </>
  );
}
