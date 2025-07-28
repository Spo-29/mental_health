import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Debug pagination props
  console.log("🟢 PAGINATION COMPONENT PROPS:");
  console.log("🟢 currentPage:", currentPage);
  console.log("🟢 totalPages:", totalPages);
  console.log(
    "🟢 onPageChange function exists:",
    typeof onPageChange === "function"
  );

  // Generate page numbers with different logic pattern
  const generatePageNumbers = () => {
    const pageList = [];
    const maxVisible = 5;

    // Simple logic: always show all pages if <= 5
    if (totalPages <= maxVisible) {
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        pageList.push(pageNum);
      }
      return pageList;
    }

    // Complex pagination logic for more than 5 pages
    if (currentPage <= 3) {
      // Show: 1 2 3 4 ... last
      pageList.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Show: 1 ... (last-3) (last-2) (last-1) last
      pageList.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      // Show: 1 ... (current-1) current (current+1) ... last
      pageList.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pageList;
  };

  const pageNumbers = generatePageNumbers();

  // Handle page click events
  const handlePageClick = (pageNumber) => {
    console.log("🔥 PAGINATION: Button clicked for page", pageNumber);
    console.log("🔥 PAGINATION: Type of pageNumber:", typeof pageNumber);
    console.log("🔥 PAGINATION: Current page is:", currentPage);

    if (typeof pageNumber === "number" && pageNumber !== currentPage) {
      console.log("🔥 PAGINATION: Calling onPageChange with:", pageNumber);
      onPageChange(pageNumber);
      console.log("🔥 PAGINATION: onPageChange called successfully");
    } else {
      console.log("🔥 PAGINATION: Click ignored - same page or invalid type");
    }
  };

  const handlePreviousClick = () => {
    console.log("🔥 PAGINATION: Previous button clicked");
    if (currentPage > 1) {
      console.log("🔥 PAGINATION: Going to previous page:", currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    console.log("🔥 PAGINATION: Next button clicked");
    if (currentPage < totalPages) {
      console.log("🔥 PAGINATION: Going to next page:", currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        className="pagination-btn"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
        type="button"
      >
        Previous
      </button>

      {/* Page Number Buttons */}
      {pageNumbers.map((pageNum, idx) => (
        <button
          key={`page-${idx}-${pageNum}`}
          className={`pagination-btn ${
            pageNum === currentPage ? "active" : ""
          } ${pageNum === "..." ? "ellipsis" : ""}`}
          onClick={() => handlePageClick(pageNum)}
          disabled={pageNum === "..."}
          type="button"
        >
          {pageNum}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="pagination-btn"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
