// components/blog-detail/BlogPostShare.tsx
"use client";

interface BlogPost {
  title: string;
  slug: string;
}

interface BlogPostShareProps {
  post: BlogPost;
}

export default function BlogPostShare({ post }: BlogPostShareProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(post.title);

    const urls: Record<string, string> = {
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("لینک کپی شد!");
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 mb-8 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fas fa-share-alt text-xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg">
              این مقاله را با دوستان خود به اشتراک بگذارید
            </h3>
            <p className="text-purple-100 text-sm">
              به دیگران هم کمک کنید تا یاد بگیرند
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleShare("telegram")}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="اشتراک در تلگرام"
          >
            <i className="fab fa-telegram-plane text-xl"></i>
          </button>
          <button
            onClick={() => handleShare("whatsapp")}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="اشتراک در واتساپ"
          >
            <i className="fab fa-whatsapp text-xl"></i>
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="اشتراک در توییتر"
          >
            <i className="fab fa-twitter text-xl"></i>
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="اشتراک در لینکدین"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </button>
          <button
            onClick={copyLink}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="کپی لینک"
          >
            <i className="fas fa-link text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
