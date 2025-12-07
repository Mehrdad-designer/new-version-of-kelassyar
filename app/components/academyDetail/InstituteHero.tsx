"use client";

import Image from "next/image";
import { Star, Eye, MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

interface InstituteHeroProps {
  institute: any;
}

export default function InstituteHero({ institute }: InstituteHeroProps) {
  const socialIcons: any = {
    instagram: FaInstagram,
    telegram: FaTelegram,
    linkedin: FaLinkedin,
  };

  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={institute.image_cover}
          alt={institute.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Right Side - Main Info */}
              <div className="text-white space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                  {institute.name}
                </h1>

                {/* Rating & Visits */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-lg">
                      {institute.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
                    <Eye className="w-5 h-5" />
                    <span className="font-medium">
                      {institute.visit_count.toLocaleString()} بازدید
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {institute.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-white/90 leading-relaxed line-clamp-3">
                  {institute.description}
                </p>
              </div>

              {/* Left Side - Contact Info */}
              <div className="space-y-3">
                <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 space-y-3">
                  {/* Address */}
                  <div className="flex items-start gap-3 text-white">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm">{institute.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 text-white">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <a
                      href={`tel:${institute.phone_number}`}
                      className="text-sm hover:text-blue-300 transition"
                    >
                      {institute.phone_number}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 text-white">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <a
                      href={`mailto:${institute.email}`}
                      className="text-sm hover:text-blue-300 transition"
                    >
                      {institute.email}
                    </a>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-3 text-white">
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <a
                      href={institute.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-blue-300 transition"
                    >
                      وب‌سایت رسمی
                    </a>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3 text-white">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm">{institute.working_hours}</span>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                    {institute.social_media.map(
                      (social: any, index: number) => {
                        const Icon = socialIcons[social.platform];
                        return (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition border border-white/30"
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </a>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
