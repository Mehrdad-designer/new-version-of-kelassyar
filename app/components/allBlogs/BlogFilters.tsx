// components/blog/BlogFilters.tsx
"use client";

import { useState } from "react";

interface BlogFiltersProps {
  totalPosts: number;
}

export default function BlogFilters({ totalPosts }: BlogFiltersProps) {
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Results Count */}
        <div className="flex items-center gap-2 text-gray-600">
          <i className="fas fa-file-alt text-blue-500"></i>
          <span className="font-medium">
            {totalPosts.toLocaleString("fa-IR")} مقاله یافت شد
          </span>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">مرتب‌سازی:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">جدیدترین</option>
              <option value="popular">محبوب‌ترین</option>
              <option value="mostViewed">پربازدیدترین</option>
              <option value="mostLiked">پسندیده‌ترین</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-th"></i>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
