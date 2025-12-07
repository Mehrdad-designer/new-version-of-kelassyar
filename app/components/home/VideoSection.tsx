// components/home/VideoSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            کلاس‌یار را بیشتر بشناسید
                        </h2>
                        <p className="text-gray-600 text-lg">
                            ویدیوی معرفی پلتفرم کلاس‌یار و نحوه استفاده از آن
                        </p>
                    </div>

                    {/* Video Player */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                        {!isPlaying ? (
                            <>
                                {/* <Image
                                    src="https://picsum.photos/1200/675?random=video"
                                    alt="ویدیو معرفی"
                                    width={1200}
                                    height={675}
                                    className="w-full"
                                /> */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center hover:scale-110 transition-all shadow-2xl"
                                    >
                                        <i className="fas fa-play text-blue-600 text-2xl mr-1"></i>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                    title="ویدیو معرفی کلاس‌یار"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>

                    {/* Video Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="w-14 h-14 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4">
                                <i className="fas fa-search text-white text-xl"></i>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">جستجوی آسان</h3>
                            <p className="text-gray-600 text-sm">پیدا کردن کلاس و آموزشگاه مورد نظر در چند ثانیه</p>
                        </div>

                        <div className="text-center p-6 bg-green-50 rounded-xl">
                            <div className="w-14 h-14 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-4">
                                <i className="fas fa-star text-white text-xl"></i>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">نظرات واقعی</h3>
                            <p className="text-gray-600 text-sm">مشاهده نظرات و امتیازات دیگر کاربران</p>
                        </div>

                        <div className="text-center p-6 bg-purple-50 rounded-xl">
                            <div className="w-14 h-14 mx-auto rounded-full bg-purple-500 flex items-center justify-center mb-4">
                                <i className="fas fa-user-check text-white text-xl"></i>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">ثبت نام آنلاین</h3>
                            <p className="text-gray-600 text-sm">امکان ثبت نام و پرداخت آنلاین</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}