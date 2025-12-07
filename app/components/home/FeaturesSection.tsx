// components/home/FeaturesSection.tsx
export default function FeaturesSection() {
    const features = [
        {
            icon: 'fa-search',
            title: 'جستجوی پیشرفته',
            description: 'با فیلترهای حرفه‌ای، کلاس و آموزشگاه مورد نظر خود را به سرعت پیدا کنید',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            icon: 'fa-balance-scale',
            title: 'مقایسه آسان',
            description: 'امکان مقایسه کلاس‌ها و آموزشگاه‌ها بر اساس قیمت، امکانات و نظرات',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
        },
        {
            icon: 'fa-user-check',
            title: 'ثبت نام آنلاین',
            description: 'ثبت نام و پرداخت آنلاین بدون نیاز به مراجعه حضوری',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
        },
        {
            icon: 'fa-star',
            title: 'نظرات واقعی',
            description: 'مشاهده نظرات و امتیازات واقعی کاربران درباره کلاس‌ها و آموزشگاه‌ها',
            color: 'from-yellow-500 to-yellow-600',
            bgColor: 'bg-yellow-50',
        },
        {
            icon: 'fa-info-circle',
            title: 'اطلاعات کامل',
            description: 'دسترسی به تمام اطلاعات شامل برنامه، مدرس، قیمت و امکانات',
            color: 'from-pink-500 to-pink-600',
            bgColor: 'bg-pink-50',
        },
        {
            icon: 'fa-mobile-alt',
            title: 'دسترسی آسان',
            description: 'استفاده از پلتفرم در هر زمان و مکان از طریق موبایل و تبلت',
            color: 'from-indigo-500 to-indigo-600',
            bgColor: 'bg-indigo-50',
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        امکانات و ویژگی‌های منحصر به فرد
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        کلاس‌یار با ارائه امکانات پیشرفته، تجربه‌ای متفاوت از جستجو و انتخاب کلاس آموزشی را برای شما فراهم کرده است
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <i className={`fas ${feature.icon} text-white text-2xl`}></i>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}