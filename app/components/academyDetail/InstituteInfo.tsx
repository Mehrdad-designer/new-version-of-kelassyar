"use client";

import { Building2, Calendar, MapPin, User, CheckCircle2 } from "lucide-react";

interface InstituteInfoProps {
  institute: any;
}

export default function InstituteInfo({ institute }: InstituteInfoProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Additional Information Card */}
      <div className="lg:col-span-1">
        <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            اطلاعات تکمیلی
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
              <User className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500">مدیریت</p>
                <p className="font-medium text-gray-800">
                  {institute.management}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg">
              <Calendar className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-xs text-gray-500">سال تأسیس</p>
                <p className="font-medium text-gray-800">
                  {institute.date_of_establishment}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-lg">
              <Building2 className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-xs text-gray-500">دسته‌بندی</p>
                <p className="font-medium text-gray-800">
                  {institute.category}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-orange-50/50 rounded-lg">
              <MapPin className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-xs text-gray-500">موقعیت</p>
                <p className="font-medium text-gray-800">
                  {institute.province} - {institute.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Map */}
      <div className="lg:col-span-2 space-y-6">
        {/* Facilities */}
        <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            امکانات و تجهیزات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {institute.facilities.map((facility: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg hover:shadow-md transition"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            موقعیت مکانی
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={institute.url_of_iframe_of_address}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
