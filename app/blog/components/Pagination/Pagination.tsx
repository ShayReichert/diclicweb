interface PaginationProps {
  currentPage: number;
  totalPages: number;
  next: () => void;
  prev: () => void;
}
const Pagination = ({ currentPage, totalPages, next, prev }: PaginationProps) => {
  return (
    <div className="pagination">
      <button onClick={prev} disabled={currentPage === 1}>
        Précédent
      </button>
      <button onClick={next} disabled={currentPage === totalPages}>
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
