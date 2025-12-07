// components/classes/ClassesFilter.tsx
"use client";

import { useState } from "react";
import LevelFilter from "./LevelFilter";
import ScheduleFilter from "./ScheduleFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import CategoryFilter from "./CategoryFilter";
// import ScheduleFilter from "./ScheduleFilter";
// import PriceRangeFilter from "./PriceRangeFilter";
// import LevelFilter from "./LevelFilter";
// import InstructorFilter from "./InstructorFilter";

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  icon: string;
}

interface ClassesFilterProps {
  categories: Category[];
  levels: string[];
  days: string[];
  times: string[];
}

export default function ClassesFilter({
  categories,
  levels,
  days,
  times,
}: ClassesFilterProps) {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [hasCertificate, setHasCertificate] = useState(false);

  const handleClearFilters = () => {
    setPriceRange([0, 10000000]);
    setHasDiscount(false);
    setIsOnline(false);
    setHasCertificate(false);
  };

  return (
    <div className="lg:sticky lg:top-24 space-y-6">
      {/* Main Filter Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-5">
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
          {/* Categories */}
          <CategoryFilter categories={categories} />

          {/* Level */}
          <LevelFilter levels={levels} />

          {/* Schedule */}
          <ScheduleFilter days={days} times={times} />

          {/* Price Range */}
          <PriceRangeFilter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* Features */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-star text-yellow-500"></i>
              ویژگی‌ها
            </label>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <i className="fas fa-tag text-red-500"></i>
                  <span className="text-gray-700 text-sm">دارای تخفیف</span>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={hasDiscount}
                    onChange={(e) => setHasDiscount(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform"></div>
                </div>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <i className="fas fa-video text-green-500"></i>
                  <span className="text-gray-700 text-sm">کلاس آنلاین</span>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isOnline}
                    onChange={(e) => setIsOnline(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform"></div>
                </div>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <i className="fas fa-certificate text-blue-500"></i>
                  <span className="text-gray-700 text-sm">دارای گواهینامه</span>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={hasCertificate}
                    onChange={(e) => setHasCertificate(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Instructor Filter */}
          <InstructorFilter />
        </div>

        {/* Apply Button */}
        <div className="p-5 border-t border-gray-100">
          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            اعمال فیلترها
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fas fa-question-circle text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold">کمک نیاز دارید؟</h4>
            <p className="text-sm text-blue-100">ما کمکتون می‌کنیم</p>
          </div>
        </div>
        <button className="w-full py-2.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
          تماس با مشاور
        </button>
      </div>
    </div>
  );
}
