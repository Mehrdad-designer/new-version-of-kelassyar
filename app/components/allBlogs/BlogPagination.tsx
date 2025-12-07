// components/blog/BlogPagination.tsx
"use client";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function BlogPagination({
  currentPage,
  totalPages,
}: BlogPaginationProps) {
  const pages = [];

  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          className={`min-w-[40px] h-10 px-3 rounded-lg font-medium transition-all ${
            page === currentPage
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
              : page === "..."
              ? "bg-transparent text-gray-400 cursor-default"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
          }`}
        >
          {typeof page === "number" ? page.toLocaleString("fa-IR") : page}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
    </div>
  );
}
