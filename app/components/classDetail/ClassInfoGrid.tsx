// components/class-detail/ClassInfoGrid.tsx
import Link from 'next/link';

export default function ClassInfoGrid({
    price,
    discount,
    level,
    schedule,
    ageGroup,
    sessionsCount,
    duration,
    capacity,
    enrolled,
    prerequisites,
    hasCertificate,
    certificateInfo,
    createdAt,
    registrationDocument,
    tags,
    category,
    subcategory,
    instituteName,
}: any) {
    const finalPrice = price - (price * discount / 100);
    const availableSeats = capacity - enrolled;

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-clipboard-list text-sky-500"></i>
                مشخصات کلاس
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Price */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-money-bill-wave text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">هزینه ثبت‌نام</p>
                        {discount > 0 ? (
                            <div>
                                <p className="text-sm text-gray-400 line-through">
                                    {price.toLocaleString('fa-IR')} تومان
                                </p>
                                <p className="text-lg font-bold text-green-600">
                                    {finalPrice.toLocaleString('fa-IR')} تومان
                                </p>
                                <span className="inline-block mt-1 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                                    {discount}% تخفیف
                                </span>
                            </div>
                        ) : (
                            <p className="text-lg font-bold text-green-600">
                                {price.toLocaleString('fa-IR')} تومان
                            </p>
                        )}
                    </div>
                </div>
                
                {/* Level */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-layer-group text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">سطح کلاس</p>
                        <p className="text-lg font-bold text-gray-800">{level}</p>
                    </div>
                </div>
                
                {/* Schedule */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-calendar-alt text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">زمان برگزاری</p>
                        <p className="text-sm font-bold text-gray-800">{schedule.days.join('، ')}</p>
                        <p className="text-sm text-gray-600 mt-1">{schedule.time}</p>
                    </div>
                </div>
                
                {/* Age Group */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-users text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">رده سنی</p>
                        <p className="text-lg font-bold text-gray-800">{ageGroup}</p>
                    </div>
                </div>
                
                {/* Sessions Count */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl border border-cyan-200">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-book text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">تعداد جلسات</p>
                        <p className="text-lg font-bold text-gray-800">{sessionsCount.toLocaleString('fa-IR')} جلسه</p>
                    </div>
                </div>
                
                {/* Duration */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-hourglass-half text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">مدت دوره</p>
                        <p className="text-lg font-bold text-gray-800">{duration}</p>
                    </div>
                </div>
                
                {/* Capacity */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-rose-50 to-red-50 rounded-xl border border-rose-200">
                    <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-user-friends text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">ظرفیت کلاس</p>
                        <p className="text-lg font-bold text-gray-800">
                            {availableSeats.toLocaleString('fa-IR')} از {capacity.toLocaleString('fa-IR')} نفر
                        </p>
                        <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-rose-500 to-red-600 rounded-full transition-all"
                                style={{ width: `${(enrolled / capacity) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
                
                {/* Certificate */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-certificate text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">گواهینامه</p>
                        {hasCertificate ? (
                            <div>
                                <p className="text-sm font-bold text-green-600 flex items-center gap-1">
                                    <i className="fas fa-check-circle"></i>
                                    دارد
                                </p>
                                <p className="text-xs text-gray-600 mt-1">{certificateInfo}</p>
                            </div>
                        ) : (
                            <p className="text-sm font-bold text-gray-500">ندارد</p>
                        )}
                    </div>
                </div>
                
                {/* Prerequisites - Full Width */}
                <div className="md:col-span-2 flex items-start gap-3 p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                    <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-list-check text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">پیش‌نیازها</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{prerequisites}</p>
                    </div>
                </div>
                
                {/* Created At */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200">
                    <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-clock text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">تاریخ ایجاد</p>
                        <p className="text-sm font-bold text-gray-800">{createdAt}</p>
                    </div>
                </div>
                
                {/* Registration Document */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border border-sky-200">
                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-file-pdf text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">فرم ثبت‌نام</p>
                        <a 
                            href={registrationDocument}
                            download
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500 text-white text-sm rounded-lg hover:bg-sky-600 transition-colors"
                        >
                            <i className="fas fa-download"></i>
                            دانلود فرم
                        </a>
                    </div>
                </div>
                
                {/* Category - Full Width */}
                <div className="md:col-span-2 flex items-start gap-3 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-tags text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">دسته‌بندی</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-lg font-medium">
                                {category}
                            </span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-lg font-medium">
                                {subcategory}
                            </span>
                        </div>
                    </div>
                </div>
                
                {/* Institute Name */}
                <div className="md:col-span-2 flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-building text-white"></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">آموزشگاه برگزارکننده</p>
                        <p className="text-lg font-bold text-gray-800">{instituteName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}