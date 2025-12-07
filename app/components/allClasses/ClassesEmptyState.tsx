// components/classes/ClassesEmptyState.tsx
export default function ClassesEmptyState() {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="max-w-md mx-auto">
                {/* Icon */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-search text-6xl text-purple-300"></i>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    کلاسی یافت نشد
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                    متأسفانه کلاسی با فیلترهای انتخابی شما پیدا نشد.
                    لطفاً فیلترها را تغییر دهید یا جستجوی دیگری انجام دهید.
                </p>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                        <i className="fas fa-redo ml-2"></i>
                        پاک کردن فیلترها
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                        <i className="fas fa-home ml-2"></i>
                        بازگشت به خانه
                    </button>
                </div>
                
                {/* Suggestions */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">پیشنهادات:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['زبان انگلیسی', 'برنامه‌نویسی', 'موسیقی', 'ورزشی'].map((tag, index) => (
                            <button 
                                key={index}
                                className="px-4 py-2 bg-purple-50 text-purple-600 text-sm rounded-full hover:bg-purple-100 transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}