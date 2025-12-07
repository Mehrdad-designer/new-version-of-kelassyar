// components/institutes/EmptyState.tsx
export default function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="max-w-md mx-auto">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
            <i className="fas fa-search text-6xl text-gray-400"></i>
          </div>
          <div className="absolute top-0 right-1/4 w-16 h-16 bg-blue-100 rounded-full blur-xl opacity-50"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-purple-100 rounded-full blur-xl opacity-50"></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          نتیجه‌ای یافت نشد
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          با فیلترهای انتخاب شده، آموزشگاهی یافت نشد.
          <br />
          لطفاً فیلترها را تغییر دهید یا دوباره جستجو کنید.
        </p>

        {/* Suggestions */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
            <i className="fas fa-lightbulb text-yellow-500"></i>
            <span>کلمات کلیدی مختلفی را امتحان کنید</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
            <i className="fas fa-filter text-blue-500"></i>
            <span>فیلترهای کمتری را اعمال کنید</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
            <i className="fas fa-map-marker-alt text-red-500"></i>
            <span>شهرهای بیشتری را انتخاب کنید</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <i className="fas fa-redo ml-2"></i>
            حذف فیلترها
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
          >
            <i className="fas fa-arrow-right ml-2"></i>
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}
