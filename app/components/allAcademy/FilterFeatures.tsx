// components/institutes/FilterFeatures.tsx
"use client";

import { useState } from "react";

export default function FilterFeatures() {
  const [features, setFeatures] = useState({
    verified: false,
    online: false,
    open: false,
    parking: false,
  });

  const toggleFeature = (key: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const featuresList = [
    {
      key: "verified" as const,
      label: "فقط آموزشگاه‌های تأیید شده",
      icon: "fa-check-circle",
      color: "text-blue-500",
    },
    {
      key: "online" as const,
      label: "دارای کلاس آنلاین",
      icon: "fa-video",
      color: "text-green-500",
    },
    {
      key: "open" as const,
      label: "در حال پذیرش",
      icon: "fa-door-open",
      color: "text-orange-500",
    },
    {
      key: "parking" as const,
      label: "دارای پارکینگ",
      icon: "fa-parking",
      color: "text-purple-500",
    },
  ];

  return (
    <div>
      <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <i className="fas fa-sliders-h text-indigo-500"></i>
        امکانات و ویژگی‌ها
      </label>
      <div className="space-y-3">
        {featuresList.map((feature) => (
          <label
            key={feature.key}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-2">
              <i className={`fas ${feature.icon} ${feature.color}`}></i>
              <span className="text-gray-700 text-sm">{feature.label}</span>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                checked={features[feature.key]}
                onChange={() => toggleFeature(feature.key)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform"></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
