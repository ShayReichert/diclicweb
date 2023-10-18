import { useState } from "react";

interface PaginationHook {
  currentPage: number;
  totalPages: number;
  next: () => void;
  prev: () => void;
  getPageItems: <T>(items: T[]) => T[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const usePagination = (totalItems: number, itemsPerPage: number): PaginationHook => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const next = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageItems = <T>(items: T[]): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return { currentPage, totalPages, next, prev, getPageItems, setCurrentPage };
};
