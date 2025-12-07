// components/blog/PopularPosts.tsx
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  image: string;
  title: string;
}

interface PopularPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  views: number;
}

interface PopularPostsProps {
  posts: PopularPost[];
}

export default function PopularPosts({ posts }: PopularPostsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-5">
        <h3 className="font-bold text-white flex items-center gap-2">
          <i className="fas fa-fire"></i>
          محبوب‌ترین مقالات
        </h3>
      </div>

      {/* Posts List */}
      <div className="divide-y divide-gray-100">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group"
          >
            {/* Rank */}
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                index === 0
                  ? "bg-yellow-100 text-yellow-600"
                  : index === 1
                  ? "bg-gray-100 text-gray-600"
                  : index === 2
                  ? "bg-orange-100 text-orange-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {(index + 1).toLocaleString("fa-IR")}
            </div>

            {/* Image */}
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              {/* <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              /> */}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                {post.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fas fa-eye text-blue-500"></i>
                  {post.views.toLocaleString("fa-IR")}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
