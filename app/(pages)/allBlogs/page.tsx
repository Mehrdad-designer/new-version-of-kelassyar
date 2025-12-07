// app/blog/page.tsx
// import Breadcrumb from "./../../components/allBlogs/BlogHero";
// import BlogFilters from "./../../components/allBlogs/BlogFilters";
// import BlogCard from "./../../components/allBlogs/";
// import BlogCategories from "@/components/blog/BlogCategories";
// import PopularPosts from "@/components/blog/PopularPosts";
// import BlogNewsletter from "@/components/blog/BlogNewsletter";
// import BlogPagination from "@/components/blog/BlogPagination";

import BlogCard from "@/app/components/allBlogs/BlogCard";
import BlogCategories from "@/app/components/allBlogs/BlogCategories";
import BlogFilters from "@/app/components/allBlogs/BlogFilters";
import BlogHero from "@/app/components/allBlogs/BlogHero";
import BlogNewsletter from "@/app/components/allBlogs/BlogNewsletter";
import BlogPagination from "@/app/components/allBlogs/BlogPagination";
import PopularPosts from "@/app/components/allBlogs/PopularPosts";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";

// داده‌های نمونه دسته‌بندی‌ها
const categories = [
  {
    id: 1,
    name: "آموزشی",
    slug: "educational",
    count: 45,
    icon: "fa-graduation-cap",
    color: "blue",
  },
  {
    id: 2,
    name: "راهنمای انتخاب",
    slug: "guide",
    count: 32,
    icon: "fa-compass",
    color: "green",
  },
  {
    id: 3,
    name: "مهارت‌های نرم",
    slug: "soft-skills",
    count: 28,
    icon: "fa-user-graduate",
    color: "purple",
  },
  {
    id: 4,
    name: "فناوری و نوآوری",
    slug: "technology",
    count: 38,
    icon: "fa-laptop-code",
    color: "cyan",
  },
  {
    id: 5,
    name: "هنر و خلاقیت",
    slug: "art",
    count: 25,
    icon: "fa-palette",
    color: "pink",
  },
  {
    id: 6,
    name: "کسب و کار",
    slug: "business",
    count: 19,
    icon: "fa-briefcase",
    color: "orange",
  },
  {
    id: 7,
    name: "سلامت و تندرستی",
    slug: "health",
    count: 22,
    icon: "fa-heartbeat",
    color: "red",
  },
  {
    id: 8,
    name: "زبان‌های خارجی",
    slug: "languages",
    count: 30,
    icon: "fa-language",
    color: "indigo",
  },
];

// داده‌های نمونه مقالات
const blogPosts = [
  {
    id: 1,
    title: "راهنمای جامع انتخاب بهترین دوره آموزشی برای شروع حرفه‌ای",
    slug: "guide-to-choose-best-course",
    excerpt:
      "در این مقاله به طور کامل نحوه انتخاب دوره آموزشی مناسب با توجه به اهداف شغلی و علاقه‌مندی‌های شما را بررسی می‌کنیم.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=1",
    category: "راهنمای انتخاب",
    categorySlug: "guide",
    categoryColor: "green",
    author: {
      name: "دکتر سارا محمدی",
      image: "https://picsum.photos/100/100?random=author1",
      title: "مشاور آموزشی",
    },
    publishedAt: "۱۵ آذر ۱۴۰۳",
    readTime: "۸ دقیقه",
    views: 3450,
    likes: 245,
    commentsCount: 38,
    tags: ["آموزش", "راهنما", "انتخاب دوره", "توسعه فردی"],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 2,
    title: "۱۰ مهارت ضروری که باید در سال ۲۰۲۵ یاد بگیرید",
    slug: "10-essential-skills-2025",
    excerpt:
      "با پیشرفت تکنولوژی، برخی مهارت‌ها اهمیت بیشتری پیدا کرده‌اند. در این مقاله ۱۰ مهارت کلیدی را معرفی می‌کنیم.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=2",
    category: "مهارت‌های نرم",
    categorySlug: "soft-skills",
    categoryColor: "purple",
    author: {
      name: "علی رضایی",
      image: "https://picsum.photos/100/100?random=author2",
      title: "مدرس و مشاور کسب‌وکار",
    },
    publishedAt: "۱۲ آذر ۱۴۰۳",
    readTime: "۱۲ دقیقه",
    views: 5280,
    likes: 412,
    commentsCount: 67,
    tags: ["مهارت", "توسعه فردی", "آینده شغلی"],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 3,
    title: "چگونه هوش مصنوعی آموزش را متحول کرده است؟",
    slug: "ai-in-education",
    excerpt:
      "نگاهی به تأثیر هوش مصنوعی بر روش‌های آموزشی و چگونگی استفاده از آن برای یادگیری بهتر.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=3",
    category: "فناوری و نوآوری",
    categorySlug: "technology",
    categoryColor: "cyan",
    author: {
      name: "مهندس حسین احمدی",
      image: "https://picsum.photos/100/100?random=author3",
      title: "متخصص هوش مصنوعی",
    },
    publishedAt: "۱۰ آذر ۱۴۰۳",
    readTime: "۱۵ دقیقه",
    views: 4120,
    likes: 356,
    commentsCount: 52,
    tags: ["هوش مصنوعی", "تکنولوژی", "آموزش آنلاین"],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 4,
    title: "راز موفقیت در یادگیری زبان انگلیسی",
    slug: "english-learning-success",
    excerpt:
      "تکنیک‌های کاربردی و اثبات شده برای یادگیری سریع‌تر و مؤثرتر زبان انگلیسی.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=4",
    category: "زبان‌های خارجی",
    categorySlug: "languages",
    categoryColor: "indigo",
    author: {
      name: "مریم کریمی",
      image: "https://picsum.photos/100/100?random=author4",
      title: "مدرس زبان انگلیسی",
    },
    publishedAt: "۸ آذر ۱۴۰۳",
    readTime: "۱۰ دقیقه",
    views: 6340,
    likes: 523,
    commentsCount: 89,
    tags: ["زبان انگلیسی", "یادگیری", "تکنیک‌های آموزشی"],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 5,
    title: "هنر مدیریت زمان برای دانشجویان",
    slug: "time-management-students",
    excerpt:
      "چگونه زمان خود را به صورت مؤثر مدیریت کنید و بین درس، کار و زندگی شخصی تعادل برقرار کنید.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=5",
    category: "مهارت‌های نرم",
    categorySlug: "soft-skills",
    categoryColor: "purple",
    author: {
      name: "دکتر امیر حسینی",
      image: "https://picsum.photos/100/100?random=author5",
      title: "روانشناس و مشاور تحصیلی",
    },
    publishedAt: "۵ آذر ۱۴۰۳",
    readTime: "۷ دقیقه",
    views: 2890,
    likes: 198,
    commentsCount: 34,
    tags: ["مدیریت زمان", "دانشجویان", "بهره‌وری"],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 6,
    title: "طراحی گرافیک: از کجا شروع کنیم؟",
    slug: "graphic-design-beginners",
    excerpt: "راهنمای کامل برای شروع یادگیری طراحی گرافیک از صفر تا صد.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=6",
    category: "هنر و خلاقیت",
    categorySlug: "art",
    categoryColor: "pink",
    author: {
      name: "زهرا موسوی",
      image: "https://picsum.photos/100/100?random=author6",
      title: "طراح گرافیک ارشد",
    },
    publishedAt: "۳ آذر ۱۴۰۳",
    readTime: "۹ دقیقه",
    views: 3670,
    likes: 287,
    commentsCount: 45,
    tags: ["طراحی گرافیک", "هنر", "آموزش مقدماتی"],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 7,
    title: "بازاریابی دیجیتال در سال ۲۰۲۵: روندها و فرصت‌ها",
    slug: "digital-marketing-2025",
    excerpt:
      "آشنایی با جدیدترین روندهای بازاریابی دیجیتال و فرصت‌های شغلی در این حوزه.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=7",
    category: "کسب و کار",
    categorySlug: "business",
    categoryColor: "orange",
    author: {
      name: "محمد کاظمی",
      image: "https://picsum.photos/100/100?random=author7",
      title: "متخصص بازاریابی دیجیتال",
    },
    publishedAt: "۱ آذر ۱۴۰۳",
    readTime: "۱۱ دقیقه",
    views: 4560,
    likes: 378,
    commentsCount: 56,
    tags: ["بازاریابی", "دیجیتال مارکتینگ", "کسب‌وکار"],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 8,
    title: "یوگا و مدیتیشن: راهی به سوی آرامش درونی",
    slug: "yoga-meditation-guide",
    excerpt:
      "فواید یوگا و مدیتیشن برای سلامت جسم و روان و چگونگی شروع این تمرینات.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=8",
    category: "سلامت و تندرستی",
    categorySlug: "health",
    categoryColor: "red",
    author: {
      name: "نازنین رضایی",
      image: "https://picsum.photos/100/100?random=author8",
      title: "مربی یوگا",
    },
    publishedAt: "۲۸ آبان ۱۴۰۳",
    readTime: "۶ دقیقه",
    views: 2340,
    likes: 156,
    commentsCount: 28,
    tags: ["یوگا", "مدیتیشن", "سلامت روان"],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 9,
    title: "برنامه‌نویسی Python برای مبتدیان",
    slug: "python-for-beginners",
    excerpt:
      "چرا Python بهترین زبان برنامه‌نویسی برای شروع است و چگونه آن را یاد بگیریم.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=9",
    category: "فناوری و نوآوری",
    categorySlug: "technology",
    categoryColor: "cyan",
    author: {
      name: "مهندس رضا احمدی",
      image: "https://picsum.photos/100/100?random=author9",
      title: "توسعه‌دهنده نرم‌افزار",
    },
    publishedAt: "۲۵ آبان ۱۴۰۳",
    readTime: "۱۳ دقیقه",
    views: 5670,
    likes: 445,
    commentsCount: 72,
    tags: ["برنامه‌نویسی", "Python", "کدنویسی"],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 10,
    title: "چگونه یک رزومه حرفه‌ای بنویسیم؟",
    slug: "professional-resume-guide",
    excerpt:
      "نکات کلیدی برای نوشتن یک رزومه جذاب و حرفه‌ای که توجه کارفرمایان را جلب کند.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=10",
    category: "کسب و کار",
    categorySlug: "business",
    categoryColor: "orange",
    author: {
      name: "فاطمه کریمی",
      image: "https://picsum.photos/100/100?random=author10",
      title: "مشاور منابع انسانی",
    },
    publishedAt: "۲۲ آبان ۱۴۰۳",
    readTime: "۸ دقیقه",
    views: 4230,
    likes: 312,
    commentsCount: 48,
    tags: ["رزومه", "کاریابی", "توسعه شغلی"],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 11,
    title: "آموزش موسیقی برای کودکان: فواید و روش‌ها",
    slug: "music-education-children",
    excerpt:
      "چرا آموزش موسیقی برای رشد کودکان مهم است و چگونه آن را شروع کنیم.",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=11",
    category: "هنر و خلاقیت",
    categorySlug: "art",
    categoryColor: "pink",
    author: {
      name: "استاد حسین موسوی",
      image: "https://picsum.photos/100/100?random=author11",
      title: "نوازنده و مدرس موسیقی",
    },
    publishedAt: "۲۰ آبان ۱۴۰۳",
    readTime: "۷ دقیقه",
    views: 2890,
    likes: 203,
    commentsCount: 35,
    tags: ["موسیقی", "کودکان", "آموزش هنری"],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 12,
    title: "راهنمای کامل آمادگی برای آزمون‌های زبان بین‌المللی",
    slug: "international-language-exams",
    excerpt:
      "نکات و استراتژی‌های مؤثر برای موفقیت در آزمون‌های IELTS، TOEFL و...",
    content: "محتوای کامل مقاله...",
    image: "https://picsum.photos/800/500?random=12",
    category: "زبان‌های خارجی",
    categorySlug: "languages",
    categoryColor: "indigo",
    author: {
      name: "دکتر سحر احمدی",
      image: "https://picsum.photos/100/100?random=author12",
      title: "مدرس و ممتحن IELTS",
    },
    publishedAt: "۱۸ آبان ۱۴۰۳",
    readTime: "۱۴ دقیقه",
    views: 7120,
    likes: 589,
    commentsCount: 94,
    tags: ["IELTS", "TOEFL", "آزمون زبان"],
    isFeatured: false,
    isPopular: true,
  },
];

// مقالات محبوب
const popularPosts = blogPosts.filter((post) => post.isPopular).slice(0, 5);

export default function BlogPage() {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "بلاگ", href: "/blog", current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <main>
        {/* Hero Section */}
        <BlogHero />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Categories Section */}
        <section className="py-8 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <BlogCategories categories={categories} />
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Blog Posts */}
            <div className="flex-1">
              {/* Filters */}
              <BlogFilters totalPosts={blogPosts.length} />

              {/* Featured Posts */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <i className="fas fa-star text-white"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    مقالات ویژه
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((post) => post.isFeatured)
                    .map((post) => (
                      <BlogCard key={post.id} post={post} variant="featured" />
                    ))}
                </div>
              </div>

              {/* All Posts */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <i className="fas fa-newspaper text-white"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    جدیدترین مقالات
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} variant="standard" />
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-12">
                <BlogPagination currentPage={1} totalPages={5} />
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-[380px]">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Popular Posts */}
                <PopularPosts posts={popularPosts} />

                {/* Newsletter */}
                <BlogNewsletter />

                {/* Tags Cloud */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-tags text-blue-500"></i>
                    برچسب‌های محبوب
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "آموزش",
                      "یادگیری",
                      "مهارت",
                      "زبان",
                      "تکنولوژی",
                      "هنر",
                      "کسب‌وکار",
                      "سلامت",
                      "طراحی",
                      "برنامه‌نویسی",
                    ].map((tag, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Follow */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-share-alt"></i>
                    ما را دنبال کنید
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      <i className="fab fa-instagram"></i>
                      <span className="text-sm">اینستاگرام</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      <i className="fab fa-telegram"></i>
                      <span className="text-sm">تلگرام</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      <i className="fab fa-twitter"></i>
                      <span className="text-sm">توییتر</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      <i className="fab fa-linkedin"></i>
                      <span className="text-sm">لینکدین</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
