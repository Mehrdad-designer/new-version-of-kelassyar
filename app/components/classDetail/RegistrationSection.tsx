// components/class-detail/RegistrationSection.tsx
'use client';

import Link from 'next/link';

export default function RegistrationSection({
    price,
    discount,
    status,
    capacity,
    enrolled,
    startDate,
    classSlug,
}: any) {
    const finalPrice = price - (price * discount / 100);
    const availableSeats = capacity - enrolled;

    const getStatusInfo = () => {
        switch (status) {
            case 'available':
                return {
                    text: 'ظرفیت کافی',
                    color: 'text-green-600',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-200',
                    icon: 'fa-check-circle',
                };
            case 'limited':
                return {
                    text: 'ظرفیت محدود',
                    color: 'text-orange-600',
                    bgColor: 'bg-orange-50',
                    borderColor: 'border-orange-200',
                    icon: 'fa-exclamation-triangle',
                };
            case 'full':
                return {
                    text: 'ظرفیت تکمیل',
                    color: 'text-red-600',
                    bgColor: 'bg-red-50',
                    borderColor: 'border-red-200',
                    icon: 'fa-times-circle',
                };
            default:
                return {
                    text: 'ظرفیت کافی',
                    color: 'text-green-600',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-200',
                    icon: 'fa-check-circle',
                };
        }
    };

    const statusInfo = getStatusInfo();

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6 sticky top-24">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="fas fa-user-plus text-sky-500"></i>
                ثبت‌نام در کلاس
            </h3>
            
            {/* Price Box */}
            <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                {discount > 0 && (
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 line-through">
                            {price.toLocaleString('fa-IR')} تومان
                        </span>
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                            {discount}% تخفیف
                        </span>
                    </div>
                )}
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-600">
                        {finalPrice.toLocaleString('fa-IR')}
                    </span>
                    <span className="text-gray-600">تومان</span>
                </div>
            </div>
            
            {/* Status */}
            <div className={`mb-4 p-3 ${statusInfo.bgColor} ${statusInfo.borderColor} border rounded-xl`}>
                <div className="flex items-center justify-between">
                    <span className={`${statusInfo.color} font-bold flex items-center gap-2`}>
                        <i className={`fas ${statusInfo.icon}`}></i>
                        {statusInfo.text}
                    </span>
                    <span className="text-sm text-gray-600">
                        {availableSeats.toLocaleString('fa-IR')} نفر باقی مانده
                    </span>
                </div>
            </div>
            
            {/* Start Date */}
            <div className="mb-6 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                    <i className="fas fa-calendar-alt text-blue-500"></i>
                    <span>تاریخ شروع:</span>
                    <span className="font-bold">{startDate}</span>
                </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
                {status !== 'full' ? (
                    <>
                        <Link
                            href={`/classes/${classSlug}/register`}
                            className="block w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all"
                        >
                            <i className="fas fa-check-circle ml-2"></i>
                            ثبت‌نام قطعی
                        </Link>
                        <Link
                            href={`/classes/${classSlug}/reserve`}
                            className="block w-full py-4 bg-white text-sky-600 text-center font-bold rounded-xl border-2 border-sky-500 hover:bg-sky-50 transition-all"
                        >
                            <i className="fas fa-bookmark ml-2"></i>
                            رزرو نوبت
                        </Link>
                    </>
                ) : (
                    <button
                        disabled
                        className="w-full py-4 bg-gray-300 text-gray-500 text-center font-bold rounded-xl cursor-not-allowed"
                    >
                        <i className="fas fa-times-circle ml-2"></i>
                        ظرفیت تکمیل شده
                    </button>
                )}
            </div>
            
            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-shield-alt text-green-500"></i>
                    <span>پرداخت امن و مطمئن</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-undo text-blue-500"></i>
                    <span>امکان استرداد وجه تا 48 ساعت</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-headset text-purple-500"></i>
                    <span>پشتیبانی 24 ساعته</span>
                </div>
            </div>
            
            {/* Contact */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3 text-center">سوال دارید؟ با ما تماس بگیرید</p>
                <a 
                    href="tel:02188776655"
                    className="block w-full py-3 bg-green-500 text-white text-center font-bold rounded-xl hover:bg-green-600 transition-colors"
                >
                    <i className="fas fa-phone ml-2"></i>
                    021-88776655
                </a>
            </div>
        </div>
    );
}