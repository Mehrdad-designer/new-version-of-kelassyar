import React from "react";
import Image from "next/image";
import { Users, Target, ShieldCheck, Zap } from "lucide-react"; // آیکون‌ها از lucide-react

export default function AboutUsPage() {
  return (
    <main
      className="bg-slate-50 min-h-screen text-slate-800 font-sans"
      dir="rtl"
    >
      {/* --- کامپوننت 1: هدر صفحه (PageHeader) --- */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
        {/* پترن پس‌زمینه تزیینی */}
        <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            درباره <span className="text-orange-400">مسیر هوشمندانه</span> ما
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ما اینجا هستیم تا فاصله بین علاقه‌مندان به یادگیری و بهترین
            آموزشگاه‌های کشور را از میان برداریم.
          </p>
        </div>
        {/* شکل موج پایین هدر */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 55C480 50 600 70 720 75C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* --- کامپوننت 2: داستان ما (StorySection) --- */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* بخش تصویر */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* جایگزین Image با تگ div رنگی برای دمو */}
              <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-800">
                <span className="text-lg">تصویر تیم یا دفتر کار</span>
              </div>
            </div>
            {/* المان تزیینی پشت عکس */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-orange-400 rounded-2xl"></div>
          </div>

          {/* بخش متن */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-r-4 border-blue-600 pr-4">
              داستان شکل‌گیری ما
            </h2>
            <p className="text-slate-600 leading-8 mb-4 text-justify">
              1. عنوان درباره ما (خیلی کوتاه) درباره کلاس‌یار 2. عنوان متن اصلی
              چرا کلاس‌یار را ساختیم 3. متن اصلی کلاس‌یار با هدف ساده‌تر کردن
              مسیر پیدا کردن آموزش مناسب در نجف‌آباد راه‌اندازی شد. ما یک بستر
              شفاف، دقیق و همیشه‌به‌روز ساخته‌ایم تا کاربران بتوانند بدون
              سردرگمی، کلاس‌ها و آموزشگاه‌هایی که واقعاً با نیازشان هماهنگ هستند
              را پیدا کنند. هدف ما فقط نمایش اطلاعات نیست. ما تلاش می‌کنیم
              دسترسی به آموزش را سریع‌تر، قابل‌اعتمادتر و هوشمندتر کنیم؛
            </p>
            <p className="text-slate-600 leading-8 mb-4 text-justify">
              به‌خصوص برای نوجوانان و جوانانی که انتخاب درست مسیر آینده‌شان
              اهمیت زیادی دارد. کلاس‌یار کار خود را از سال ۱۴۰۳ آغاز کرد و از
              همان ابتدا تمرکز اصلی ما ارائه اطلاعات کامل، قابل اتکا و واقعی از
              آموزشگاه‌ها و دوره‌های مختلف بوده است. برای ارتباط، پیشنهاد همکاری
              یا ثبت اطلاعات آموزشگاه خود، همیشه می‌توانید از صفحه تماس با ما
              استفاده کنید. 4. بخش ویژگی‌های ما (چهار مورد همانند نمونه) جستجو و
              فیلتر با سیستم جستجوی پیشرفته و فیلترهای هوشمند، پیدا کردن کلاس
              مناسب تنها چند ثانیه زمان می‌برد. مقایسه آسان قیمت، کیفیت، نظرات و
              امکانات کلاس‌ها را می‌توانید در یک نگاه با هم مقایسه کنید. ثبت‌نام
              آنلاین رزرو و پرداخت آنلاین امن، با چند کلیک ساده و بدون تماس‌های
              اضافی. نظرات واقعی دسترسی به تجربه‌ها و دیدگاه‌های واقعی
              دانش‌آموزان قبلی برای انتخاب دقیق‌تر. 5. متن دعوت به همکاری / دعوت
              به ثبت آموزشگاه اگر صاحب آموزشگاه هستید یا قصد دارید کلاس تازه‌ای
              را معرفی کنید، می‌توانید آن را در کلاس‌یار ثبت کنید تا در معرض دید
              هزاران کاربر قرار گیرد. ما از همکاری با آموزشگاه‌ها استقبال
              می‌کنیم و به گسترش دسترسی به آموزش باکیفیت اهمیت می‌دهیم. همچنین
              کاربران می‌توانند با ثبت‌نام در کلاس‌ها یا نوشتن نظرات واقعی خود،
              به دیگران کمک کنند بهترین انتخاب را داشته باشند.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">
                  5+
                </span>
                <span className="text-sm text-slate-500">سال تجربه</span>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">
                  10K+
                </span>
                <span className="text-sm text-slate-500">کاربر راضی</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- کامپوننت 3: ارزش‌های ما (ValuesSection) --- */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            ارزش‌های محوری ما
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            ما بر این باوریم که اصول زیر ستون‌های اصلی موفقیت ما و رضایت شما
            هستند.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* اینجا باید هر کدام یک کامپوننت Card باشد */}
            <ValueCard
              icon={<ShieldCheck className="w-10 h-10 text-white" />}
              title="اعتماد و شفافیت"
              desc="اطلاعات دقیق و نظرات واقعی، بدون هیچ پنهان‌کاری."
              bg="bg-blue-600"
            />
            <ValueCard
              icon={<Target className="w-10 h-10 text-white" />}
              title="دقت و کیفیت"
              desc="بررسی دقیق آموزشگاه‌ها قبل از معرفی به شما."
              bg="bg-orange-500"
            />
            <ValueCard
              icon={<Users className="w-10 h-10 text-white" />}
              title="جامعه‌محوری"
              desc="ما به قدرت یادگیری جمعی و اشتراک تجربه باور داریم."
              bg="bg-blue-500"
            />
            <ValueCard
              icon={<Zap className="w-10 h-10 text-white" />}
              title="نوآوری مدوام"
              desc="همیشه به دنبال راه‌های جدید برای ساده‌سازی یادگیری هستیم."
              bg="bg-blue-800"
            />
          </div>
        </div>
      </section>

      {/* --- کامپوننت 5: دعوت به اقدام (CTA) --- */}
      <section className="bg-blue-900 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده‌اید مسیر یادگیری خود را شروع کنید؟
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            همین حالا در کلاس‌های مورد علاقه خود ثبت‌نام کنید یا اگر آموزشگاه
            دارید به خانواده بزرگ ما بپیوندید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30">
              جستجوی کلاس‌ها
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold transition-all">
              ثبت آموزشگاه
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- کامپوننت داخلی برای کارت ارزش‌ها (که می‌تواند جدا شود) ---
function ValueCard({
  icon,
  title,
  desc,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bg: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col items-center text-center group">
      <div
        className={`w-20 h-20 ${bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
