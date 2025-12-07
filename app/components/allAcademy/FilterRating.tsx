// components/institutes/FilterRating.tsx
"use client";

import { useState } from "react";

export default function FilterRating() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const ratings = [
    { value: 5, label: "عالی" },
    { value: 4, label: "خیلی خوب" },
    { value: 3, label: "خوب" },
    { value: 2, label: "متوسط" },
  ];

  return (
    <div>
      <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <i className="fas fa-star text-yellow-500"></i>
        امتیاز
      </label>
      <div className="space-y-2">
        {ratings.map((rating) => (
          <label
            key={rating.value}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <input
              type="radio"
              name="rating"
              checked={selectedRating === rating.value}
              onChange={() => setSelectedRating(rating.value)}
              className="sr-only peer"
            />
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-yellow-500 peer-checked:border-[6px] transition-all"></div>
            <div className="flex items-center gap-2 flex-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`${
                      i < rating.value ? "fas" : "far"
                    } fa-star text-yellow-400 text-sm`}
                  ></i>
                ))}
              </div>
              <span className="text-gray-600 text-sm">{rating.label}</span>
            </div>
            <span className="text-xs text-gray-400">و بالاتر</span>
          </label>
        ))}
      </div>
    </div>
  );
}
