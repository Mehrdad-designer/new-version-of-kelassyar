// components/home/SearchSection.tsx
'use client';

import { useState } from 'react';

export default function SearchSection() {
    const [searchType, setSearchType] = useState<'class' | 'institute'>('class');
// ✅ درست: بدون فاصله اضافی

    return (
        <section id="search" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Search Type Tabs */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <button
                            onClick={() => setSearchType('class')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${searchType === 'class'
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <i className="fas fa-book-open ml-2"></i>
                            جستجوی کلاس
                        </button>
                        <button
                            onClick={() => setSearchType('institute')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${searchType === 'institute'
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <i className="fas fa-building ml-2"></i>
                            جستجوی آموزشگاه
                        </button>
                    </div>

                    {/* Search Box */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Search Input */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {searchType === 'class' ? 'نام کلاس یا مدرس' : 'نام آموزشگاه'}
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder={searchType === 'class' ? 'مثال: نقاشی رنگ روغن' : 'مثال: آموزشگاه نقش‌آفرین'}
                                        className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    موقعیت مکانی
                                </label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">همه شهرها</option>
                                    <option value="najafabad">نجف‌آباد</option>
                                    <option value="isfahan">اصفهان</option>
                                    <option value="tehran">تهران</option>
                                </select>
                            </div>
                        </div>

                        {/* Advanced Filters */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    دسته‌بندی
                                </label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">همه دسته‌ها</option>
                                    <option value="art">هنری</option>
                                    <option value="sports">ورزشی</option>
                                    <option value="languages">زبان‌های خارجی</option>
                                    <option value="technology">فناوری</option>
                                    <option value="science">علمی</option>
                                </select>
                            </div>

                            {/* Price Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    محدوده قیمت
                                </label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">همه قیمت‌ها</option>
                                    <option value="free">رایگان</option>
                                    <option value="low">کمتر از ۱ میلیون</option>
                                    <option value="medium">۱ تا ۳ میلیون</option>
                                    <option value="high">بیشتر از ۳ میلیون</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <div className="flex items-end">
                                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                                    <i className="fas fa-search ml-2"></i>
                                    جستجو
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}