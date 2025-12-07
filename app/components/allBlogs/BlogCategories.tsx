// components/blog/BlogCategories.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  icon: string;
  color: string;
}

interface BlogCategoriesProps {
  categories: Category[];
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const colorClasses: Record<
    string,
    { bg: string; text: string; hover: string }
  > = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      hover: "hover:bg-blue-200",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      hover: "hover:bg-green-200",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      hover: "hover:bg-purple-200",
    },
    cyan: {
      bg: "bg-cyan-100",
      text: "text-cyan-600",
      hover: "hover:bg-cyan-200",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-600",
      hover: "hover:bg-pink-200",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      hover: "hover:bg-orange-200",
    },
    red: { bg: "bg-red-100", text: "text-red-600", hover: "hover:bg-red-200" },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      hover: "hover:bg-indigo-200",
    },
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <i className="fas fa-th-large text-2xl text-blue-500"></i>
        <h2 className="text-2xl font-bold text-gray-800">دسته‌بندی‌ها</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => {
          const colors = colorClasses[category.color] || colorClasses.blue;
          const isSelected = selectedCategory === category.slug;

          return (
            <Link
              key={category.id}
              href={`/blog?category=${category.slug}`}
              onClick={() => setSelectedCategory(category.slug)}
              className={`group relative p-5 rounded-2xl transition-all duration-300 ${
                isSelected
                  ? `${colors.bg} shadow-lg scale-105`
                  : `bg-white hover:shadow-lg hover:-translate-y-1 border border-gray-100`
              }`}
            >
              <div className="text-center">
                <div
                  className={`w-14 h-14 mx-auto mb-3 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                >
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className={`font-bold text-gray-800 mb-1 text-sm`}>
                  {category.name}
                </h3>
                <span className="text-xs text-gray-500">
                  {category.count.toLocaleString("fa-IR")} مقاله
                </span>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity`}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
