// components/classes/ClassesHero.tsx
interface Stats {
  totalClasses: number;
  totalInstructors: number;
  totalStudents: number;
  averageRating: number;
}

interface ClassesHeroProps {
  stats: Stats;
}

export default function ClassesHero({ stats }: ClassesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
          <i className="fas fa-book-open text-white/80 text-2xl"></i>
        </div>
        <div
          className="absolute top-32 right-[15%] w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float"
          style={{ animationDelay: "1s" }}
        >
          <i className="fas fa-chalkboard-teacher text-white/80 text-xl"></i>
        </div>
        <div
          className="absolute bottom-24 left-[20%] w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float"
          style={{ animationDelay: "2s" }}
        >
          <i className="fas fa-graduation-cap text-white/80 text-lg"></i>
        </div>
        <div
          className="absolute bottom-32 right-[25%] w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <i className="fas fa-user-graduate text-white/80 text-xl"></i>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20">
            <i className="fas fa-chalkboard text-yellow-300"></i>
            <span className="font-medium">بزرگترین مرجع کلاس‌های آموزشی</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            کلاس مورد نظرت رو
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              پیدا کن و شروع کن!
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-purple-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            دسترسی به هزاران کلاس آموزشی در حوزه‌های مختلف با بهترین اساتید و
            امکان ثبت‌نام آنلاین
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stats.totalClasses.toLocaleString("fa-IR")}+
              </div>
              <div className="text-purple-200 text-sm">کلاس فعال</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stats.totalInstructors.toLocaleString("fa-IR")}+
              </div>
              <div className="text-purple-200 text-sm">مدرس خبره</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {(stats.totalStudents / 1000).toFixed(0)}k+
              </div>
              <div className="text-purple-200 text-sm">دانش‌آموز</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 flex items-center justify-center gap-1">
                {stats.averageRating.toLocaleString("fa-IR")}
                <i className="fas fa-star text-yellow-300 text-2xl"></i>
              </div>
              <div className="text-purple-200 text-sm">میانگین رضایت</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
