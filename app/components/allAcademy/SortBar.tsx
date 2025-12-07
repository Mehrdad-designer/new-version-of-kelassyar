// components/institutes/SortBar.tsx
"use client";

import { useState } from "react";

interface SortBarProps {
  totalCount: number;
}

export default function SortBar({ totalCount }: SortBarProps) {
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const sortOptions = [
    { value: "popular", label: "محبوب‌ترین", icon: "fa-fire" },
    { value: "newest", label: "جدیدترین", icon: "fa-clock" },
    { value: "rating", label: "بالاترین امتیاز", icon: "fa-star" },
    { value: "most_classes", label: "بیشترین کلاس", icon: "fa-chalkboard" },
    { value: "most_students", label: "بیشترین هنرجو", icon: "fa-users" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Results Count */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <i className="fas fa-building text-white"></i>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-800">
              {totalCount.toLocaleString("fa-IR")}
            </span>
            <span className="text-gray-500 mr-2">آموزشگاه یافت شد</span>
          </div>
        </div>

        {/* Sort & View Options */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Sort Select */}
          <div className="flex items-center gap-2 flex-1 md:flex-none">
            <span className="text-sm text-gray-500 hidden sm:inline whitespace-nowrap">
              مرتب‌سازی:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 md:w-48 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              title="نمایش شبکه‌ای"
            >
              <i className="fas fa-th-large"></i>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              title="نمایش لیستی"
            >
              <i className="fas fa-list"></i>
            </button>
          </div>

          {/* Mobile Filter Button */}
          <button className="lg:hidden p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors">
            <i className="fas fa-filter"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
