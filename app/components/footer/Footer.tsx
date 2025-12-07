// components/Footer.tsx
import Link from "next/link";
import ruls from "./../../(pages)/ruls/page";
import page from "./../../(pages)/privecy/page";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Footer Column 1 - Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <div>
                <span className="text-2xl font-black">کلاس‌یار</span>
                <span className="block text-xs text-gray-400">
                  مرجع کلاس‌های آموزشی
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              یافتن کلاس مناسب شما در چند لحظه! با سایت کِلاس‌یار، کلاس‌های مورد
              نظر خود را به آسانی پیدا کنید.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Footer Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-link text-primary-500"></i>
              دسترسی سریع
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="/institutes"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  آموزشگاه‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  کلاس‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 - Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-th-large text-primary-500"></i>
              دسته‌بندی‌ها
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/art"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-palette text-pink-500 text-xs"></i>
                  هنری
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/sports"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-dumbbell text-green-500 text-xs"></i>
                  ورزشی
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/languages"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-language text-blue-500 text-xs"></i>
                  زبان‌های خارجی
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/technology"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-laptop-code text-purple-500 text-xs"></i>
                  فناوری
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/science"
                  className="text-gray-400 hover:text-primary-500 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-flask text-yellow-500 text-xs"></i>
                  علمی
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-phone text-primary-500"></i>
              تماس با ما
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary-500 mt-1"></i>
                <span className="text-gray-400">
                  نجف‌آباد، خیابان امام خمینی
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary-500"></i>
                <a
                  href="tel:03142222222"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  dir="ltr"
                >
                  031-4222-2222
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary-500"></i>
                <a
                  href="mailto:info@kelassyar.ir"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  info@kelassyar.ir
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-primary-500 mt-1"></i>
                <div className="text-gray-400">
                  <p>شنبه تا پنج‌شنبه</p>
                  <p className="text-sm">۸ صبح تا ۸ شب</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-right">
              © ۱۴۰۳ کلاس‌یار. تمامی حقوق محفوظ است.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                href="./../../ruls/"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                قوانین و مقررات
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="./../../privecy/"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                حریم خصوصی
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                سوالات متداول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
