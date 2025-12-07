// components/classes/ScheduleFilter.tsx
"use client";

import { useState } from "react";

interface ScheduleFilterProps {
  days: string[];
  times: string[];
}

export default function ScheduleFilter({ days, times }: ScheduleFilterProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleTime = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  return (
    <div>
      <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <i className="fas fa-calendar-alt text-blue-500"></i>
        زمان‌بندی کلاس
      </label>

      {/* Days */}
      <div className="mb-4">
        <p className="text-xs text-gray-600 mb-2">روزهای برگزاری:</p>
        <div className="flex flex-wrap gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedDays.includes(day)
                  ? "bg-purple-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Times */}
      <div>
        <p className="text-xs text-gray-600 mb-2">زمان برگزاری:</p>
        <div className="space-y-2">
          {times.map((time) => (
            <label
              key={time}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedTimes.includes(time)}
                  onChange={() => toggleTime(time)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-purple-500 peer-checked:border-purple-500 transition-all flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs opacity-0 peer-checked:opacity-100"></i>
                </div>
              </div>
              <span className="text-gray-700 text-sm">{time}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
