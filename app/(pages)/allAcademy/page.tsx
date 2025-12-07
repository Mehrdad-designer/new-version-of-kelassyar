// app/institutes/page.tsx

import FilterSidebar from "@/app/components/allAcademy/FilterSidebar";
import InstitutesGrid from "@/app/components/allAcademy/InstitutesGrid";
import InstitutesHero from "@/app/components/allAcademy/InstitutesHero";
import InstitutesSearch from "@/app/components/allAcademy/InstitutesSearch";
import Pagination from "@/app/components/allAcademy/Pagination";
import SortBar from "@/app/components/allAcademy/SortBar";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";

// داده‌های نمونه
const institutesData = [
  {
    id: 1,
    name: "آموزشگاه زبان پارسیان",
    slug: "parsian-language",
    image: "https://picsum.photos/600/400?random=1",
    logo: "https://picsum.photos/100/100?random=logo1",
    coverColor: "from-blue-500 to-indigo-600",
    description: "مرکز تخصصی آموزش زبان‌های خارجی با بیش از ۲۰ سال سابقه",
    address: "تهران، خیابان ولیعصر، بالاتر از میدان ونک",
    city: "تهران",
    phone: "021-88776655",
    rating: 4.8,
    reviewsCount: 324,
    studentsCount: 5200,
    classesCount: 45,
    coursesCount: 28,
    viewsCount: 12500,
    isVerified: true,
    isOpen: true,
    hasOnlineClasses: true,
    establishedYear: 1382,
    categories: ["زبان انگلیسی", "زبان آلمانی", "IELTS", "TOEFL"],
    features: ["پارکینگ", "کافی‌شاپ", "کتابخانه", "Wi-Fi"],
    workingHours: "شنبه تا پنجشنبه ۸ صبح تا ۹ شب",
    priceRange: { min: 800000, max: 3500000 },
  },
  {
    id: 2,
    name: "مجتمع فنی تهران",
    slug: "mft-tehran",
    image: "https://picsum.photos/600/400?random=2",
    logo: "https://picsum.photos/100/100?random=logo2",
    coverColor: "from-emerald-500 to-teal-600",
    description: "بزرگترین مرکز آموزش فنی و حرفه‌ای کشور",
    address: "تهران، خیابان انقلاب، نبش خیابان فلسطین",
    city: "تهران",
    phone: "021-66445533",
    rating: 4.9,
    reviewsCount: 892,
    studentsCount: 25000,
    classesCount: 156,
    coursesCount: 85,
    viewsCount: 45000,
    isVerified: true,
    isOpen: true,
    hasOnlineClasses: true,
    establishedYear: 1370,
    categories: ["برنامه‌نویسی", "طراحی گرافیک", "حسابداری", "شبکه"],
    features: ["پارکینگ", "رستوران", "کتابخانه", "سالن کنفرانس"],
    workingHours: "همه روزه ۷ صبح تا ۱۰ شب",
    priceRange: { min: 1200000, max: 8000000 },
  },
  {
    id: 3,
    name: "آکادمی هنر و موسیقی نوا",
    slug: "nava-art-academy",
    image: "https://picsum.photos/600/400?random=3",
    logo: "https://picsum.photos/100/100?random=logo3",
    coverColor: "from-purple-500 to-pink-600",
    description: "آموزش تخصصی موسیقی و هنرهای تجسمی",
    address: "اصفهان، خیابان چهارباغ عباسی",
    city: "اصفهان",
    phone: "031-32445566",
    rating: 4.7,
    reviewsCount: 156,
    studentsCount: 1800,
    classesCount: 32,
    coursesCount: 18,
    viewsCount: 8900,
    isVerified: true,
    isOpen: true,
    hasOnlineClasses: false,
    establishedYear: 1390,
    categories: ["پیانو", "گیتار", "نقاشی", "خوشنویسی"],
    features: ["استودیو ضبط", "گالری", "سالن اجرا"],
    workingHours: "شنبه تا جمعه ۱۰ صبح تا ۸ شب",
    priceRange: { min: 600000, max: 2500000 },
  },
  {
    id: 4,
    name: "باشگاه ورزشی چمپیون",
    slug: "champion-gym",
    image: "https://picsum.photos/600/400?random=4",
    logo: "https://picsum.photos/100/100?random=logo4",
    coverColor: "from-orange-500 to-red-600",
    description: "مجهزترین باشگاه ورزشی با مربیان حرفه‌ای",
    address: "مشهد، بلوار وکیل‌آباد، نبش خیابان هاشمیه",
    city: "مشهد",
    phone: "051-38776655",
    rating: 4.6,
    reviewsCount: 234,
    studentsCount: 3500,
    classesCount: 28,
    coursesCount: 15,
    viewsCount: 15600,
    isVerified: true,
    isOpen: true,
    hasOnlineClasses: true,
    establishedYear: 1395,
    categories: ["بدنسازی", "یوگا", "شنا", "ایروبیک"],
    features: ["استخر", "سونا", "جکوزی", "پارکینگ"],
    workingHours: "همه روزه ۶ صبح تا ۱۱ شب",
    priceRange: { min: 400000, max: 1800000 },
  },
  {
    id: 5,
    name: "آموزشگاه آشپزی سرآشپز",
    slug: "chef-cooking-school",
    image: "https://picsum.photos/600/400?random=5",
    logo: "https://picsum.photos/100/100?random=logo5",
    coverColor: "from-yellow-500 to-orange-600",
    description: "آموزش هنر آشپزی ایرانی و بین‌المللی",
    address: "شیراز، خیابان زند، نبش خیابان انوری",
    city: "شیراز",
    phone: "071-32556677",
    rating: 4.9,
    reviewsCount: 445,
    studentsCount: 2100,
    classesCount: 18,
    coursesCount: 12,
    viewsCount: 9800,
    isVerified: true,
    isOpen: false,
    hasOnlineClasses: true,
    establishedYear: 1388,
    categories: ["آشپزی ایرانی", "آشپزی ایتالیایی", "شیرینی‌پزی", "باریستا"],
    features: ["آشپزخانه صنعتی", "مواد اولیه رایگان", "مدرک معتبر"],
    workingHours: "شنبه تا پنجشنبه ۹ صبح تا ۶ عصر",
    priceRange: { min: 900000, max: 4000000 },
  },
  {
    id: 6,
    name: "مرکز رباتیک و هوش مصنوعی",
    slug: "robotics-ai-center",
    image: "https://picsum.photos/600/400?random=6",
    logo: "https://picsum.photos/100/100?random=logo6",
    coverColor: "from-cyan-500 to-blue-600",
    description: "آموزش رباتیک و برنامه‌نویسی برای کودکان و نوجوانان",
    address: "تبریز، خیابان ولیعصر، مجتمع آموزشی نور",
    city: "تبریز",
    phone: "041-35667788",
    rating: 4.8,
    reviewsCount: 178,
    studentsCount: 950,
    classesCount: 22,
    coursesCount: 14,
    viewsCount: 7200,
    isVerified: false,
    isOpen: true,
    hasOnlineClasses: true,
    establishedYear: 1398,
    categories: ["رباتیک", "Arduino", "Python", "هوش مصنوعی"],
    features: ["کارگاه عملی", "ربات‌های آموزشی", "مسابقات"],
    workingHours: "شنبه تا پنجشنبه ۳ عصر تا ۸ شب",
    priceRange: { min: 700000, max: 2200000 },
  },
  {
    id: 7,
    name: "آموزشگاه رانندگی آزادی",
    slug: "azadi-driving-school",
    image: "https://picsum.photos/600/400?random=7",
    logo: "https://picsum.photos/100/100?random=logo7",
    coverColor: "from-green-500 to-emerald-600",
    description: "آموزش رانندگی با خودروهای روز و مربیان مجرب",
    address: "کرج، میدان آزادی، خیابان شهید بهشتی",
    city: "کرج",
    phone: "026-32889900",
    rating: 4.5,
    reviewsCount: 567,
    studentsCount: 8500,
    classesCount: 12,
    coursesCount: 4,
    viewsCount: 22000,
    isVerified: true,
    isOpen: true,
    hasOnlineClasses: false,
    establishedYear: 1375,
    categories: ["پایه سه", "پایه دو", "پایه یک", "موتورسیکلت"],
    features: ["خودرو نو", "بیمه حوادث", "آموزش تضمینی"],
    workingHours: "همه روزه ۷ صبح تا ۷ شب",
    priceRange: { min: 2500000, max: 6000000 },
  },
  {
    id: 8,
    name: "موسسه زبان ایران‌کمبریج",
    slug: "iran-cambridge",
    image: "https://picsum.photos/600/400?random=8",
    logo: "https://picsum.photos/100/100?random=logo8",
    coverColor: "from-indigo-500 to-purple-600",
    description: "نماینده رسمی کمبریج در ایران",
    address: "تهران، سعادت‌آباد، میدان کاج",
    city: "تهران",
    phone: "021-22889900",
    rating: 4.9,
    reviewsCount: 1245,
    studentsCount: 15000,
    classesCount: 85,
    coursesCount: 32,
    viewsCount: 56000,
    isVerified: true,
    isOpen: true,
    hasOnlineClasses: true,
    establishedYear: 1380,
    categories: ["FCE", "CAE", "CPE", "IELTS Academic"],
    features: ["مدرک بین‌المللی", "اساتید Native", "کتابخانه تخصصی"],
    workingHours: "شنبه تا جمعه ۸ صبح تا ۱۰ شب",
    priceRange: { min: 2000000, max: 12000000 },
  },
  {
    id: 9,
    name: "آتلیه عکاسی لنز طلایی",
    slug: "golden-lens-studio",
    image: "https://picsum.photos/600/400?random=9",
    logo: "https://picsum.photos/100/100?random=logo9",
    coverColor: "from-amber-500 to-yellow-600",
    description: "آموزش عکاسی حرفه‌ای و ویرایش تصویر",
    address: "رشت، خیابان لاکانی، پاساژ گلسار",
    city: "رشت",
    phone: "013-33445566",
    rating: 4.7,
    reviewsCount: 89,
    studentsCount: 650,
    classesCount: 14,
    coursesCount: 8,
    viewsCount: 4500,
    isVerified: false,
    isOpen: true,
    hasOnlineClasses: true,
    establishedYear: 1396,
    categories: ["عکاسی پرتره", "عکاسی طبیعت", "فتوشاپ", "لایت‌روم"],
    features: ["استودیو حرفه‌ای", "تجهیزات نورپردازی", "امانت دوربین"],
    workingHours: "شنبه تا پنجشنبه ۱۰ صبح تا ۷ شب",
    priceRange: { min: 500000, max: 3000000 },
  },
];

const categories = [
  {
    id: 1,
    name: "زبان‌های خارجی",
    slug: "languages",
    count: 245,
    icon: "fa-language",
  },
  {
    id: 2,
    name: "کامپیوتر و IT",
    slug: "computer",
    count: 189,
    icon: "fa-laptop-code",
  },
  { id: 3, name: "هنری", slug: "art", count: 156, icon: "fa-palette" },
  { id: 4, name: "ورزشی", slug: "sports", count: 134, icon: "fa-futbol" },
  { id: 5, name: "موسیقی", slug: "music", count: 98, icon: "fa-music" },
  { id: 6, name: "آشپزی", slug: "cooking", count: 67, icon: "fa-utensils" },
  {
    id: 7,
    name: "کنکور و تقویتی",
    slug: "exam-prep",
    count: 178,
    icon: "fa-graduation-cap",
  },
  {
    id: 8,
    name: "فنی و حرفه‌ای",
    slug: "technical",
    count: 145,
    icon: "fa-tools",
  },
];

const cities = [
  { id: 1, name: "تهران", count: 523 },
  { id: 2, name: "اصفهان", count: 187 },
  { id: 3, name: "مشهد", count: 165 },
  { id: 4, name: "شیراز", count: 134 },
  { id: 5, name: "تبریز", count: 98 },
  { id: 6, name: "کرج", count: 89 },
  { id: 7, name: "رشت", count: 56 },
  { id: 8, name: "اهواز", count: 45 },
];

const stats = {
  totalInstitutes: 1523,
  totalCities: 52,
  totalStudents: 125000,
  totalClasses: 8500,
};

export const metadata = {
  title: "همه آموزشگاه‌ها | کلاس‌یار",
  description:
    "لیست کامل آموزشگاه‌های معتبر در سراسر کشور - جستجو، مقایسه و انتخاب بهترین آموزشگاه",
};

export default function AllInstitutesPage() {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "آموزشگاه‌ها", href: "/institutes", current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <InstitutesHero stats={stats} />

        {/* Search Section */}
        <InstitutesSearch categories={categories} cities={cities} />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <FilterSidebar categories={categories} cities={cities} />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Sort Bar */}
              <SortBar totalCount={institutesData.length} />

              {/* Institutes Grid */}
              <InstitutesGrid institutes={institutesData} />

              {/* Pagination */}
              <Pagination
                currentPage={1}
                totalPages={12}
                totalItems={institutesData.length * 12}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
