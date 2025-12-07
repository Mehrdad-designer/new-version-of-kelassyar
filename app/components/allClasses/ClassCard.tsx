// components/classes/ClassCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ClassCardProps {
  data: {
    id: number;
    title: string;
    slug: string;
    image: string;
    institute: {
      id: number;
      name: string;
      slug: string;
      logo: string;
      isVerified: boolean;
    };
    instructor: {
      name: string;
      avatar: string;
      rating: number;
    };
    category: string;
    subcategory: string;
    level: string;
    price: number;
    discount: number;
    duration: string;
    sessionsCount: number;
    startDate: string;
    schedule: {
      days: string[];
      time: string;
    };
    capacity: number;
    enrolled: number;
    rating: number;
    reviewsCount: number;
    viewsCount: number;
    isOnline: boolean;
    hasVideo: boolean;
    hasCertificate: boolean;
    description: string;
    features: string[];
  };
}

export default function ClassCard({ data }: ClassCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const finalPrice = data.price - (data.price * data.discount) / 100;
  const availableSeats = data.capacity - data.enrolled;
  const seatPercentage = (data.enrolled / data.capacity) * 100;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <i
            key={i}
            className="fas fa-star-half-alt text-yellow-400 text-xs"
          ></i>
        );
      } else {
        stars.push(
          <i key={i} className="far fa-star text-yellow-400 text-xs"></i>
        );
      }
    }
    return stars;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "مقدماتی":
        return "bg-green-100 text-green-700";
      case "متوسط":
        return "bg-blue-100 text-blue-700";
      case "پیشرفته":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-orange-100 text-orange-700";
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {data.discount > 0 && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-lg">
              <i className="fas fa-tag"></i>
              {data.discount}% تخفیف
            </span>
          )}
          {data.isOnline && (
            <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-lg">
              <i className="fas fa-video"></i>
              آنلاین
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        >
          <i
            className={`${isFavorite ? "fas" : "far"} fa-heart ${
              isFavorite ? "text-red-500" : "text-gray-600"
            }`}
          ></i>
        </button>

        {/* Level Badge */}
        <div className="absolute bottom-3 right-3">
          <span
            className={`px-3 py-1 ${getLevelColor(
              data.level
            )} text-xs font-bold rounded-full`}
          >
            {data.level}
          </span>
        </div>

        {/* Views Count */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
            <i className="fas fa-eye"></i>
            {data.viewsCount.toLocaleString("fa-IR")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-lg font-medium">
            {data.category}
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{data.subcategory}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 line-clamp-2 mb-3 group-hover:text-purple-600 transition-colors min-h-[3.5rem]">
          {data.title}
        </h3>

        {/* Institute */}
        <Link
          href={`/institutes/${data.institute.slug}`}
          className="flex items-center gap-2 mb-3 group/institute"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-2 ring-gray-100">
            <Image
              src={data.institute.logo}
              alt={data.institute.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 line-clamp-1 group-hover/institute:text-purple-600 transition-colors">
              {data.institute.name}
            </p>
          </div>
          {data.institute.isVerified && (
            <i className="fas fa-check-circle text-blue-500 text-xs"></i>
          )}
        </Link>

        {/* Instructor */}
        <div className="flex items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={data.instructor.avatar}
              alt={data.instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 line-clamp-1">
              {data.instructor.name}
            </p>
            <div className="flex items-center gap-1">
              {renderStars(data.instructor.rating)}
              <span className="text-xs text-gray-500 mr-1">
                {data.instructor.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <i className="fas fa-calendar text-blue-500 w-4"></i>
            <span>{data.schedule.days.join("، ")}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <i className="fas fa-clock text-green-500 w-4"></i>
            <span>{data.schedule.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <i className="fas fa-play-circle text-purple-500 w-4"></i>
            <span>شروع: {data.startDate}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gray-100">
          <div className="text-center">
            <div className="text-purple-600 font-bold">
              {data.sessionsCount}
            </div>
            <div className="text-xs text-gray-500">جلسه</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-blue-600 font-bold">{data.duration}</div>
            <div className="text-xs text-gray-500">مدت دوره</div>
          </div>
          <div className="text-center">
            <div className="text-green-600 font-bold">{availableSeats}</div>
            <div className="text-xs text-gray-500">ظرفیت باقی</div>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>
              ظرفیت: {data.enrolled}/{data.capacity}
            </span>
            <span>{seatPercentage.toFixed(0)}% پر شده</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                seatPercentage >= 80
                  ? "bg-red-500"
                  : seatPercentage >= 50
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}
              style={{ width: `${seatPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.hasVideo && (
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <i className="fas fa-video text-purple-500"></i>
              ویدیو
            </span>
          )}
          {data.hasCertificate && (
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <i className="fas fa-certificate text-blue-500"></i>
              گواهینامه
            </span>
          )}
          {data.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <i className="fas fa-check text-green-500"></i>
              {feature}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {data.discount > 0 && (
              <span className="text-sm text-gray-400 line-through block">
                {data.price.toLocaleString("fa-IR")}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-800">
                {finalPrice.toLocaleString("fa-IR")}
              </span>
              <span className="text-sm text-gray-500">تومان</span>
            </div>
          </div>
          <Link
            href={`/classes/${data.slug}`}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            ثبت‌نام
          </Link>
        </div>
      </div>
    </div>
  );
}
