// components/home/CategoriesSection.tsx
import Link from 'next/link';

export default function CategoriesSection() {
    const categories = [
        {
            id: 'art',
            name: 'هنری',
            icon: 'fa-palette',
            color: 'from-pink-500 to-pink-600',
            bgColor: 'bg-pink-100',
            count: 245,
            subcategories: [
                'هنرهای تجسمی',
                'هنرهای نمایشی',
                'موسیقی و صدا',
                'هنرهای دیجیتال',
                'صنایع دستی'
            ]
        },
        {
            id: 'sports',
            name: 'ورزشی',
            icon: 'fa-futbol',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-100',
            count: 320,
            subcategories: [
                'ورزش‌های فکری',
                'ورزش‌های قدرتی',
                'ورزش‌های رزمی',
                'ورزش‌های آبی',
                'ورزش‌های توپی'
            ]
        },
        {
            id: 'languages',
            name: 'زبان‌های خارجی',
            icon: 'fa-language',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-100',
            count: 180,
            subcategories: [
                'زبان انگلیسی',
                'زبان فرانسوی',
                'زبان آلمانی',
                'زبان چینی',
                'سایر زبان‌ها'
            ]
        },
        {
            id: 'technology',
            name: 'فناوری',
            icon: 'fa-laptop-code',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-100',
            count: 290,
            subcategories: [
                'برنامه‌نویسی',
                'طراحی وب',
                'شبکه و امنیت',
                'هوش مصنوعی',
                'طراحی بازی'
            ]
        },
        {
            id: 'science',
            name: 'علمی',
            icon: 'fa-flask',
            color: 'from-yellow-500 to-yellow-600',
            bgColor: 'bg-yellow-100',
            count: 150,
            subcategories: [
                'ریاضیات',
                'فیزیک',
                'شیمی',
                'زیست‌شناسی',
                'نجوم'
            ]
        },
        {
            id: 'business',
            name: 'کسب و کار',
            icon: 'fa-briefcase',
            color: 'from-indigo-500 to-indigo-600',
            bgColor: 'bg-indigo-100',
            count: 195,
            subcategories: [
                'مدیریت',
                'بازاریابی',
                'حسابداری',
                'کارآفرینی',
                'فروش'
            ]
        },
    ];

    return (
        <section id="categories" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        دسته‌بندی کلاس‌ها
                    </h2>
                    <p className="text-gray-600 text-lg">
                        کلاس مورد نظر خود را از میان دسته‌بندی‌های مختلف انتخاب کنید
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-br ${category.color} p-6 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <i className={`fas ${category.icon} text-3xl`}></i>
                                        </div>
                                        <span className="text-sm font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                            {category.count} کلاس
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold">{category.name}</h3>
                                </div>
                            </div>

                            {/* Subcategories */}
                            <div className="p-6">
                                <ul className="space-y-2 mb-4">
                                    {category.subcategories.map((sub, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                            <i className="fas fa-chevron-left text-xs text-gray-400"></i>
                                            <span className="text-sm">{sub}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/classes?category=${category.id}`}
                                    className="block w-full py-3 text-center bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-blue-500 hover:text-white transition-all"
                                >
                                    مشاهده همه
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}