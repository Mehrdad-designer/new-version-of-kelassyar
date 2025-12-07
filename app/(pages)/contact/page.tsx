import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen bg-slate-50 font-sans text-slate-700"
      dir="rtl"
    >
      {/* --- 1. هدر اصلی (Background Header) --- */}
      <div className="bg-blue-900 h-[300px] w-full relative overflow-hidden">
        {/* پترن‌های پس‌زمینه */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pb-20 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            تماس با <span className="text-orange-400">کلاس‌یار</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl">
            ما همیشه مشتاق شنیدن نظرات، پیشنهادات و سوالات شما هستیم.
          </p>
        </div>
      </div>

      {/* --- 2. کانتینر اصلی (شناور روی هدر) --- */}
      <div className="container mx-auto px-4 -mt-32 pb-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* --- بخش الف: اطلاعات تماس (تم آبی) --- */}
          <div className="w-full md:w-5/12 bg-blue-800 text-white p-10 md:p-12 relative overflow-hidden flex flex-col justify-between">
            {/* دایره‌های تزیینی */}
            <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>

            <div>
              <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>
              <p className="text-blue-200 mb-12 leading-7 text-sm">
                برای دریافت مشاوره، گزارش مشکل یا همکاری با ما، می‌توانید از
                طریق راه‌های زیر با تیم پشتیبانی در ارتباط باشید.
              </p>

              <div className="space-y-8">
                {/* آیتم 1: تلفن */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs mb-1">شماره تماس</p>
                    <p className="font-bold text-lg dir-ltr text-right">
                      021 - 1234 5678
                    </p>
                  </div>
                </div>

                {/* آیتم 2: ایمیل */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs mb-1">پست الکترونیک</p>
                    <p className="font-bold text-lg font-mono">
                      info@kelassyar.ir
                    </p>
                  </div>
                </div>

                {/* آیتم 3: آدرس */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs mb-1">دفتر مرکزی</p>
                    <p className="font-bold text-sm leading-6">
                      اصفهان، نجف‌آباد، خیابان شریعتی،
                      <br />
                      ساختمان نوآوری، طبقه دوم
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* سوشال مدیا */}
            <div className="mt-12">
              <p className="text-blue-200 text-xs mb-4">ما را دنبال کنید:</p>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
                <SocialIcon icon={<Linkedin size={20} />} />
              </div>
            </div>
          </div>

          {/* --- بخش ب: فرم تماس (تم سفید) --- */}
          <div className="w-full md:w-7/12 p-10 md:p-12 bg-white">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              ارسال پیام
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              پیام خود را بنویسید، کارشناسان ما در اسرع وقت پاسخ خواهند داد.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* نام */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: علی محمدی"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                {/* موضوع */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    موضوع پیام
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none">
                    <option>انتخاب کنید...</option>
                    <option>پیشنهاد و انتقاد</option>
                    <option>گزارش خرابی</option>
                    <option>درخواست همکاری</option>
                    <option>سایر</option>
                  </select>
                </div>
              </div>

              {/* ایمیل / موبایل */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  شماره تماس یا ایمیل
                </label>
                <input
                  type="text"
                  placeholder="برای پاسخگویی به آن نیاز داریم"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              {/* متن پیام */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  متن پیام
                </label>
                <textarea
                  rows={4}
                  placeholder="پیام خود را اینجا بنویسید..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group">
                <span>ارسال پیام</span>
                <Send className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

    </main>
  );
}

// کامپوننت کوچک برای آیکون‌های شبکه اجتماعی
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-800 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
