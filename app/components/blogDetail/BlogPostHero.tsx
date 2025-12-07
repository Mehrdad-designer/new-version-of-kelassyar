// components/blog-detail/BlogPostHero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface Author {
  name: string;
  image: string;
  title: string;
}

interface BlogPost {
  title: string;
  image: string;
  category: string;
  categoryColor: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  views: number;
  likes: number;
  commentsCount: number;
}

interface BlogPostHeroProps {
  post: BlogPost;
}

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const categoryColors: Record<string, string> = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-violet-500",
    cyan: "from-cyan-500 to-teal-500",
    pink: "from-pink-500 to-rose-500",
    orange: "from-orange-500 to-red-500",
    red: "from-red-500 to-pink-500",
    indigo: "from-indigo-500 to-purple-500",
  };

  const gradientClass =
    categoryColors[post.categoryColor] || categoryColors.blue;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <section
      className="relative overflow-hidden bg-gray-900 h-80"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-30"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto h-96">
          {/* Category Badge */}
          <div className="mb-6">
            <span
              className={`inline-block px-5 py-2 bg-gradient-to-r ${gradientClass} text-white font-bold rounded-full shadow-lg`}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                {/* <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div>
                <div className="font-bold text-white">{post.author.name}</div>
                <div className="text-sm text-gray-300">{post.author.title}</div>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20"></div>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-300">
              <i className="far fa-calendar"></i>
              <span>{post.publishedAt}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-2 text-gray-300">
              <i className="far fa-clock"></i>
              <span>{post.readTime}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 text-gray-300">
              <i className="far fa-eye"></i>
              <span>{post.views.toLocaleString("fa-IR")}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleLike}
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                isLiked
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              <i className={`${isLiked ? "fas" : "far"} fa-heart`}></i>
              {likesCount.toLocaleString("fa-IR")}
            </button>

            <button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2">
              <i className="far fa-comment"></i>
              {post.commentsCount.toLocaleString("fa-IR")}
            </button>

            <button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2">
              <i className="fas fa-share-alt"></i>
              اشتراک‌گذاری
            </button>

            <button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2">
              <i className="far fa-bookmark"></i>
              ذخیره
            </button>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
