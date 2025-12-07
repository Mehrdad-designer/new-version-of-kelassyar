// components/blog/BlogNewsletter.tsx
"use client";

import { useState } from "react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
          <i className="fas fa-envelope-open-text text-2xl"></i>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl mb-2">عضویت در خبرنامه</h3>

        {/* Description */}
        <p className="text-blue-100 text-sm mb-6 leading-relaxed">
          جدیدترین مقالات و نکات آموزشی را مستقیم در ایمیل خود دریافت کنید
        </p>

        {/* Form */}
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل شما"
              required
              className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubscribing ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  در حال ثبت...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  عضویت در خبرنامه
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-4 bg-green-500/20 border border-green-300/30 rounded-xl flex items-center gap-3">
            <i className="fas fa-check-circle text-green-300 text-2xl"></i>
            <div>
              <div className="font-bold">عضویت موفق!</div>
              <div className="text-sm text-green-100">
                به خبرنامه ما خوش آمدید
              </div>
            </div>
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-blue-200 mt-4 flex items-center gap-2">
          <i className="fas fa-shield-alt"></i>
          ایمیل شما محفوظ است و به اشتراک گذاشته نمی‌شود
        </p>
      </div>
    </div>
  );
}
