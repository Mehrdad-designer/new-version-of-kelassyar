"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Eye, ArrowLeft } from "lucide-react";

interface PopularKelassesProps {
  kelasses: any[];
}

export default function PopularKelasses({ kelasses }: PopularKelassesProps) {
  // Sort by rating and take top 4
  const topKelasses = [...kelasses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">کلاس‌های محبوب</h2>
        <Link
          href="/kelasses"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
        >
          <span>مشاهده همه</span>
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topKelasses.map((kelas) => (
          <div
            key={kelas.id}
            className="group backdrop-blur-sm bg-white/80 rounded-xl overflow-hidden border border-white/60 shadow-md hover:shadow-xl transition"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={kelas.thumbnail}
                alt={kelas.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star className="w-4 h-4 fill-white text-white" />
                <span className="text-sm font-bold text-white">
                  {kelas.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {kelas.category}
                </span>
              </div>

              <h3 className="font-bold text-lg text-gray-800 line-clamp-2 group-hover:text-blue-600 transition">
                {kelas.name}
              </h3>

              {kelas.teacher && (
                <p className="text-sm text-gray-600">👨‍🏫 {kelas.teacher}</p>
              )}

              <p className="text-sm text-gray-600 line-clamp-2">
                {kelas.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 pt-2 border-t border-gray-200">
                <Eye className="w-4 h-4" />
                <span>{kelas.visit_count.toLocaleString()} بازدید</span>
              </div>

              <Link
                href={`/kelas/${kelas.id}`}
                className="block w-full text-center py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium"
              >
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
