// components/blog-detail/BlogPostTags.tsx
import Link from "next/link";

interface BlogPostTagsProps {
  tags: string[];
}

export default function BlogPostTags({ tags }: BlogPostTagsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <i className="fas fa-tags text-blue-500"></i>
        برچسب‌ها
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={`/blog?tag=${tag}`}
            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all hover:shadow-md hover:-translate-y-0.5 font-medium"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
