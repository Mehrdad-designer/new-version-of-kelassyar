// components/blog-detail/BlogPostContent.tsx
"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface BlogPostContentProps {
  content: string;
  tableOfContents: TOCItem[];
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showTOC, setShowTOC] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    return () => observer.disconnect();
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
      {/* Table of Contents Toggle (Mobile) */}
      <div className="lg:hidden border-b border-gray-100">
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <i
            className={`fas fa-chevron-down transition-transform ${
              showTOC ? "rotate-180" : ""
            }`}
          ></i>
        </button>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none p-8 md:p-12">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog-content"
        />
      </article>

      {/* Reading Progress Bar */}
      <div className="sticky bottom-0 left-0 right-0 h-1 bg-gray-100">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: "45%" }} // این باید با اسکرول محاسبه شود
        ></div>
      </div>
    </div>
  );
}
