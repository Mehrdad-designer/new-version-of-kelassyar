import React from "react";
import {
  Scale,
  Copyright,
  Target,
  ShieldAlert,
  RefreshCw,
  CheckCircle2,
  Phone,
  Shield,
  CreditCard,
  Info,
  UserCheck,
  AlertCircle,
  BookOpen,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "۱. تعاریف",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>کاربر:</strong> فردی که در پلتفرم ثبت‌نام کرده یا از صفحات
            سایت بازدید می‌کند (دانش‌آموز، والدین، جویندگان کلاس و...).
          </li>
          <li>
            <strong>آموزشگاه:</strong> مرکز آموزشی که در کلاس‌یار پروفایل دارد و
            کلاس ارائه می‌کند.
          </li>
          <li>
            <strong>کلاس:</strong> دوره یا فعالیت آموزشی که توسط آموزشگاه ثبت
            می‌شود.
          </li>
          <li>
            <strong>رزرو:</strong> ارسال اطلاعات کاربر به آموزشگاه برای ثبت‌نام
            اولیه یا درخواست تماس.
          </li>
        </ul>
      ),
    },
    {
      title: "۲. مالکیت محتوا",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      content:
        "تمامی محتوای موجود در کلاس‌یار شامل متن‌ها، تصاویر، طراحی‌ها، لوگو، اطلاعات ساختاری و هر محتوای تولید شده توسط تیم کلاس‌یار، متعلق به این پلتفرم است. هرگونه کپی‌برداری، انتشار، استخراج داده، یا استفاده تجاری بدون اجازه کتبی ممنوع است. (اطلاعات آموزشگاه‌ها متعلق به خود آن‌هاست اما انتشار آن تحت قوانین ماست).",
    },
    {
      title: "۳. مسئولیت محتوای آموزشگاه‌ها",
      icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <>
          <p className="mb-2">
            کلاس‌یار مسئول صحت اطلاعات ثبت‌شده توسط آموزشگاه‌ها نیست و آموزشگاه
            موظف است:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
            <li>اطلاعات صحیح و واقعی ارائه کند.</li>
            <li>قیمت‌ها، ساعات برگزاری و ظرفیت را به‌روز نگه دارد.</li>
            <li>در قبال تماس یا رزرو کاربران پاسخگو باشد.</li>
          </ul>
        </>
      ),
    },
    {
      title: "۴. ایجاد حساب کاربری",
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      content:
        "کاربران متعهد می‌شوند اطلاعات درست وارد کنند، حساب خود را در اختیار دیگری قرار ندهند و از فعالیت‌هایی که موجب سوءاستفاده یا آسیب به پلتفرم شود خودداری کنند. هرگونه تخلف موجب محدودیت یا حذف حساب خواهد شد.",
    },
    {
      title: "۵. رزرو کلاس و مسئولیت آن",
      icon: <Info className="w-6 h-6 text-blue-600" />,
      content:
        "رزرو به‌معنای ثبت‌نام قطعی نیست مگر اینکه آموزشگاه آن را تایید کند. کلاس‌یار تنها نقش واسطه دارد و مسئولیت کیفیت برگزاری، رفتار آموزشگاه، بازگشت وجه یا تاخیر و لغو کلاس بر عهده خود آموزشگاه است.",
    },
    {
      title: "۶. قوانین ثبت اطلاعات توسط آموزشگاه‌ها",
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      content:
        "آموزشگاه‌ها متعهدند فقط محتوای قانونی و اخلاقی منتشر کنند، از نقض حقوق دیگران بپرهیزند و از دریافت اطلاعات غیرضروری یا حساس از کاربران خودداری کنند.",
    },
    {
      title: "۷. پرداخت‌ها و تراکنش‌ها",
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      content:
        "در صورت فعال بودن پرداخت آنلاین، پردازش توسط درگاه بانکی امن انجام می‌شود و کلاس‌یار اطلاعات کارت بانکی را ذخیره نمی‌کند. مسئولیت پیگیری مالی و برگشت وجه برعهده آموزشگاه است.",
    },
    {
      title: "۸، ۹ و ۱۰. سایر موارد مهم",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      content: (
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>
              <strong>امتیازدهی:</strong> فقط کاربران واقعی می‌توانند امتیاز
              بدهند. نظرات توهین‌آمیز حذف می‌شوند.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>
              <strong>محدودیت مسئولیت:</strong> ما نهایت تلاش خود را برای عملکرد
              صحیح داریم اما مسئول قطعی اینترنت یا مشکلات فنی خارج از کنترل
              نیستیم.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>
              <strong>تغییرات:</strong> ادامه استفاده از پلتفرم پس از
              به‌روزرسانی قوانین، به‌معنای پذیرش قوانین جدید است.
            </span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <main
      className="min-h-screen bg-slate-50 font-sans text-slate-700 dir-rtl"
      dir="rtl"
    >
      {/* --- هدر صفحه (Page Header) --- */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 relative overflow-hidden">
        {/* پترن‌های پس‌زمینه محو */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/4 blur-xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            قوانین و مقررات
          </h1>
          <p className="text-blue-100 text-lg opacity-90">
            لطفاً برای استفاده از خدمات کلاسیار، موارد زیر را مطالعه کنید.
          </p>
        </div>
      </header>
      {/* --- باکس معرفی و خوش‌آمدگویی --- */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 mb-10">
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-orange-500 p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="hidden sm:flex flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                خوش‌آمدید
              </h2>
              <p className="text-slate-600 leading-8 text-justify">
                به وب‌سایت کلاسیار (
                <span className="font-bold text-blue-700 font-mono mx-1">
                  Kelassyar.ir
                </span>
                ) خوش آمدید. لطفاً پیش از استفاده از خدمات ما، موارد زیر را
                مطالعه فرمایید. ورود شما به سایت به معنی پذیرش این قوانین
                می‌باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 font-sans rtl direction-rtl pb-12">
        {/* Main Content Card */}
        <main className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Intro Text */}
            <div className="p-6 md:p-10 border-b border-gray-100 bg-blue-50/50">
              <p className="text-gray-700 text-justify leading-8">
                به پلتفرم کلاس‌یار خوش آمدید. استفاده از خدمات ما به معنای قبول
                کامل این قوانین است. هدف ما ایجاد محیطی امن، شفاف و قابل‌اعتماد
                برای کاربران و آموزشگاه‌هاست.
              </p>
            </div>

            {/* Sections Loop */}
            <div className="divide-y divide-gray-100">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-gray-600 leading-7 text-justify pr-2 md:pr-12">
                    {typeof section.content === "string" ? (
                      <p>{section.content}</p>
                    ) : (
                      section.content
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-gray-900 text-white p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" />
                تماس با پشتیبانی
              </h2>
              <p className="text-gray-400 mb-6">
                برای اعلام تخلف، مشکل، یا دریافت توضیحات، تیم ما در کوتاه‌ترین
                زمان ممکن پاسخگو خواهد بود.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                <a
                  href="tel:09232894508"
                  className="bg-white/10 hover:bg-white/20 transition-all py-3 px-6 rounded-xl flex items-center justify-center gap-3 border border-white/10"
                >
                  <span className="font-mono text-lg dir-ltr">
                    0923 289 4508
                  </span>
                  <span>:شماره تماس</span>
                </a>
                <a
                  href="mailto:kelassyar@gmail.com"
                  className="bg-blue-600 hover:bg-blue-500 transition-all py-3 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-900/50"
                >
                  <span className="font-mono text-lg">kelassyar@gmail.com</span>
                  <span>:ایمیل</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      ;
    </main>
  );
}
