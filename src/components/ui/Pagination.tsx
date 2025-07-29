import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
  if (pageCount === 0) return null;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={onPageChange}
      pageCount={pageCount}
      previousLabel="previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page-item"
      activeClassName="active"
      previousClassName="prev"
      nextClassName="next"
      disabledClassName="disable"
    />
  );
}
