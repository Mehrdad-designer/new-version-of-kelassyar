// components/home/HeroSection.tsx
export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        مسیر هوشمندانه برای
                        <br />
                        <span className="text-yellow-300">یادگیری و پیشرفت</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                        بهترین آموزشگاه‌ها و کلاس‌های آموزشی را پیدا کنید
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#search"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-search"></i>
                            جستجوی کلاس‌ها
                        </a>
                        <a
                            href="#categories"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-th-large"></i>
                            دسته‌بندی‌ها
                        </a>
                    </div>
                </div>
            </div>

            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#F9FAFB" />
                </svg>
            </div>
        </section>
    );
}