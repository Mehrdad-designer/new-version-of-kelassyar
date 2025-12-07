// app/privacy-policy/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Share2,
  Database,
  Users,
  FileText,
  Building2,
  Settings,
  Cookie,
  Clock,
  Mail,
  Phone,
  ChevronLeft,
  Key,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      icon: <Shield className="w-6 h-6" />,
      title: "۱. مقدمه",
      content:
        "کلاس‌یار متعهد به حفاظت از اطلاعات کاربران، آموزشگاه‌ها و تمامی افرادی است که از خدمات پلتفرم استفاده می‌کنند. استفادهٔ شما از خدمات کلاس‌یار به معنای پذیرش این سیاست است. هدف ما شفافیت، امنیت و احترام به حقوق دیجیتال کاربران است.",
    },
    {
      id: "responsibility",
      icon: <Users className="w-6 h-6" />,
      title: "۲. تفکیک مسئولیت: چه کسی چه اطلاعاتی را نگه‌داری می‌کند؟",
      content:
        "برای جلوگیری از هرگونه ابهام، ابتدا روشن می‌کنیم که چه اطلاعاتی توسط کلاس‌یار جمع‌آوری و نگهداری می‌شود و چه اطلاعاتی ممکن است مستقیماً توسط آموزشگاه‌ها در فرآیند ثبت‌نام یا ارائه خدمات درخواست و نگهداری گردد.",
      subsections: [
        {
          id: "classyar-collection",
          title: "۲.۱. اطلاعاتی که کلاس‌یار جمع‌آوری می‌کند",
          content:
            "کلاس‌یار تنها اطلاعاتی را جمع‌آوری و نگهداری می‌کند که برای ارائه خدمات پایهٔ پلتفرم لازم است یا کاربر مستقیماً در سامانه وارد کرده است.",
          items: [
            "شماره موبایل برای ایجاد حساب کاربری و احراز هویت",
            "نام و نام خانوادگی (در صورتی که خود کاربر وارد کند یا برای پروفایل لازم باشد)",
            "اطلاعات فنی و تراکنشی مربوط به رزرو (توجه: اطلاعات کارت بانکی ذخیره نمی‌شود)",
            "پیام‌ها یا توضیحاتی که کاربر هنگام رزرو یا ارسال درخواست وارد می‌کند",
            "لاگ‌های فنی و تحلیل استفاده از سایت (برای بهبود سرویس)",
          ],
        },
        {
          id: "institute-collection",
          title:
            "۲.۲. اطلاعاتی که ممکن است آموزشگاه‌ها مستقیماً از کاربر درخواست و ذخیره کنند",
          content:
            "آموزشگاه‌ها به‌عنوان ارائه‌دهندهٔ خدمات آموزشی ممکن است بسته به نوع کلاس یا نیازهای داخلی، اطلاعات تکمیلی از متقاضیان دریافت کنند.",
          items: [
            "اطلاعات تحصیلی یا سوابق مرتبط (در صورت نیاز به پیش‌نیاز)",
            "اطلاعات پزشکی یا نیازهای خاص (در کلاس‌های ورزشی یا سلامت محور)",
            "اطلاعات تکمیلی تماس یا اقوام برای موارد اورژانسی",
            "مدارک یا مستنداتی که آموزشگاه جهت ثبت‌نام درخواست می‌کند",
            "هر اطلاعات دیگری که آموزشگاه در فرم ثبت‌نام خود مشخص می‌کند",
          ],
          warning:
            "توجه: کلاس‌یار فقط مسئول جمع‌آوری، پردازش و ذخیرهٔ اطلاعاتی است که صراحتاً در سمت کلاس‌یار ثبت می‌شود. اطلاعاتی که مستقیماً به آموزشگاه ارسال می‌شود، تحت مسئولیت و سیاست‌های حریم خصوصی آن آموزشگاه است.",
        },
      ],
    },
    {
      id: "institute-info",
      icon: <Building2 className="w-6 h-6" />,
      title: "۳. اطلاعات آموزشگاه‌ها و محتوای نمایش‌شده در پلتفرم",
      content:
        "برای نمایش پروفایل آموزشگاه‌ها و کلاس‌ها در سایت، کلاس‌یار اطلاعاتی که آموزشگاه در اختیار پلتفرم قرار می‌دهد نمایش می‌دهد.",
      items: [
        "نام آموزشگاه، آدرس، شماره تماس، ایمیل",
        "توضیحات، تصاویر، دسته‌بندی‌ها و امکانات",
        "لینک شبکه‌های اجتماعی",
        "لیست کلاس‌ها و اطلاعات عمومی مربوط به هر کلاس",
        "ساعات کاری و نقشهٔ مکان",
        "اطلاعات آماری عمومی مانند تعداد بازدید و میانگین امتیاز",
      ],
    },
    {
      id: "data-usage",
      icon: <Settings className="w-6 h-6" />,
      title: "۴. نحوه استفاده از اطلاعات",
      content:
        "کلاس‌یار از اطلاعات جمع‌آوری‌شده برای اهداف زیر استفاده می‌کند:",
      items: [
        "ایجاد و مدیریت حساب کاربری و تأیید هویت با شماره تلفن",
        "انجام فرآیند رزرو و ارسال اطلاعات مورد نیاز به آموزشگاه مربوطه",
        "نمایش پروفایل آموزشگاه‌ها و کلاس‌ها و بهبود نتایج جست‌وجو",
        "ارائه پیشنهادات مرتبط و شخصی‌سازی محتوا (در صورت فعال بودن)",
        "تحلیل داده‌ها جهت بهبود عملکرد پلتفرم و تجربه کاربری",
        "پیشگیری از سوءاستفاده و رفتارهای تقلبی در سامانه",
        "ارسال پیام‌ها و اعلان‌های ضروری (مانند تأیید رزرو)",
      ],
    },
    {
      id: "data-sharing",
      icon: <Share2 className="w-6 h-6" />,
      title: "۵. اشتراک‌گذاری اطلاعات",
      content:
        "کلاس‌یار اطلاعات شما را تنها در موارد مشخص و محدود با سایر نهادها به اشتراک می‌گذارد:",
      subsections: [
        {
          id: "institute-sharing",
          title: "۵.۱. اشتراک‌گذاری با آموزشگاه‌ها",
          content:
            "هنگام ثبت یا رزرو یک کلاس، اطلاعات لازم جهت پیگیری درخواست (مانند نام، شماره تماس، سن در صورت نیاز، و پیام مرتبط) به آموزشگاه ارسال می‌شود تا آموزشگاه بتواند هماهنگی‌های لازم را انجام دهد.",
        },
        {
          id: "legal-sharing",
          title: "۵.۲. مراجع قانونی",
          content:
            "در صورت دریافت درخواست قانونی یا حکمی از مراجع قضایی یا دولتی، کلاس‌یار ممکن است اطلاعات را مطابق قوانین و مقررات در اختیار آن مراجع قرار دهد.",
        },
      ],
    },
    {
      id: "security",
      icon: <Lock className="w-6 h-6" />,
      title: "۶. امنیت اطلاعات",
      content:
        "کلاس‌یار از استانداردهای فنی و عملیاتی برای حفاظت از اطلاعات استفاده می‌کند از جمله:",
      items: [
        "نگهداری داده‌ها در سرورهای امن و مرکز داده معتبر",
        "محدودسازی دسترسی‌ها براساس نقش‌های داخلی و کنترل‌های دسترسی",
        "استفاده از پروتکل‌های رمزنگاری برای انتقال داده‌ها (HTTPS/TLS)",
        "همکاری با درگاه‌های پرداخت معتبر و عدم ذخیرهٔ اطلاعات کارت بانکی",
        "نظارت و اقدامات پیشگیرانه برای جلوگیری از نفوذ و سوءاستفاده",
      ],
    },
    {
      id: "user-rights",
      icon: <Key className="w-6 h-6" />,
      title: "۷. حقوق کاربران",
      content: "کاربران حق دارند:",
      items: [
        "به اطلاعات شخصی خود دسترسی داشته و آن را مشاهده کنند",
        "اطلاعات نادرست را اصلاح یا به‌روزرسانی کنند",
        "درخواست محدودسازی یا حذف حساب کاربری را ثبت کنند",
        "درخواست حذف نظرات یا داده‌های خاص خود را مطرح کنند",
      ],
      note: "برای اعمال این حقوق می‌توانید از طریق ایمیل یا فرم تماس با ما اقدام نمایید؛ تیم پشتیبانی پس از احراز هویت درخواست را بررسی خواهد کرد.",
    },
    {
      id: "cookies",
      icon: <Cookie className="w-6 h-6" />,
      title: "۸. کوکی‌ها و داده‌های فنی",
      content:
        "کلاس‌یار از کوکی‌ها و ابزارهای تحلیلی برای بهبود تجربه کاربری و تحلیل عملکرد سایت استفاده می‌کند. این داده‌ها شامل موارد فنی (مانند IP، نوع مرورگر، صفحات بازدیدشده و زمان ماندن) است. شما می‌توانید مدیریت کوکی‌ها را از طریق تنظیمات مرورگر خود انجام دهید.",
    },
    {
      id: "data-retention",
      icon: <Clock className="w-6 h-6" />,
      title: "۹. مدت نگهداری داده‌ها",
      content:
        "کلاس‌یار داده‌ها را تنها تا زمانی نگهداری می‌کند که برای ارائه خدمات یا انجام تکالیف قانونی لازم باشد. سیاست نگهداری دقیق داده‌ها براساس نوع داده و الزامات قانونی تعیین می‌شود و در صورت تغییرات ساختاری اطلاع‌رسانی خواهد شد.",
    },
    {
      id: "changes",
      icon: <FileText className="w-6 h-6" />,
      title: "۱۰. تغییرات در سیاست حفظ حریم خصوصی",
      content:
        "کلاس‌یار ممکن است این سیاست را مطابق با توسعهٔ خدمات یا تغییر در قوانین به‌روزرسانی کند. در صورت تغییرات مهم، اطلاع‌رسانی در وب‌سایت انجام می‌شود و استفادهٔ مداوم شما به منزلهٔ پذیرش نسخهٔ جدید است.",
    },
    {
      id: "contact",
      icon: <Mail className="w-6 h-6" />,
      title: "۱۱. تماس و پشتیبانی",
      content:
        "در صورت سؤال یا درخواست مرتبط با حریم خصوصی، می‌توانید با ما تماس بگیرید:",
      contact: {
        phone: "۰۹۲۳۲۸۹۴۵۰۸",
        email: "kelassyar@gmail.com",
      },
      note: "تیم کلاس‌یار سعی می‌کند در اسرع وقت و پس از انجام مراحل احراز هویت پاسخ لازم را ارائه دهد.",
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
              <h2 className="font-bold text-lg text-gray-800 mb-6 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" />
                فهرست مطالب
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-right py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-end gap-2 ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-600 border-r-4 border-blue-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                    }`}
                  >
                    <span>{section.title}</span>
                    <span className="text-blue-400">{section.icon}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Info Box */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  نکات کلیدی
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>اطلاعات بانکی در سرورهای ما ذخیره نمی‌شود</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>ارتباط رمزنگاری‌شده با پروتکل HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>حق دسترسی و اصلاح اطلاعات برای کاربران</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
              {/* Introduction Banner */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  سیاست حفظ حریم خصوصی کلاس‌یار
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  تعهد ما به شفافیت، امنیت و احترام به حریم خصوصی شما
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600">{section.icon}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                          {section.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {section.content}
                        </p>
                      </div>
                    </div>

                    {/* Items List */}
                    {section.items && (
                      <div className="mr-16 mb-6">
                        <ul className="space-y-3">
                          {section.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="space-y-8 mr-16">
                        {section.subsections.map((subsection) => (
                          <div
                            key={subsection.id}
                            className="bg-gray-50 rounded-xl p-6"
                          >
                            <h3 className="font-bold text-lg text-gray-800 mb-3">
                              {subsection.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {subsection.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contact Info */}
                    {section.contact && (
                      <div className="mr-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <Phone className="w-5 h-5 text-blue-600" />
                              <h4 className="font-bold text-gray-800">
                                شماره تماس
                              </h4>
                            </div>
                            <a
                              href={`tel:${section.contact.phone}`}
                              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                            >
                              {section.contact.phone}
                            </a>
                          </div>
                          <div className="bg-blue-50 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <Mail className="w-5 h-5 text-blue-600" />
                              <h4 className="font-bold text-gray-800">ایمیل</h4>
                            </div>
                            <a
                              href={`mailto:${section.contact.email}`}
                              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                            >
                              {section.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Note */}
                    {section.note && (
                      <div className="mr-16 mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-700 text-sm">{section.note}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-medium">
                    <Shield className="w-5 h-5" />
                    کلاس‌یار — حفاظت از حریم خصوصی شما
                  </div>
                  <p className="text-gray-500 text-sm mt-4">
                    این صفحه آخرین بار در تاریخ ۱۴۰۳/۱۰/۱۷ به‌روزرسانی شده است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
