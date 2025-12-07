// components/institutes/InstituteCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Institute {
  id: number;
  name: string;
  slug: string;
  image: string;
  logo: string;
  coverColor: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  classesCount: number;
  coursesCount: number;
  viewsCount: number;
  isVerified: boolean;
  isOpen: boolean;
  hasOnlineClasses: boolean;
  establishedYear: number;
  categories: string[];
  features: string[];
  workingHours: string;
  priceRange: { min: number; max: number };
}

interface InstituteCardProps {
  data: Institute;
}

export default function InstituteCard({ data }: InstituteCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

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

  return (
    <div className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        {/* <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${data.coverColor} opacity-60`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {data.isVerified && (
            <span className="px-2.5 py-1 bg-blue-500 text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-lg">
              <i className="fas fa-check-circle"></i>
              تأیید شده
            </span>
          )}
          {data.hasOnlineClasses && (
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

        {/* Status Badge */}
        <div className="absolute bottom-3 right-3">
          <span
            className={`px-3 py-1 ${
              data.isOpen ? "bg-green-500" : "bg-red-500"
            } text-white text-xs font-bold rounded-full`}
          >
            {data.isOpen ? "در حال پذیرش" : "ظرفیت تکمیل"}
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
        {/* Logo & Name */}
        <div className="flex items-start gap-3 mb-4">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden ring-2 ring-gray-100 flex-shrink-0 -mt-10 bg-white shadow-lg">
            {/* <Image
              src={data.logo}
              alt={`لوگو ${data.name}`}
              fill
              className="object-cover"
            /> */}
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {data.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                {renderStars(data.rating)}
              </div>
              <span className="font-bold text-gray-700 text-sm">
                {data.rating}
              </span>
              <span className="text-xs text-gray-400">
                ({data.reviewsCount.toLocaleString("fa-IR")})
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Address */}
        <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
          <i className="fas fa-map-marker-alt text-red-500 mt-0.5"></i>
          <span className="line-clamp-1">{data.address}</span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-4">
          {data.categories.slice(0, 3).map((cat, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg"
            >
              {cat}
            </span>
          ))}
          {data.categories.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
              +{data.categories.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-gray-100">
          <div className="text-center">
            <div className="text-blue-600 font-bold text-lg">
              {data.classesCount}
            </div>
            <div className="text-xs text-gray-500">کلاس فعال</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-green-600 font-bold text-lg">
              {(data.studentsCount / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-gray-500">هنرجو</div>
          </div>
          <div className="text-center">
            <div className="text-purple-600 font-bold text-lg">
              {data.coursesCount}
            </div>
            <div className="text-xs text-gray-500">دوره</div>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <i className="fas fa-coins text-orange-500"></i>
            محدوده قیمت:
          </span>
          <span className="text-sm font-bold text-gray-800">
            {(data.priceRange.min / 1000000).toFixed(1)} -{" "}
            {(data.priceRange.max / 1000000).toFixed(1)} میلیون
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/institutes/${data.slug}`}
            className="flex-1 py-3 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            مشاهده پروفایل
          </Link>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-500 hover:bg-green-50 transition-all">
            <i className="fas fa-phone"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
