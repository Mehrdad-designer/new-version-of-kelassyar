// components/classes/SortFilters.tsx
"use client";

import { useState } from "react";

interface SortFiltersProps {
  totalResults: number;
}

export default function SortFilters({ totalResults }: SortFiltersProps) {
  const [activeSort, setActiveSort] = useState("newest");

  const sortOptions = [
    { id: "newest", label: "جدیدترین", icon: "fa-clock" },
    { id: "popular", label: "محبوب‌ترین", icon: "fa-heart" },
    { id: "mostViewed", label: "پربازدیدترین", icon: "fa-eye" },
  ];

  return (
    <section className="bg-white border-b border-gray-100 sticky top-20 z-30">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Results Count */}
          <div className="flex items-center gap-2 text-gray-600">
            <i className="fas fa-list-ul text-primary-500"></i>
            <span>
              <span className="font-bold text-primary-600">{totalResults}</span>{" "}
              کلاس یافت شد
            </span>
          </div>

          {/* Sort Buttons */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-gray-500 text-sm ml-2">مرتب‌سازی:</span>
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveSort(option.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                  activeSort === option.id
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <i className={`fas ${option.icon}`}></i>
                {option.label}
              </button>
            ))}
          </div>

          {/* View Mode */}
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 rounded-lg bg-primary-100 text-primary-600">
              <i className="fas fa-th-large"></i>
            </button>
            <button className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200">
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
