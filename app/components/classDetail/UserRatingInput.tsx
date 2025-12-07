// components/class-detail/RatingSummary.tsx
export default function RatingSummary({ ratings }: any) {
    const categories = [
        { label: 'کیفیت کلاس', value: ratings.classQuality, icon: 'fa-chalkboard', color: 'blue' },
        { label: 'کیفیت تدریس', value: ratings.teachingQuality, icon: 'fa-chalkboard-teacher', color: 'green' },
        { label: 'محیط کلاسی', value: ratings.environment, icon: 'fa-door-open', color: 'purple' },
    ];

    const getColorClasses = (color: string) => {
        const colors: any = {
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            purple: 'bg-purple-500',
        };
        return colors[color] || 'bg-gray-500';
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overall Rating */}
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200">
                <div className="text-6xl font-bold text-gray-800 mb-2">
                    {ratings.overall.toLocaleString('fa-IR')}
                </div>
                <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                        <i 
                            key={i}
                            className={`fas fa-star text-2xl ${
                                i < Math.floor(ratings.overall) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                        ></i>
                    ))}
                </div>
                <p className="text-gray-600">
                    از {ratings.totalRatings.toLocaleString('fa-IR')} امتیاز
                </p>
            </div>
            
            {/* Category Ratings */}
            <div className="space-y-4">
                {categories.map((category: any, index: number) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <i className={`fas ${category.icon} text-${category.color}-500`}></i>
                                <span className="text-sm text-gray-700">{category.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-gray-800">
                                    {category.value.toLocaleString('fa-IR')}
                                </span>
                                <i className="fas fa-star text-yellow-400 text-sm"></i>
                            </div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className={`h-full ${getColorClasses(category.color)} rounded-full transition-all`}
                                style={{ width: `${(category.value / 5) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}