// components/home/NewClassesSection.tsx
import Link from 'next/link';
import Image from 'next/image';

const newClasses = [
    {
        id: 1,
        title: 'دوره جامع نقاشی رنگ روغن',
        category: 'نقاشی',
        categoryColor: 'pink',
        institute: 'آموزشگاه نقش‌آفرین',
        teacher: 'استاد احمدی',
        startDate: '۱۵ دی',
        schedule: 'شنبه و دوشنبه - ۱۷ تا ۱۹',
        views: 2340,
        image: 'https://picsum.photos/400/300?random=1',
        isNew: true,
    },
    {
        id: 2,
        title: 'کلاس شطرنج پیشرفته',
        category: 'ورزش‌های فکری',
        categoryColor: 'green',
        institute: 'باشگاه شطرنج استاد',
        teacher: 'استاد محمدی',
        startDate: '۲۰ دی',
        schedule: 'یکشنبه و چهارشنبه - ۱۶ تا ۱۸',
        views: 1890,
        image: 'https://picsum.photos/400/300?random=2',
        isNew: true,
    },
    {
        id: 3,
        title: 'آموزش زبان انگلیسی - مکالمه',
        category: 'زبان انگلیسی',
        categoryColor: 'blue',
        institute: 'موسسه زبان پارسیان',
        teacher: 'استاد رضایی',
        startDate: '۱۸ دی',
        schedule: 'شنبه تا چهارشنبه - ۱۸ تا ۲۰',
        views: 3120,
        image: 'https://picsum.photos/400/300?random=3',
        isNew: true,
        isPopular: true,
    },
    {
        id: 4,
        title: 'برنامه‌نویسی پایتون مقدماتی',
        category: 'برنامه‌نویسی',
        categoryColor: 'purple',
        institute: 'آکادمی کدنویسان',
        teacher: 'مهندس کریمی',
        startDate: '۲۵ دی',
        schedule: 'جمعه - ۹ تا ۱۲',
        views: 2890,
        image: 'https://picsum.photos/400/300?random=4',
        isNew: true,
        isPopular: true,
    },
    {
        id: 5,
        title: 'یوگا و مدیتیشن',
        category: 'ورزشی',
        categoryColor: 'green',
        institute: 'مرکز یوگا آرامش',
        teacher: 'مربی احمدی',
        startDate: '۱۲ دی',
        schedule: 'شنبه و سه‌شنبه - ۷ تا ۸',
        views: 1560,
        image: 'https://picsum.photos/400/300?random=5',
        isNew: true,
    },
    {
        id: 6,
        title: 'طراحی گرافیک با فتوشاپ',
        category: 'گرافیک',
        categoryColor: 'purple',
        institute: 'آموزشگاه هنر دیجیتال',
        teacher: 'استاد حسینی',
        startDate: '۲۲ دی',
        schedule: 'دوشنبه و چهارشنبه - ۱۵ تا ۱۷',
        views: 2100,
        image: 'https://picsum.photos/400/300?random=6',
        isNew: true,
    },
    {
        id: 7,
        title: 'آموزش گیتار کلاسیک',
        category: 'موسیقی',
        categoryColor: 'pink',
        institute: 'آموزشگاه موسیقی هارمونی',
        teacher: 'استاد موسوی',
        startDate: '۱۰ دی',
        schedule: 'یکشنبه و سه‌شنبه - ۱۶ تا ۱۸',
        views: 1780,
        image: 'https://picsum.photos/400/300?random=7',
        isNew: true,
    },
    {
        id: 8,
        title: 'دوره جامع دیجیتال مارکتینگ',
        category: 'بازاریابی',
        categoryColor: 'blue',
        institute: 'آکادمی بازاریابی دیجیتال',
        teacher: 'دکتر علوی',
        startDate: '۲۸ دی',
        schedule: 'پنجشنبه و جمعه - ۱۰ تا ۱۳',
        views: 3450,
        image: 'https://picsum.photos/400/300?random=8',
        isNew: true,
        isPopular: true,
    },
];

export default function NewClassesSection() {
    const categoryColors: Record<string, { bg: string; text: string }> = {
        blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
        green: { bg: 'bg-green-100', text: 'text-green-600' },
        pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                <i className="fas fa-star text-white text-xl"></i>
                            </div>
                            جدیدترین کلاس‌ها
                        </h2>
                        <p className="text-gray-600">تازه‌ترین کلاس‌های آموزشی ثبت شده</p>
                    </div>

                    <Link
                        href="/classes"
                        className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg transition-all border border-gray-200"
                    >
                        مشاهده همه
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newClasses.map((classItem) => {
                        const colorClasses = categoryColors[classItem.categoryColor] || categoryColors.blue;

                        return (
                            <div
                                key={classItem.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    {/* <Image
                                        src={classItem.image}
                                        alt={classItem.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    /> */}
                                    {/* Badges */}
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        {classItem.isNew && (
                                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
                                                جدید
                                            </span>
                                        )}
                                        {classItem.isPopular && (
                                            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg">
                                                محبوب
                                            </span>
                                        )}
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute bottom-3 right-3">
                                        <span className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-bold rounded-lg`}>
                                            {classItem.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Title */}
                                    <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-1">
                                        {classItem.title}
                                    </h3>

                                    {/* Info */}
                                    <div className="space-y-2 mb-4">
                                        {/* Institute */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <i className="fas fa-building text-blue-500 w-4"></i>
                                            <span>{classItem.institute}</span>
                                        </div>

                                        {/* Teacher */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <i className="fas fa-user-tie text-green-500 w-4"></i>
                                            <span>{classItem.teacher}</span>
                                        </div>

                                        {/* Start Date */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <i className="fas fa-calendar-alt text-purple-500 w-4"></i>
                                            <span>شروع: {classItem.startDate}</span>
                                        </div>

                                        {/* Schedule */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <i className="fas fa-clock text-orange-500 w-4"></i>
                                            <span>{classItem.schedule}</span>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        {/* Views */}
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <i className="fas fa-eye"></i>
                                            <span>{classItem.views.toLocaleString('fa-IR')} بازدید</span>
                                        </div>

                                        {/* Button */}
                                        <Link
                                            href={`/classes/${classItem.id}`}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-1"
                                        >
                                            مشاهده
                                            <i className="fas fa-arrow-left text-xs"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile View All Button */}
                <div className="md:hidden text-center mt-8">
                    <Link
                        href="/classes"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                    >
                        مشاهده همه کلاس‌ها
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}