// components/home/PopularInstitutesSection.tsx
import Link from "next/link";
import Image from "next/image";

const popularInstitutes = [
  {
    id: 1,
    name: "آموزشگاه هنرهای تجسمی نقش‌آفرین",
    category: "هنری",
    rating: 4.8,
    studentsCount: 450,
    classesCount: 12,
    image: "https://picsum.photos/400/300?random=10",
    address: "نجف‌آباد، خیابان امام خمینی",
  },
  {
    id: 2,
    name: "موسسه زبان‌های خارجی پارسیان",
    category: "زبان",
    rating: 4.9,
    studentsCount: 680,
    classesCount: 18,
    image: "https://picsum.photos/400/300?random=11",
    address: "نجف‌آباد، میدان امام حسین",
  },
  {
    id: 3,
    name: "آکادمی برنامه‌نویسی کدنویسان",
    category: "فناوری",
    rating: 4.7,
    studentsCount: 520,
    classesCount: 15,
    image: "https://picsum.photos/400/300?random=12",
    address: "نجف‌آباد، خیابان شهید بهشتی",
  },
  {
    id: 4,
    name: "باشگاه ورزشی و فیتنس اسپارتان",
    category: "ورزشی",
    rating: 4.6,
    studentsCount: 890,
    classesCount: 22,
    image: "https://picsum.photos/400/300?random=13",
    address: "نجف‌آباد، بلوار کشاورز",
  },
];

export default function PopularInstitutesSection() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <i
            key={i}
            className="fas fa-star-half-alt text-yellow-400 text-sm"
          ></i>
        );
      } else {
        stars.push(
          <i key={i} className="far fa-star text-yellow-400 text-sm"></i>
        );
      }
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <i className="fas fa-fire text-white text-xl"></i>
              </div>
              محبوب‌ترین آموزشگاه‌ها
            </h2>
            <p className="text-gray-600">بهترین و محبوب‌ترین آموزشگاه‌ها</p>
          </div>

          <Link
            href="/institutes"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg transition-all border border-gray-200"
          >
            مشاهده همه
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>

        {/* Institutes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularInstitutes.map((institute) => (
            <Link
              key={institute.id}
              href={`/institutes/${institute.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {/* <Image
                  src={institute.image}
                  alt={institute.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    محبوب
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {institute.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <i className="fas fa-tag text-blue-500"></i>
                  <span>{institute.category}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {renderStars(institute.rating)}
                  <span className="text-sm font-bold text-gray-700">
                    {institute.rating}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">دانشجو</span>
                    <span className="font-bold text-gray-700">
                      {institute.studentsCount.toLocaleString("fa-IR")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">کلاس فعال</span>
                    <span className="font-bold text-gray-700">
                      {institute.classesCount.toLocaleString("fa-IR")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-gray-500 pt-3 border-t border-gray-100">
                  <i className="fas fa-map-marker-alt text-red-500 mt-0.5"></i>
                  <span className="line-clamp-1">{institute.address}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-8">
          <Link
            href="/institutes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            مشاهده همه آموزشگاه‌ها
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
