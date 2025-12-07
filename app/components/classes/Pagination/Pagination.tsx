// components/classes/Pagination.tsx
"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    if (totalPages <= 5) return i + 1;
    if (currentPage <= 3) return i + 1;
    if (currentPage >= totalPages - 2) return totalPages - 4 + i;
    return currentPage - 2 + i;
  });

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button>

      {/* First Page */}
      {currentPage > 3 && totalPages > 5 && (
        <>
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center font-medium">
            ۱
          </button>
          <span className="text-gray-400">...</span>
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-lg font-medium transition-colors flex items-center justify-center ${
            currentPage === page
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          {page.toLocaleString("fa-IR")}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < totalPages - 2 && totalPages > 5 && (
        <>
          <span className="text-gray-400">...</span>
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center font-medium">
            {totalPages.toLocaleString("fa-IR")}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
    </div>
  );
}
