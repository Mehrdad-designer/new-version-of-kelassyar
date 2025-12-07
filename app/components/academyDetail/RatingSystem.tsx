"use client";

import { useState } from "react";
import { Star, TrendingUp } from "lucide-react";

interface RatingSystemProps {
  ratings: {
    overall: number;
    total_votes: number;
    subcategories: {
      environment: number;
      staff_behavior: number;
      teaching_quality: number;
      facilities: number;
    };
  };
}

export default function RatingSystem({ ratings }: RatingSystemProps) {
  const [userRatings, setUserRatings] = useState({
    environment: 0,
    staff_behavior: 0,
    teaching_quality: 0,
    facilities: 0,
  });

  const categories = [
    { key: "environment", label: "محیط", icon: "🏢" },
    { key: "staff_behavior", label: "رفتار پرسنل", icon: "👥" },
    { key: "teaching_quality", label: "کیفیت آموزش", icon: "📚" },
    { key: "facilities", label: "تجهیزات", icon: "🔧" },
  ];

  const handleRating = (category: string, value: number) => {
    setUserRatings((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const submitRating = () => {
    console.log("Submitting ratings:", userRatings);
    // API call here
    alert("امتیاز شما ثبت شد! 🎉");
  };

  return (
    <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">امتیازدهی</h2>

      {/* Overall Rating */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="w-8 h-8 fill-yellow-500 text-yellow-500" />
          <span className="text-5xl font-bold text-gray-800">
            {ratings.overall}
          </span>
        </div>
        <p className="text-gray-600">
          از {ratings.total_votes.toLocaleString()} رأی
        </p>
      </div>

      {/* Subcategories - Current Ratings */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-700 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          میانگین امتیازات
        </h3>
        {categories.map((cat) => (
          <div key={cat.key} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">
                {cat.icon} {cat.label}
              </span>
              <span className="font-bold text-gray-800">
                {
                  ratings.subcategories[
                    cat.key as keyof typeof ratings.subcategories
                  ]
                }
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (ratings.subcategories[
                      cat.key as keyof typeof ratings.subcategories
                    ] /
                      5) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* User Rating Form */}
      <div className="border-t border-gray-200 pt-6 space-y-4">
        <h3 className="font-bold text-gray-700">امتیاز شما</h3>
        {categories.map((cat) => (
          <div key={cat.key} className="space-y-2">
            <label className="text-sm text-gray-700">
              {cat.icon} {cat.label}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(cat.key, star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= userRatings[cat.key as keyof typeof userRatings]
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={submitRating}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition font-medium shadow-lg"
        >
          ثبت امتیاز
        </button>
      </div>
    </div>
  );
}
