import CommentSection from "@/app/components/academyDetail/CommentSection";
import InstituteGallery from "@/app/components/academyDetail/InstituteGallery";
import InstituteHero from "@/app/components/academyDetail/InstituteHero";
import InstituteInfo from "@/app/components/academyDetail/InstituteInfo";
import PopularKelasses from "@/app/components/academyDetail/PopularKelasses";
import RatingSystem from "@/app/components/academyDetail/RatingSystem";
import { Suspense } from "react";
// import InstituteHero from "@/components/institute/InstituteHero";
// import InstituteInfo from "@/components/institute/InstituteInfo";
// import InstituteGallery from "@/components/institute/InstituteGallery";
// import PopularKelasses from "@/components/institute/PopularKelasses";
// import RatingSystem from "@/components/institute/RatingSystem";
// import CommentSection from "@/components/institute/CommentSection";

// Mock Data - Replace with API call
const getInstituteData = async (id: string) => {
  return {
    id: id,
    name: "آموزشگاه زبان پارسیان",
    image_cover: "/images/institute-cover.jpg",
    rating: 4.5,
    visit_count: 12543,
    address: "تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک 1234",
    phone_number: "021-88776655",
    email: "info@parsianinstitute.com",
    website: "https://parsianinstitute.com",
    social_media: [
      { platform: "instagram", url: "https://instagram.com/parsian" },
      { platform: "telegram", url: "https://t.me/parsian" },
      { platform: "linkedin", url: "https://linkedin.com/company/parsian" },
    ],
    working_hours: "شنبه تا چهارشنبه: 8:00 - 20:00 | پنجشنبه: 8:00 - 14:00",
    url_of_iframe_of_address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1234567890!2d51.4123456!3d35.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzQ0LjQiTiA1McKwMjQnNDQuNCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s",
    tags: ["زبان انگلیسی", "IELTS", "TOEFL", "مکالمه", "کودکان"],
    facilities: [
      "کلاس‌های مجهز به پروژکتور",
      "کتابخانه تخصصی",
      "آزمایشگاه زبان",
      "کافی شاپ",
      "پارکینگ اختصاصی",
      "اتاق استراحت",
    ],
    description:
      "آموزشگاه زبان پارسیان با بیش از 15 سال سابقه درخشان در زمینه آموزش زبان‌های خارجی، یکی از معتبرترین مراکز آموزشی کشور است. ما با بهره‌گیری از اساتید مجرب و متدهای نوین تدریس، محیطی پویا و کارآمد برای یادگیری زبان فراهم کرده‌ایم.",
    management: "دکتر محمد رضایی",
    date_of_establishment: "1387",
    category: "زبان خارجی",
    province: "تهران",
    city: "تهران",
    image_list: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-6.jpg",
    ],
    created_at: "2023-01-15",
    kelasses: [
      {
        id: "1",
        name: "دوره جامع IELTS",
        category: "IELTS",
        teacher: "استاد احمدی",
        thumbnail: "/images/class-1.jpg",
        rating: 4.8,
        visit_count: 3200,
        description: "آماده‌سازی کامل برای آزمون آیلتس با تمرکز بر چهار مهارت",
      },
      {
        id: "2",
        name: "انگلیسی مکالمه پیشرفته",
        category: "مکالمه",
        teacher: "استاد کریمی",
        thumbnail: "/images/class-2.jpg",
        rating: 4.7,
        visit_count: 2800,
        description: "تقویت مهارت مکالمه در موقعیت‌های واقعی",
      },
      {
        id: "3",
        name: "TOEFL iBT",
        category: "TOEFL",
        teacher: "استاد محمدی",
        thumbnail: "/images/class-3.jpg",
        rating: 4.6,
        visit_count: 2500,
        description: "آمادگی کامل برای آزمون تافل اینترنتی",
      },
      {
        id: "4",
        name: "انگلیسی کودکان",
        category: "کودکان",
        teacher: "خانم حسینی",
        thumbnail: "/images/class-4.jpg",
        rating: 4.9,
        visit_count: 3500,
        description: "آموزش زبان انگلیسی به روش بازی و سرگرمی",
      },
    ],
    ratings: {
      overall: 4.5,
      total_votes: 324,
      subcategories: {
        environment: 4.6,
        staff_behavior: 4.7,
        teaching_quality: 4.5,
        facilities: 4.3,
      },
    },
    comments: [
      {
        id: "1",
        username: "علی محمدی",
        text: "بهترین آموزشگاه زبانی که تا حالا دیدم. اساتید فوق‌العاده و محیط بسیار دوستانه.",
        rating: 5,
        date: "1402/09/15",
        replies: [
          {
            id: "1-1",
            username: "مدیریت آموزشگاه",
            text: "از اعتماد شما سپاسگزاریم 🙏",
            date: "1402/09/16",
          },
        ],
      },
      {
        id: "2",
        username: "سارا احمدی",
        text: "دوره IELTS اینجا واقعاً عالی بود. نمره 7.5 گرفتم!",
        rating: 5,
        date: "1402/09/10",
        replies: [],
      },
    ],
  };
};

export default async function InstitutePage({
  params,
}: {
  params: { id: string };
}) {
  const institute = await getInstituteData(params.id);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
      {/* Hero Section */}
      <InstituteHero institute={institute} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Institute Info */}
        <InstituteInfo institute={institute} />

        {/* Gallery */}
        <InstituteGallery images={institute.image_list} />

        {/* Popular Kelasses */}
        <PopularKelasses kelasses={institute.kelasses} />

        {/* Rating & Comments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RatingSystem ratings={institute.ratings} />
          <CommentSection comments={institute.comments} />
        </div>
      </div>
    </main>
  );
}
