import React, { useState } from "react";
import { PaginationButton, PaginationContainer } from "./styled";
import ArrowLeft from "./assets/arrowLeft.tsx";
import ArrowRight from "./assets/arrowRight.tsx";
import { Text } from "../text/styled.ts";
import { theme } from "@/assets/colors/index.ts";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    const uniquePageNumbers = [...new Set(pageNumbers)];

    return uniquePageNumbers.map((page, index) => (
      <PaginationButton
        key={index}
        $isActive={currentPage === page}
        $isDots={page === "..."}
        onClick={() => typeof page === "number" && handlePageClick(page)}
        disabled={page === "..."}
        aria-label={
          typeof page === "number" ? `Ir para a página ${page}` : undefined
        }
      >
        <Text
          fontSize="14px"
          fontWeight="500"
          color={currentPage !== page ? theme.colors.dark[2] : "#7949FF"}
        >
          {page}
        </Text>
      </PaginationButton>
    ));
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ArrowLeft />
      </PaginationButton>
      {renderPageNumbers()}
      <PaginationButton
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <ArrowRight />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
