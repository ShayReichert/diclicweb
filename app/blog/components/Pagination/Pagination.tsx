import Image from "next/image";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  next: () => void;
  prev: () => void;
}

const Pagination = ({ currentPage, totalPages, next, prev }: PaginationProps) => {
  return (
    <div className={styles["pagination"]}>
      <button onClick={prev} disabled={currentPage === 1} className={styles["previous"]}>
        <Image src="/images/blog/arrow.png" alt="arrow-left" width={40} height={40} />
      </button>
      <button onClick={next} disabled={currentPage === totalPages} className={styles["next"]}>
        <Image src="/images/blog/arrow.png" alt="arrow-left" width={40} height={40} />
      </button>
    </div>
  );
};

export default Pagination;
