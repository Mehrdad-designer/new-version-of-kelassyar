// components/home/CTASection.tsx
export default function CTASection() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                        <i className="fas fa-graduation-cap text-white text-4xl"></i>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        آماده شروع یادگیری هستید؟
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        همین حالا کلاس مورد نظر خود را پیدا کنید و مسیر یادگیری خود را آغاز کنید
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/classes"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-search"></i>
                            مشاهده کلاس‌ها
                        </a>
                        <a
                            href="/institutes"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-building"></i>
                            مشاهده آموزشگاه‌ها
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">۲۵۰+</div>
                            <div className="text-blue-100 text-sm">آموزشگاه</div>
                        </div>
                        <div className="text-center border-x border-white/20">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">۱۵۰۰+</div>
                            <div className="text-blue-100 text-sm">کلاس آموزشی</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">۱۲۰۰۰+</div>
                            <div className="text-blue-100 text-sm">دانشجو</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}