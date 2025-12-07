// components/blog-post/BlogPostRelated.tsx
import Image from "next/image";
import Link from "next/link";

export default function BlogPostRelated() {

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <i className="fas fa-book-reader text-white text-xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">مقالات مرتبط</h2>
            <p className="text-gray-500">
              مطالب مشابهی که ممکن است علاقه‌مند باشید
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-medium rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
          >
            مشاهده همه مقالات
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
