// components/institutes/InstitutesSearch.tsx
"use client";

import { useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  icon: string;
}

interface City {
  id: number;
  name: string;
  count: number;
}

interface InstitutesSearchProps {
  categories: Category[];
  cities: City[];
}

export default function InstitutesSearch({
  categories,
  cities,
}: InstitutesSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ searchQuery, selectedCity, selectedCategory });
  };

  return (
    <section className="relative -mt-8 z-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="fas fa-search text-blue-500 ml-1"></i>
                  جستجوی آموزشگاه
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="نام آموزشگاه را وارد کنید..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* City Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="fas fa-map-marker-alt text-red-500 ml-1"></i>
                  شهر
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">همه شهرها</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name} ({city.count.toLocaleString("fa-IR")})
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="fas fa-th-large text-purple-500 ml-1"></i>
                  دسته‌بندی
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">همه دسته‌بندی‌ها</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name} ({cat.count.toLocaleString("fa-IR")})
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fas fa-search"></i>
                  جستجو
                </button>
              </div>
            </div>
          </form>

          {/* Quick Category Tags */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <i className="fas fa-fire text-orange-500"></i>
              <span className="text-sm font-medium text-gray-700">
                دسته‌بندی‌های محبوب:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <i className={`fas ${cat.icon} ml-1`}></i>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
