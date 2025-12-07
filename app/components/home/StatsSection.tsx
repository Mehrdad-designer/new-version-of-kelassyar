// components/home/StatsSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef < HTMLDivElement > (null);

    const stats = [
        {
            icon: 'fa-building',
            value: 250,
            label: 'آموزشگاه فعال',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-500'
        },
        {
            icon: 'fa-book-open',
            value: 1500,
            label: 'کلاس آموزشی',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-100',
            iconColor: 'text-green-500'
        },
        {
            icon: 'fa-user-graduate',
            value: 12000,
            label: 'دانشجوی فعال',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-100',
            iconColor: 'text-purple-500'
        },
        {
            icon: 'fa-chalkboard-teacher',
            value: 800,
            label: 'مدرس مجرب',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-100',
            iconColor: 'text-orange-500'
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime: number;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = (currentTime - startTime) / duration;

                if (progress < 1) {
                    setCount(Math.floor(end * progress));
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }, [isVisible, end, duration]);

        return <span>{count.toLocaleString('fa-IR')}</span>;
    };

    return (
        <section ref={sectionRef} className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        کلاس‌یار در یک نگاه
                    </h2>
                    <p className="text-gray-600 text-lg">
                        آمار و ارقام پلتفرم آموزشی کلاس‌یار
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-2xl ${stat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <i className={`fas ${stat.icon} text-3xl ${stat.iconColor}`}></i>
                            </div>
                            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                {isVisible && <AnimatedCounter end={stat.value} />}+
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}