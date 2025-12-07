
export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="نام کلاس، دسته‌بندی یا مهارت را جستجو کنید..."
              className="w-full px-5 py-4 pr-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-700"
            />
            <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          {/* Category Select */}
          <div className="relative md:w-48">
            <select className="w-full px-4 py-4 pr-10 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all cursor-pointer appearance-none text-gray-700">
              <option value="">همه دسته‌ها</option>
              <option value="art">هنری</option>
              <option value="sports">ورزشی</option>
              <option value="languages">زبان‌ها</option>
              <option value="technology">فناوری</option>
              <option value="science">علمی</option>
            </select>
            <i className="fas fa-th-large absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            <i className="fas fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
          </div>

          {/* Location Select */}
          <div className="relative md:w-48">
            <select className="w-full px-4 py-4 pr-10 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all cursor-pointer appearance-none text-gray-700">
              <option value="">همه شهرها</option>
              <option value="najafabad">نجف‌آباد</option>
              <option value="isfahan">اصفهان</option>
              <option value="khomeini">خمینی‌شهر</option>
            </select>
            <i className="fas fa-map-marker-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            <i className="fas fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
          </div>

          {/* Search Button */}
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:scale-105">
            <i className="fas fa-search ml-2"></i>
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}
