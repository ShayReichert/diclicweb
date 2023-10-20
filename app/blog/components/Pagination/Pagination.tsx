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
        <a href="#section-categories">
          <Image src="/images/blog/arrow.png" alt="arrow-left" width={30} height={30} />
        </a>
      </button>
      <button onClick={next} disabled={currentPage === totalPages} className={styles["next"]}>
        <a href="#section-categories">
          <Image src="/images/blog/arrow.png" alt="arrow-left" width={30} height={30} />
        </a>
      </button>
    </div>
  );
};

export default Pagination;
