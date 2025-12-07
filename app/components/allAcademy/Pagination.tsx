// components/institutes/Pagination.tsx
"use client";

import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
}: PaginationProps) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      // اینجا باید با API یا State Management ارتباط برقرار شود
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // نمایش همه صفحات
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
              activePage === i
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // نمایش با Ellipsis
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
            activePage === 1
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          }`}
        >
          ۱
        </button>
      );

      if (activePage > 3) {
        pages.push(
          <span
            key="ellipsis1"
            className="w-10 h-10 flex items-center justify-center text-gray-400"
          >
            ...
          </span>
        );
      }

      const startPage = Math.max(2, activePage - 1);
      const endPage = Math.min(totalPages - 1, activePage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
              activePage === i
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            {i}
          </button>
        );
      }

      if (activePage < totalPages - 2) {
        pages.push(
          <span
            key="ellipsis2"
            className="w-10 h-10 flex items-center justify-center text-gray-400"
          >
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
            activePage === totalPages
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="mt-12">
      {/* Pagination Info */}
      <div className="text-center mb-6">
        <p className="text-gray-600">
          نمایش صفحه{" "}
          <span className="font-bold text-gray-800">
            {activePage.toLocaleString("fa-IR")}
          </span>{" "}
          از{" "}
          <span className="font-bold text-gray-800">
            {totalPages.toLocaleString("fa-IR")}
          </span>{" "}
          (مجموع{" "}
          <span className="font-bold text-blue-600">
            {totalItems.toLocaleString("fa-IR")}
          </span>{" "}
          آموزشگاه)
        </p>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600 disabled:hover:bg-white"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600 disabled:hover:bg-white"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>

      {/* Jump to Page */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="text-sm text-gray-600">رفتن به صفحه:</span>
        <input
          type="number"
          min="1"
          max={totalPages}
          defaultValue={activePage}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              const value = parseInt((e.target as HTMLInputElement).value);
              if (value >= 1 && value <= totalPages) {
                handlePageChange(value);
              }
            }
          }}
          className="w-16 px-3 py-2 text-center bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
