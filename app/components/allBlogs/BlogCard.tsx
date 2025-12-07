// components/blog/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  image: string;
  title: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  views: number;
  likes: number;
  commentsCount: number;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "standard" | "featured";
}

export default function BlogCard({
  post,
  variant = "standard",
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    indigo: "bg-indigo-500",
  };

  const categoryBg = categoryColors[post.categoryColor] || categoryColors.blue;

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {/* <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          /> */}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-4 py-2 ${categoryBg} text-white text-sm font-bold rounded-full shadow-lg`}
            >
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full flex items-center gap-1 shadow-lg animate-pulse">
              <i className="fas fa-star"></i>
              ویژه
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-100">
                {/* <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div>
                <div className="font-medium text-gray-800 text-sm">
                  {post.author.name}
                </div>
                <div className="text-xs text-gray-500">{post.publishedAt}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <i className="far fa-clock text-blue-500"></i>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {/* <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 ${categoryBg} text-white text-xs font-bold rounded-lg shadow-md`}
          >
            {post.category}
          </span>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-md flex items-center gap-1">
            <i className="fas fa-eye"></i>
            {post.views.toLocaleString("fa-IR")}
          </span>
          <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-md flex items-center gap-1">
            <i className="far fa-clock"></i>
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              {/* <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              /> */}
            </div>
            <span className="text-sm text-gray-700 font-medium">
              {post.author.name}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <i className="far fa-heart text-red-500"></i>
              {post.likes}
            </span>
            <span className="flex items-center gap-1">
              <i className="far fa-comment text-blue-500"></i>
              {post.commentsCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
