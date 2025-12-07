// app/institutes/[id]/page.tsx

// import InstituteContact from "@/app/components/allAcademy/AcademyContact";
// import InstituteCover from "@/app/components/allAcademy/AcademyCover";
// import InstituteDescription from "@/app/components/allAcademy/AcademyDescription";
// import InstituteDetails from "@/app/components/allAcademy/AcademyDetails";
// import InstituteFacilities from "@/app/components/allAcademy/AcademyFacilities";
// import InstituteGallery from "@/app/components/allAcademy/AcademyGallery";
// import InstituteInfo from "@/app/components/allAcademy/AcademyInfo";
// import InstituteMap from "@/app/components/allAcademy/AcademyMap";
// import CommentsSection from "@/app/components/allAcademy/CommentsSection";
// import PopularClasses from "@/app/components/allAcademy/PopularClasses";
// import RatingSection from "@/app/components/allAcademy/RatingSection";
// import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";

// Sample Data
const instituteData = {
  id: 1,
  name: "آموزشگاه هنرهای تجسمی نقش‌آفرین",
  image_cover: "https://picsum.photos/1920/600?random=1",
  rating: 4.7,
  visit_count: 12458,
  address: "اصفهان، نجف‌آباد، خیابان امام خمینی، پلاک ۱۲۵",
  phone_number: "۰۳۱-۴۲۳۴۵۶۷۸",
  email: "info@naghshafarin.ir",
  website: "www.naghshafarin.ir",
  social_media: [
    {
      platform: "instagram",
      link: "https://instagram.com/naghshafarin",
      icon: "fab fa-instagram",
    },
    {
      platform: "telegram",
      link: "https://t.me/naghshafarin",
      icon: "fab fa-telegram",
    },
    {
      platform: "whatsapp",
      link: "https://wa.me/989123456789",
      icon: "fab fa-whatsapp",
    },
  ],
  working_hours: "شنبه تا پنجشنبه: ۸ صبح تا ۸ شب",
  url_of_iframe_of_address:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.123456789!2d51.123456!3d32.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA3JzI0LjAiTiA1McKwMDcnMjQuMCJF!5e0!3m2!1sen!2s!4v1234567890",
  tags: ["هنری", "نقاشی", "طراحی", "گرافیک", "مجسمه‌سازی"],
  facilities: [
    { name: "پارکینگ", icon: "fa-car" },
    { name: "سرویس بهداشتی", icon: "fa-restroom" },
    { name: "کتابخانه", icon: "fa-book" },
    { name: "کافی‌شاپ", icon: "fa-coffee" },
    { name: "وای‌فای رایگان", icon: "fa-wifi" },
    { name: "سالن نمایشگاه", icon: "fa-image" },
  ],
  description: `آموزشگاه هنرهای تجسمی نقش‌آفرین با بیش از ۱۵ سال سابقه درخشان در زمینه آموزش هنرهای تجسمی، یکی از معتبرترین مراکز آموزشی در استان اصفهان است. این آموزشگاه با بهره‌گیری از اساتید مجرب و هنرمندان برجسته، دوره‌های متنوعی در زمینه‌های نقاشی، طراحی، گرافیک، مجسمه‌سازی و سایر هنرهای تجسمی برگزار می‌کند.
    
    هدف ما پرورش استعدادهای هنری و ایجاد بستری مناسب برای رشد و شکوفایی هنرمندان جوان است. فضای آموزشگاه با طراحی مدرن و امکانات کامل، محیطی الهام‌بخش برای خلاقیت و یادگیری فراهم کرده است.`,
  management: "استاد محمدرضا احمدی",
  date_of_establishment: "۱۳۸۷",
  category: "هنری",
  province: "اصفهان",
  city: "نجف‌آباد",
  image_list: [
    "https://picsum.photos/800/600?random=10",
    "https://picsum.photos/800/600?random=11",
    "https://picsum.photos/800/600?random=12",
    "https://picsum.photos/800/600?random=13",
    "https://picsum.photos/800/600?random=14",
    "https://picsum.photos/800/600?random=15",
  ],
  created_at: "۱۵ آذر ۱۴۰۲",
};

const popularClasses = [
  {
    id: 1,
    title: "دوره جامع نقاشی رنگ روغن",
    category: "نقاشی",
    categoryColor: "pink",
    teacher: "استاد احمدی",
    thumbnail: "https://picsum.photos/400/300?random=20",
    rating: 4.9,
    description: "آموزش کامل تکنیک‌های نقاشی رنگ روغن از مبتدی تا پیشرفته",
    visit_count: 2340,
  },
  {
    id: 2,
    title: "کلاس طراحی پرتره",
    category: "طراحی",
    categoryColor: "blue",
    teacher: "استاد محمدی",
    thumbnail: "https://picsum.photos/400/300?random=21",
    rating: 4.8,
    description: "یادگیری اصول طراحی چهره و پرتره با مداد",
    visit_count: 1890,
  },
  {
    id: 3,
    title: "دوره گرافیک دیجیتال",
    category: "گرافیک",
    categoryColor: "purple",
    teacher: "استاد رضایی",
    thumbnail: "https://picsum.photos/400/300?random=22",
    rating: 4.7,
    description: "آموزش نرم‌افزارهای گرافیکی و طراحی دیجیتال",
    visit_count: 2100,
  },
  {
    id: 4,
    title: "کارگاه مجسمه‌سازی",
    category: "مجسمه‌سازی",
    categoryColor: "green",
    teacher: "استاد کریمی",
    thumbnail: "https://picsum.photos/400/300?random=23",
    rating: 4.6,
    description: "آموزش ساخت مجسمه با مواد مختلف",
    visit_count: 1560,
  },
];

const ratingData = {
  overall: 4.7,
  totalVotes: 1248,
  categories: [
    { name: "محیط", value: 4.8, icon: "fa-building" },
    { name: "رفتار پرسنل", value: 4.6, icon: "fa-users" },
    { name: "کیفیت آموزش", value: 4.9, icon: "fa-graduation-cap" },
    { name: "تجهیزات", value: 4.5, icon: "fa-tools" },
  ],
};

const commentsData = [
  {
    id: 1,
    userName: "علی محمدی",
    userAvatar: "https://picsum.photos/100/100?random=30",
    text: "آموزشگاه فوق‌العاده‌ای است. اساتید بسیار حرفه‌ای و محیط بسیار دلنشین. من دوره نقاشی رنگ روغن را گذراندم و واقعاً راضی هستم.",
    rating: 5,
    date: "۱۰ آذر ۱۴۰۳",
    replies: [
      {
        id: 11,
        userName: "مدیریت آموزشگاه",
        userAvatar: "https://picsum.photos/100/100?random=31",
        text: "از نظر لطف شما سپاسگزاریم. امیدواریم همیشه بتوانیم رضایت شما را جلب کنیم.",
        date: "۱۱ آذر ۱۴۰۳",
        isAdmin: true,
      },
    ],
  },
  {
    id: 2,
    userName: "زهرا احمدی",
    userAvatar: "https://picsum.photos/100/100?random=32",
    text: "دخترم در کلاس طراحی شرکت کرده و پیشرفت چشمگیری داشته. ممنون از زحمات اساتید.",
    rating: 4,
    date: "۵ آذر ۱۴۰۳",
    replies: [],
  },
  {
    id: 3,
    userName: "رضا کریمی",
    userAvatar: "https://picsum.photos/100/100?random=33",
    text: "کیفیت آموزش عالی است ولی کاش ساعات کلاس‌ها متنوع‌تر بود.",
    rating: 4,
    date: "۱ آذر ۱۴۰۳",
    replies: [],
  },
];

export default function InstituteDetailPage() {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "آموزشگاه‌ها", href: "/institutes" },
    { label: instituteData.name, href: "#", current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <main>
        {/* Cover Image */}
        <InstituteCover
          image={instituteData.image_cover}
          name={instituteData.name}
        />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-12">
          {/* Institute Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Info - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <InstituteInfo
                name={instituteData.name}
                rating={instituteData.rating}
                visitCount={instituteData.visit_count}
                tags={instituteData.tags}
                workingHours={instituteData.working_hours}
              />

              <InstituteDescription description={instituteData.description} />

              <InstituteFacilities facilities={instituteData.facilities} />
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              <InstituteContact
                phone={instituteData.phone_number}
                email={instituteData.email}
                website={instituteData.website}
                socialMedia={instituteData.social_media}
                address={instituteData.address}
              />

              <InstituteMap
                iframeSrc={instituteData.url_of_iframe_of_address}
                address={instituteData.address}
              />
            </div>
          </div>

          {/* Additional Details */}
          <InstituteDetails
            management={instituteData.management}
            dateOfEstablishment={instituteData.date_of_establishment}
            category={instituteData.category}
            province={instituteData.province}
            city={instituteData.city}
            createdAt={instituteData.created_at}
          />

          {/* Gallery */}
          <InstituteGallery images={instituteData.image_list} />

          {/* Popular Classes */}
          <PopularClasses
            classes={popularClasses}
            instituteId={instituteData.id}
          />

          {/* Rating Section */}
          <RatingSection ratingData={ratingData} />

          {/* Comments Section */}
          <CommentsSection comments={commentsData} />
        </div>
      </main>

    </div>
  );
}
