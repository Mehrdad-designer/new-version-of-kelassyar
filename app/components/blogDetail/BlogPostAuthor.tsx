// components/blog-detail/BlogPostAuthor.tsx
import Image from "next/image";
import Link from "next/link";

interface Author {
  id: number;
  name: string;
  image: string;
  title: string;
  bio: string;
  socialLinks: {
    instagram?: string;
    telegram?: string;
    linkedin?: string;
  };
  postsCount: number;
  followersCount: number;
}

interface BlogPostAuthorProps {
  author: Author;
}

export default function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-100 p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Author Image */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl">
            {/* <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            /> */}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {author.name}
              </h3>
              <p className="text-blue-600 font-medium">{author.title}</p>
            </div>
            <Link
              href={`/authors/${author.id}`}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-user"></i>
              پروفایل
            </Link>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">{author.bio}</p>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {author.postsCount}
              </div>
              <div className="text-sm text-gray-500">مقاله</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {author.followersCount.toLocaleString("fa-IR")}
              </div>
              <div className="text-sm text-gray-500">دنبال‌کننده</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {author.socialLinks.instagram && (
              <a
                href={author.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {author.socialLinks.telegram && (
              <a
                href={author.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            )}
            {author.socialLinks.linkedin && (
              <a
                href={author.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
