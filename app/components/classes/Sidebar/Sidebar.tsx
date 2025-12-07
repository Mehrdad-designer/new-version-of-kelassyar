// components/classes/Sidebar.tsx
"use client";

import { useState } from "react";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<string[]>([
    "location",
    "category",
  ]);
  const [priceRange, setPriceRange] = useState(5000000);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const categories = [
    {
      id: "art",
      name: "هنری",
      icon: "fa-palette",
      color: "text-pink-500",
      bgColor: "bg-pink-100",
      count: 45,
      subcategories: [
        "هنرهای تجسمی",
        "هنرهای نمایشی",
        "موسیقی و صدا",
        "هنرهای دیجیتال",
        "صنایع دستی و سنتی",
      ],
    },
    {
      id: "sports",
      name: "ورزشی",
      icon: "fa-futbol",
      color: "text-green-500",
      bgColor: "bg-green-100",
      count: 62,
      subcategories: [
        "ورزش‌های فکری",
        "ورزش‌های قدرتی و استقامتی",
        "ورزش‌های رزمی",
        "ورزش‌های آبی",
        "ورزش‌های توپی",
      ],
    },
    {
      id: "languages",
      name: "زبان‌های خارجی",
      icon: "fa-language",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      count: 38,
      subcategories: ["انگلیسی", "فرانسوی", "آلمانی", "چینی"],
    },
    {
      id: "technology",
      name: "فناوری",
      icon: "fa-laptop-code",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      count: 54,
      subcategories: [
        "فناوری اطلاعات و کامپیوتر",
        "سخت‌افزار و الکترونیک",
        "شبکه",
        "فناوری‌های نوین",
      ],
    },
    {
      id: "science",
      name: "علمی",
      icon: "fa-flask",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      count: 28,
      subcategories: ["دروس تحصیلی", "نجوم و هوافضا"],
    },
  ];

  const scheduleDays = ["شنبه تا پنجشنبه", "روزهای زوج", "روزهای فرد"];
  const scheduleHours = ["صبح", "عصر", "شب"];
  const levels = ["مبتدی", "متوسط", "پیشرفته"];

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-36 space-y-4">
        {/* Filter Header */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <i className="fas fa-filter"></i>
              فیلترها
            </h3>
            <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
              پاک کردن
            </button>
          </div>
        </div>

        {/* Filters Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden divide-y divide-gray-100">
          {/* Location Filter */}
          <div>
            <button
              onClick={() => toggleSection("location")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 font-semibold text-gray-800">
                <i className="fas fa-map-marker-alt text-blue-500"></i>
                موقعیت مکانی
              </span>
              <i
                className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${
                  openSections.includes("location") ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <div
              className={`px-4 pb-4 space-y-3 ${
                openSections.includes("location") ? "block" : "hidden"
              }`}
            >
              <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">انتخاب استان</option>
                <option value="isfahan">اصفهان</option>
                <option value="tehran">تهران</option>
                <option value="shiraz">شیراز</option>
              </select>
              <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">انتخاب شهر</option>
                <option value="najafabad">نجف‌آباد</option>
                <option value="isfahan">اصفهان</option>
                <option value="khomeini">خمینی‌شهر</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          {categories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2 font-semibold text-gray-800">
                  <i className={`fas ${category.icon} ${category.color}`}></i>
                  {category.name}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 ${category.bgColor} ${category.color} text-xs font-bold rounded`}
                  >
                    {category.count}
                  </span>
                  <i
                    className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${
                      openSections.includes(category.id) ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>
              </button>
              <div
                className={`px-4 pb-3 ${
                  openSections.includes(category.id) ? "block" : "hidden"
                }`}
              >
                <div className="space-y-2">
                  {category.subcategories.map((sub, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 text-sm group-hover:text-blue-600">
                        {sub}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Schedule Days Filter */}
          <div>
            <button
              onClick={() => toggleSection("days")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 font-semibold text-gray-800">
                <i className="fas fa-calendar-alt text-orange-500"></i>
                روزهای برگزاری
              </span>
              <i
                className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${
                  openSections.includes("days") ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <div
              className={`px-4 pb-3 ${
                openSections.includes("days") ? "block" : "hidden"
              }`}
            >
              <div className="space-y-2">
                {scheduleDays.map((day, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm group-hover:text-blue-600">
                      {day}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule Hours Filter */}
          <div>
            <button
              onClick={() => toggleSection("hours")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 font-semibold text-gray-800">
                <i className="fas fa-clock text-teal-500"></i>
                ساعات برگزاری
              </span>
              <i
                className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${
                  openSections.includes("hours") ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <div
              className={`px-4 pb-3 ${
                openSections.includes("hours") ? "block" : "hidden"
              }`}
            >
              <div className="space-y-2">
                {scheduleHours.map((hour, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm group-hover:text-blue-600">
                      {hour}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <button
              onClick={() => toggleSection("price")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 font-semibold text-gray-800">
                <i className="fas fa-money-bill-wave text-green-500"></i>
                محدوده قیمت
              </span>
              <i
                className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${
                  openSections.includes("price") ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <div
              className={`px-4 pb-4 ${
                openSections.includes("price") ? "block" : "hidden"
              }`}
            >
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">۰ تومان</span>
                  <span className="font-bold text-blue-600">
                    {priceRange.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <button
              onClick={() => toggleSection("level")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 font-semibold text-gray-800">
                <i className="fas fa-layer-group text-indigo-500"></i>
                سطح کلاس
              </span>
              <i
                className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${
                  openSections.includes("level") ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <div
              className={`px-4 pb-3 ${
                openSections.includes("level") ? "block" : "hidden"
              }`}
            >
              <div className="space-y-2">
                {levels.map((level, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm group-hover:text-blue-600">
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
