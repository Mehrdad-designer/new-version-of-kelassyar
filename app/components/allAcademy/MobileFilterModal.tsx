// components/institutes/MobileFilterModal.tsx
"use client";

import { useState, useEffect } from "react";
import FilterCategory from "./FilterCategory";
import FilterRating from "./FilterRating";
import FilterFeatures from "./FilterFeatures";

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

interface MobileFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  cities: City[];
}

export default function MobileFilterModal({
  isOpen,
  onClose,
  categories,
  cities,
}: MobileFilterModalProps) {
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden max-h-[90vh] overflow-hidden">
        <div className="bg-white rounded-t-3xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <i className="fas fa-filter text-blue-500"></i>
              فیلترها
            </h3>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Content */}
          <div className="p-5 space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto">
            {/* City */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-3">
                شهر
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">همه شهرها</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name} ({city.count.toLocaleString("fa-IR")})
                  </option>
                ))}
              </select>
            </div>

            <FilterCategory categories={categories} />
            <FilterRating />
            <FilterFeatures />
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-gray-100 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              انصراف
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
