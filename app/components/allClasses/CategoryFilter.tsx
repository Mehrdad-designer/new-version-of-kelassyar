// components/classes/CategoryFilter.tsx
"use client";

import { useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  icon: string;
}

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const displayedCategories = showAll ? categories : categories.slice(0, 5);

  return (
    <div>
      <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <i className="fas fa-th-large text-purple-500"></i>
        دسته‌بندی
      </label>
      <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
        {displayedCategories.map((category) => (
          <label
            key={category.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.slug)}
                onChange={() => toggleCategory(category.slug)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-purple-500 peer-checked:border-purple-500 transition-all flex items-center justify-center">
                <i className="fas fa-check text-white text-xs opacity-0 peer-checked:opacity-100"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <i
                className={`fas ${category.icon} text-gray-400 group-hover:text-purple-500 transition-colors`}
              ></i>
              <span className="text-gray-700 text-sm group-hover:text-purple-600 transition-colors">
                {category.name}
              </span>
            </div>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
              {category.count.toLocaleString("fa-IR")}
            </span>
          </label>
        ))}
      </div>

      {categories.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
        >
          {showAll ? (
            <>
              <i className="fas fa-chevron-up"></i>
              نمایش کمتر
            </>
          ) : (
            <>
              <i className="fas fa-chevron-down"></i>
              نمایش همه ({categories.length})
            </>
          )}
        </button>
      )}
    </div>
  );
}
