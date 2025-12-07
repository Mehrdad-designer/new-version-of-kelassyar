// components/institutes/FilterSidebar.tsx
"use client";

import { useState } from "react";
import FilterCategory from "./FilterCategory";
import FilterRating from "./FilterRating";
import FilterFeatures from "./FilterFeatures";
// import FilterCategory from "./FilterCategory";
// import FilterRating from "./FilterRating";
// import FilterFeatures from "./FilterFeatures";

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

interface FilterSidebarProps {
  categories: Category[];
  cities: City[];
}

export default function FilterSidebar({
  categories,
  cities,
}: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleClearFilters = () => {
    setPriceRange([0, 10000000]);
    setSelectedCity("");
  };

  return (
    <div className="lg:sticky lg:top-24 space-y-6">
      {/* Main Filter Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <i className="fas fa-filter"></i>
              فیلترها
            </h3>
            <button
              onClick={handleClearFilters}
              className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"
            >
              <i className="fas fa-times"></i>
              پاک کردن
            </button>
          </div>
        </div>

        <div className="p-5 space-y-6">
          {/* City Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-red-500"></i>
              شهر
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">همه شهرها</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name} ({city.count.toLocaleString("fa-IR")})
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <FilterCategory categories={categories} />

          {/* Rating */}
          <FilterRating />

          {/* Price Range */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-money-bill-wave text-green-500"></i>
              محدوده قیمت (تومان)
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="10000000"
                step="500000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-medium">
                  {priceRange[0].toLocaleString("fa-IR")}
                </span>
                <span className="text-gray-400">تا</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-medium">
                  {priceRange[1].toLocaleString("fa-IR")}
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <FilterFeatures />
        </div>

        {/* Apply Button */}
        <div className="p-5 border-t border-gray-100">
          <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            اعمال فیلترها
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fas fa-headset text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold">نیاز به راهنمایی دارید؟</h4>
            <p className="text-sm text-green-100">تیم ما آماده کمک به شماست</p>
          </div>
        </div>
        <button className="w-full py-2.5 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors">
          تماس با پشتیبانی
        </button>
      </div>
    </div>
  );
}
