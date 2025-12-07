// components/classes/PriceRangeFilter.tsx
"use client";

interface PriceRangeFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export default function PriceRangeFilter({
  priceRange,
  setPriceRange,
}: PriceRangeFilterProps) {
  return (
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
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
        <div className="flex items-center justify-between text-sm">
          <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg font-medium">
            {priceRange[0].toLocaleString("fa-IR")}
          </span>
          <span className="text-gray-400">تا</span>
          <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg font-medium">
            {priceRange[1].toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
  );
}
