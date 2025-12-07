// components/classes/ClassesSearch.tsx
'use client';

import { useState } from 'react';

interface Category {
    id: number;
    name: string;
    slug: string;
    count: number;
    icon: string;
}

interface ClassesSearchProps {
    categories: Category[];
}

export default function ClassesSearch({ categories }: ClassesSearchProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ searchQuery, selectedCategory, selectedLevel });
    };

    return (
        <section className="relative -mt-8 z-10 pb-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
                    <form onSubmit={handleSearch}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Search Input */}
                            <div className="lg:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <i className="fas fa-search text-purple-500 ml-1"></i>
                                    جستجوی کلاس
                                </label>
                                <input 
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="نام کلاس یا مدرس..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                            
                            {/* Category Select */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <i className="fas fa-th-large text-blue-500 ml-1"></i>
                                    دسته‌بندی
                                </label>
                                <select 
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer"
                                >
                                    <option value="">همه دسته‌ها</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.slug}>
                                            {cat.name} ({cat.count.toLocaleString('fa-IR')})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            {/* Level Select */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <i className="fas fa-layer-group text-green-500 ml-1"></i>
                                    سطح
                                </label>
                                <select 
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer"
                                >
                                    <option value="">همه سطوح</option>
                                    <option value="beginner">مقدماتی</option>
                                    <option value="intermediate">متوسط</option>
                                    <option value="advanced">پیشرفته</option>
                                    <option value="all-levels">همه سطوح</option>
                                </select>
                            </div>
                            
                            {/* Search Button */}
                            <div className="flex items-end">
                                <button 
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
                                >
                                    <i className="fas fa-search"></i>
                                    جستجو
                                </button>
                            </div>
                        </div>
                    </form>
                    
                    {/* Quick Category Tags */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                            <i className="fas fa-fire text-orange-500"></i>
                            <span className="text-sm font-medium text-gray-700">دسته‌های محبوب:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.slice(0, 6).map((cat) => (
                                <button 
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.slug)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedCategory === cat.slug
                                            ? 'bg-purple-500 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                    }`}
                                >
                                    <i className={`fas ${cat.icon} ml-1`}></i>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}