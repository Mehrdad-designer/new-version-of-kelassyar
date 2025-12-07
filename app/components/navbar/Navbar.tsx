// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
// import SearchBar from "../classes/SearchBar/SearchBar";
import Image from "next/image";
import TopNav from "./../topNav/TopNav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="flex justify-center flex-col h-20">
      <TopNav />
      <header
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-14"
      >
        <nav className="bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">          
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {/* Home */}
                <Link
                  href="/"
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  <span>خانه</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* آموزشگاه‌ها Dropdown */}
                <div className="dropdown relative group">
                  <button className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1">
                    <span>آموزشگاه‌ها</span>
                    <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  </button>
                  <div className="dropdown-menu absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link
                      href="/institutes"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-list-ul text-primary-500"></i>
                      <span>همه آموزشگاه‌ها</span>
                    </Link>
                    <Link
                      href="/institutes/popular"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-fire text-orange-500"></i>
                      <span>محبوب‌ترین‌ها</span>
                    </Link>
                    <Link
                      href="/institutes/new"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-clock text-green-500"></i>
                      <span>جدیدترین‌ها</span>
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <Link
                      href="/institutes/register"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-plus-circle text-primary-500"></i>
                      <span>ثبت آموزشگاه</span>
                    </Link>
                  </div>
                </div>

                {/* کلاس‌ها Dropdown */}
                <div className="dropdown relative group">
                  <button className="px-4 py-2 text-primary-600 font-bold transition-colors flex items-center gap-1">
                    <span>کلاس‌ها</span>
                    <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  </button>
                  <div className="dropdown-menu absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link
                      href="/classes"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-th-large text-primary-500"></i>
                      <span>همه کلاس‌ها</span>
                    </Link>
                    <Link
                      href="/classes/popular"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-star text-yellow-500"></i>
                      <span>پرطرفدارترین‌ها</span>
                    </Link>
                    <Link
                      href="/classes/new"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <i className="fas fa-bolt text-orange-500"></i>
                      <span>تازه‌ترین‌ها</span>
                    </Link>
                  </div>
                </div>

                {/* دسته‌بندی Mega Menu */}
                <div className="dropdown relative group">
                  <button className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1">
                    <span>دسته‌بندی</span>
                    <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  </button>
                  <div className="dropdown-menu absolute top-full right-0 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="grid grid-cols-3 gap-6">
                      {/* هنری */}
                      <div className="nested-dropdown relative group/nested">
                        <Link
                          href="/categories/art"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-palette text-pink-500"></i>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              هنری
                            </span>
                            <i className="fas fa-chevron-left text-xs text-gray-400 mr-2"></i>
                          </div>
                        </Link>
                        <div className="nested-dropdown-menu absolute top-0 left-full mr-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            هنرهای تجسمی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            هنرهای نمایشی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            موسیقی و صدا
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            هنرهای دیجیتال
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            صنایع دستی و سنتی
                          </Link>
                        </div>
                      </div>

                      {/* ورزشی */}
                      <div className="nested-dropdown relative group/nested">
                        <Link
                          href="/categories/sports"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-futbol text-green-500"></i>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              ورزشی
                            </span>
                            <i className="fas fa-chevron-left text-xs text-gray-400 mr-2"></i>
                          </div>
                        </Link>
                        <div className="nested-dropdown-menu absolute top-0 left-full mr-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            ورزش‌های فکری
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            ورزش‌های قدرتی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            ورزش‌های رزمی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            ورزش‌های آبی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            ورزش‌های توپی
                          </Link>
                        </div>
                      </div>

                      {/* زبان‌های خارجی */}
                      <div className="nested-dropdown relative group/nested">
                        <Link
                          href="/categories/languages"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-language text-blue-500"></i>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              زبان‌ها
                            </span>
                            <i className="fas fa-chevron-left text-xs text-gray-400 mr-2"></i>
                          </div>
                        </Link>
                        <div className="nested-dropdown-menu absolute top-0 left-full mr-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            انگلیسی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            فرانسوی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            آلمانی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            چینی
                          </Link>
                        </div>
                      </div>

                      {/* فناوری */}
                      <div className="nested-dropdown relative group/nested">
                        <Link
                          href="/categories/technology"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-laptop-code text-purple-500"></i>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              فناوری
                            </span>
                            <i className="fas fa-chevron-left text-xs text-gray-400 mr-2"></i>
                          </div>
                        </Link>
                        <div className="nested-dropdown-menu absolute top-0 left-full mr-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            فناوری اطلاعات
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            سخت‌افزار و الکترونیک
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            شبکه
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            فناوری‌های نوین
                          </Link>
                        </div>
                      </div>

                      {/* علمی */}
                      <div className="nested-dropdown relative group/nested">
                        <Link
                          href="/categories/science"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-flask text-yellow-500"></i>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              علمی
                            </span>
                            <i className="fas fa-chevron-left text-xs text-gray-400 mr-2"></i>
                          </div>
                        </Link>
                        <div className="nested-dropdown-menu absolute top-0 left-full mr-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            دروس تحصیلی
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm"
                          >
                            نجوم و هوافضا
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* وبلاگ */}
                <Link
                  href="/allBlogs"
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  <span>وبلاگ</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* تماس با ما */}
                <Link
                  href="/contact"
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  <span>تماس با ما</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* درباره ما */}
                <Link
                  href="/about"
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  <span>درباره ما</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/login"
                  className="bg-blue-700 px-5 py-2.5 text-primary-600 font-medium hover:bg-primary-50 rounded-xl transition-colors"
                >
                  ورود
                </Link>
                <Link
                  href="/signin"
                  className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-700 text-blue-950 font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  ثبت‌نام
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-bars text-2xl text-gray-700"></i>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <span className="text-lg font-bold text-primary-700">
                  کلاس‌یار
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <i className="fas fa-times text-xl text-gray-600"></i>
              </button>
            </div>

            <nav className="space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <i className="fas fa-home text-primary-500"></i>
                <span className="font-medium">خانه</span>
              </Link>

              {/* Mobile Accordion - آموزشگاه‌ها */}
              <div>
                <button
                  onClick={() => toggleAccordion("institutes")}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-primary-50 text-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <i className="fas fa-building text-primary-500"></i>
                    <span className="font-medium">آموزشگاه‌ها</span>
                  </div>
                  <i
                    className={`fas fa-chevron-down text-xs text-gray-400 transition-transform ${
                      activeAccordion === "institutes" ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`pr-10 space-y-1 overflow-hidden transition-all duration-300 ${
                    activeAccordion === "institutes" ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <Link
                    href="/institutes"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    همه آموزشگاه‌ها
                  </Link>
                  <Link
                    href="/institutes/popular"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    محبوب‌ترین‌ها
                  </Link>
                  <Link
                    href="/institutes/new"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    جدیدترین‌ها
                  </Link>
                </div>
              </div>

              {/* Mobile Accordion - کلاس‌ها */}
              <div>
                <button
                  onClick={() => toggleAccordion("classes")}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-primary-50 text-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <i className="fas fa-chalkboard text-primary-500"></i>
                    <span className="font-medium">کلاس‌ها</span>
                  </div>
                  <i
                    className={`fas fa-chevron-down text-xs text-gray-400 transition-transform ${
                      activeAccordion === "classes" ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`pr-10 space-y-1 overflow-hidden transition-all duration-300 ${
                    activeAccordion === "classes" ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <Link
                    href="/classes"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    همه کلاس‌ها
                  </Link>
                  <Link
                    href="/classes/popular"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    پرطرفدارترین‌ها
                  </Link>
                  <Link
                    href="/classes/new"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    تازه‌ترین‌ها
                  </Link>
                </div>
              </div>

              {/* Mobile Accordion - دسته‌بندی */}
              <div>
                <button
                  onClick={() => toggleAccordion("categories")}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-primary-50 text-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <i className="fas fa-th-large text-primary-500"></i>
                    <span className="font-medium">دسته‌بندی</span>
                  </div>
                  <i
                    className={`fas fa-chevron-down text-xs text-gray-400 transition-transform ${
                      activeAccordion === "categories" ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`pr-10 space-y-1 overflow-hidden transition-all duration-300 ${
                    activeAccordion === "categories" ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <Link
                    href="/categories/art"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    هنری
                  </Link>
                  <Link
                    href="/categories/sports"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    ورزشی
                  </Link>
                  <Link
                    href="/categories/languages"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    زبان‌های خارجی
                  </Link>
                  <Link
                    href="/categories/technology"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    فناوری
                  </Link>
                  <Link
                    href="/categories/science"
                    className="block p-2 text-gray-600 hover:text-primary-600 text-sm"
                  >
                    علمی
                  </Link>
                </div>
              </div>

              <Link
                href="/allBlogs"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <i className="fas fa-blog text-primary-500"></i>
                <span className="font-medium">وبلاگ</span>
              </Link>

              <Link
                href="./../../contact"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <i className="fas fa-phone text-primary-500"></i>
                <span className="font-medium">تماس با ما</span>
              </Link>

              <Link
                href="./../../about"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <i className="bg-blue-700 fas fa-info-circle text-primary-500"></i>
                <span className="font-medium">درباره ما</span>
              </Link>
            </nav>

            <div className=" mt-8 space-y-3">
              <Link
                href="/login"
                className="block w-full py-3 text-center text-primary-600 font-medium border-2 border-primary-500 rounded-xl hover:bg-primary-50 transition-colors"
              >
                ورود
              </Link>
              <Link
                href="/signin"
                className="block w-full py-3 text-center text-blue-500 border-2 border-b-blue-500 font-medium bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl hover:shadow-lg transition-all"
              >
                ثبت‌نام
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          ></div>
        )}
      </header>
    </div>
  );
}
