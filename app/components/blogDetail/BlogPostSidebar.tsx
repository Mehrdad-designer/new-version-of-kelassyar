// components/blog-post/BlogPostSidebar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Author {
  id: number;
  name: string;
  image: string;
  title: string;
  postsCount: number;
  followersCount: number;
}

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface RelatedPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  categoryColor: string;
  readTime: string;
  views: number;
}

interface BlogPostSidebarProps {
  author: Author;
  tableOfContents: TOCItem[];
  relatedPosts: RelatedPost[];
}

export default function BlogPostSidebar({
  author,
  tableOfContents,
  relatedPosts,
}: BlogPostSidebarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="lg:sticky lg:top-24 space-y-6">
      {/* Author Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-user-edit text-blue-500"></i>
          نویسنده
        </h3>

        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 mb-3">
            {/* <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            /> */}
          </div>

          <h4 className="font-bold text-gray-800 mb-1">{author.name}</h4>
          <p className="text-sm text-gray-500 mb-4">{author.title}</p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">
                {author.postsCount}
              </div>
              <div className="text-xs text-gray-500">مقاله</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">
                {author.followersCount.toLocaleString("fa-IR")}
              </div>
              <div className="text-xs text-gray-500">دنبال‌کننده</div>
            </div>
          </div>

          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`w-full py-2 rounded-lg font-medium transition-colors ${
              isFollowing
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isFollowing ? (
              <>
                <i className="fas fa-check ml-2"></i>
                دنبال می‌کنید
              </>
            ) : (
              <>
                <i className="fas fa-plus ml-2"></i>
                دنبال کردن
              </>
            )}
          </button>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-list text-green-500"></i>
          فهرست مطالب
        </h3>
      </div>

      {/* Related Posts */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-fire text-orange-500"></i>
          مقالات مرتبط
        </h3>

        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex gap-3">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.views.toLocaleString("fa-IR")} بازدید</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-envelope text-2xl"></i>
          </div>
          <h3 className="font-bold text-lg mb-2">عضویت در خبرنامه</h3>
          <p className="text-purple-100 text-sm mb-4">
            جدیدترین مقالات را در ایمیل خود دریافت کنید
          </p>
          <input
            type="email"
            placeholder="ایمیل شما"
            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
          />
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors">
            عضویت
          </button>
        </div>
      </div>
    </div>
  );
}
