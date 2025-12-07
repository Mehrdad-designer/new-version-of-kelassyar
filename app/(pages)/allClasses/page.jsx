// app/classes/page.tsx
import Breadcrumb from './../../components/Breadcrumb/Breadcrumb';
import ClassesHero from './../../components/allClasses/ClassesHero';
import ClassesSearch from './../../components/allClasses/ClassesSearch';
import ClassesFilter from './../../components/allClasses/ClassesFilter';
import ClassesSortBar from './../../components/allClasses/ClassesSortBar';
import ClassesGrid from './../../components/allClasses/ClassesGrid';
import ClassesPagination from './../../components/allClasses/ClassesPagination';

// داده‌های نمونه کلاس‌ها
const classesData = [
    {
        id: 1,
        title: 'دوره جامع IELTS آکادمیک',
        slug: 'ielts-academic-course',
        image: 'https://picsum.photos/600/400?random=1',
        institute: {
            id: 1,
            name: 'آموزشگاه زبان پارسیان',
            slug: 'parsian-language',
            logo: 'https://picsum.photos/100/100?random=logo1',
            isVerified: true,
        },
        instructor: {
            name: 'دکتر علی محمدی',
            avatar: 'https://picsum.photos/100/100?random=teacher1',
            rating: 4.9,
        },
        category: 'زبان انگلیسی',
        subcategory: 'IELTS',
        level: 'پیشرفته',
        price: 3500000,
        discount: 10,
        duration: '3 ماه',
        sessionsCount: 36,
        startDate: '1403/10/15',
        schedule: {
            days: ['شنبه', 'دوشنبه', 'چهارشنبه'],
            time: '17:00 - 19:00',
        },
        capacity: 15,
        enrolled: 12,
        rating: 4.8,
        reviewsCount: 245,
        viewsCount: 3420,
        isOnline: true,
        hasVideo: true,
        hasCertificate: true,
        description: 'آموزش کامل و جامع IELTS با تمرکز بر چهار مهارت اصلی',
        features: ['کتاب رایگان', 'آزمون آزمایشی', 'پشتیبانی 24/7'],
    },
    {
        id: 2,
        title: 'برنامه‌نویسی پایتون مقدماتی تا پیشرفته',
        slug: 'python-programming-complete',
        image: 'https://picsum.photos/600/400?random=2',
        institute: {
            id: 2,
            name: 'مجتمع فنی تهران',
            slug: 'mft-tehran',
            logo: 'https://picsum.photos/100/100?random=logo2',
            isVerified: true,
        },
        instructor: {
            name: 'مهندس رضا احمدی',
            avatar: 'https://picsum.photos/100/100?random=teacher2',
            rating: 4.7,
        },
        category: 'برنامه‌نویسی',
        subcategory: 'Python',
        level: 'مقدماتی',
        price: 2800000,
        discount: 15,
        duration: '4 ماه',
        sessionsCount: 48,
        startDate: '1403/10/20',
        schedule: {
            days: ['یکشنبه', 'سه‌شنبه'],
            time: '18:00 - 21:00',
        },
        capacity: 20,
        enrolled: 18,
        rating: 4.9,
        reviewsCount: 567,
        viewsCount: 8920,
        isOnline: true,
        hasVideo: true,
        hasCertificate: true,
        description: 'از صفر تا صد برنامه‌نویسی پایتون با پروژه‌های عملی',
        features: ['پروژه عملی', 'منتورشیپ', 'گواهینامه معتبر'],
    },
    {
        id: 3,
        title: 'آموزش گیتار کلاسیک - سطح مقدماتی',
        slug: 'classical-guitar-beginner',
        image: 'https://picsum.photos/600/400?random=3',
        institute: {
            id: 3,
            name: 'آکادمی هنر و موسیقی نوا',
            slug: 'nava-art-academy',
            logo: 'https://picsum.photos/100/100?random=logo3',
            isVerified: true,
        },
        instructor: {
            name: 'استاد حسین رضایی',
            avatar: 'https://picsum.photos/100/100?random=teacher3',
            rating: 5.0,
        },
        category: 'موسیقی',
        subcategory: 'گیتار',
        level: 'مقدماتی',
        price: 1500000,
        discount: 0,
        duration: '6 ماه',
        sessionsCount: 24,
        startDate: '1403/10/10',
        schedule: {
            days: ['پنجشنبه'],
            time: '16:00 - 18:00',
        },
        capacity: 8,
        enrolled: 6,
        rating: 4.9,
        reviewsCount: 123,
        viewsCount: 2340,
        isOnline: false,
        hasVideo: false,
        hasCertificate: true,
        description: 'آموزش اصولی گیتار کلاسیک از پایه',
        features: ['امانت گیتار', 'تمرین حضوری', 'کنسرت پایان دوره'],
    },
    {
        id: 4,
        title: 'بدنسازی و تناسب اندام بانوان',
        slug: 'women-fitness-bodybuilding',
        image: 'https://picsum.photos/600/400?random=4',
        institute: {
            id: 4,
            name: 'باشگاه ورزشی چمپیون',
            slug: 'champion-gym',
            logo: 'https://picsum.photos/100/100?random=logo4',
            isVerified: true,
        },
        instructor: {
            name: 'مربی سارا کریمی',
            avatar: 'https://picsum.photos/100/100?random=teacher4',
            rating: 4.8,
        },
        category: 'ورزشی',
        subcategory: 'بدنسازی',
        level: 'همه سطوح',
        price: 1200000,
        discount: 20,
        duration: '2 ماه',
        sessionsCount: 24,
        startDate: '1403/10/05',
        schedule: {
            days: ['شنبه', 'دوشنبه', 'چهارشنبه'],
            time: '10:00 - 12:00',
        },
        capacity: 12,
        enrolled: 10,
        rating: 4.7,
        reviewsCount: 189,
        viewsCount: 4560,
        isOnline: false,
        hasVideo: true,
        hasCertificate: false,
        description: 'برنامه تمرینی تخصصی برای بانوان با رژیم غذایی',
        features: ['برنامه غذایی', 'مشاوره رایگان', 'دسترسی به سونا'],
    },
    {
        id: 5,
        title: 'آشپزی ایتالیایی و پاستا',
        slug: 'italian-cooking-pasta',
        image: 'https://picsum.photos/600/400?random=5',
        institute: {
            id: 5,
            name: 'آموزشگاه آشپزی سرآشپز',
            slug: 'chef-cooking-school',
            logo: 'https://picsum.photos/100/100?random=logo5',
            isVerified: true,
        },
        instructor: {
            name: 'سرآشپز مینا احمدی',
            avatar: 'https://picsum.photos/100/100?random=teacher5',
            rating: 4.9,
        },
        category: 'آشپزی',
        subcategory: 'آشپزی بین‌المللی',
        level: 'مقدماتی',
        price: 1800000,
        discount: 0,
        duration: '1 ماه',
        sessionsCount: 8,
        startDate: '1403/10/12',
        schedule: {
            days: ['جمعه'],
            time: '14:00 - 18:00',
        },
        capacity: 10,
        enrolled: 8,
        rating: 5.0,
        reviewsCount: 234,
        viewsCount: 5670,
        isOnline: false,
        hasVideo: true,
        hasCertificate: true,
        description: 'آموزش انواع پاستا و غذاهای ایتالیایی',
        features: ['مواد اولیه رایگان', 'دستور پخت', 'تصاویر حرفه‌ای'],
    },
    {
        id: 6,
        title: 'رباتیک و Arduino برای کودکان',
        slug: 'robotics-arduino-kids',
        image: 'https://picsum.photos/600/400?random=6',
        institute: {
            id: 6,
            name: 'مرکز رباتیک و هوش مصنوعی',
            slug: 'robotics-ai-center',
            logo: 'https://picsum.photos/100/100?random=logo6',
            isVerified: false,
        },
        instructor: {
            name: 'مهندس امیر حسینی',
            avatar: 'https://picsum.photos/100/100?random=teacher6',
            rating: 4.6,
        },
        category: 'رباتیک',
        subcategory: 'Arduino',
        level: 'مقدماتی',
        price: 2200000,
        discount: 10,
        duration: '3 ماه',
        sessionsCount: 12,
        startDate: '1403/10/18',
        schedule: {
            days: ['پنجشنبه'],
            time: '15:00 - 17:00',
        },
        capacity: 15,
        enrolled: 11,
        rating: 4.8,
        reviewsCount: 98,
        viewsCount: 3210,
        isOnline: true,
        hasVideo: true,
        hasCertificate: true,
        description: 'آموزش رباتیک و برنامه‌نویسی Arduino برای کودکان 10 تا 15 سال',
        features: ['کیت Arduino', 'پروژه عملی', 'مسابقه'],
    },
    {
        id: 7,
        title: 'عکاسی حرفه‌ای و ویرایش تصویر',
        slug: 'professional-photography-editing',
        image: 'https://picsum.photos/600/400?random=7',
        institute: {
            id: 7,
            name: 'آتلیه عکاسی لنز طلایی',
            slug: 'golden-lens-studio',
            logo: 'https://picsum.photos/100/100?random=logo7',
            isVerified: false,
        },
        instructor: {
            name: 'عکاس محمد رضایی',
            avatar: 'https://picsum.photos/100/100?random=teacher7',
            rating: 4.7,
        },
        category: 'عکاسی',
        subcategory: 'عکاسی پرتره',
        level: 'متوسط',
        price: 2500000,
        discount: 15,
        duration: '2 ماه',
        sessionsCount: 16,
        startDate: '1403/10/08',
        schedule: {
            days: ['سه‌شنبه', 'پنجشنبه'],
            time: '17:00 - 20:00',
        },
        capacity: 12,
        enrolled: 9,
        rating: 4.8,
        reviewsCount: 145,
        viewsCount: 4890,
        isOnline: true,
        hasVideo: true,
        hasCertificate: true,
        description: 'از مبانی عکاسی تا ویرایش حرفه‌ای با Photoshop و Lightroom',
        features: ['امانت دوربین', 'آتلیه مجهز', 'نمایشگاه آثار'],
    },
    {
        id: 8,
        title: 'یوگا و مدیتیشن برای کاهش استرس',
        slug: 'yoga-meditation-stress-relief',
        image: 'https://picsum.photos/600/400?random=8',
        institute: {
            id: 4,
            name: 'باشگاه ورزشی چمپیون',
            slug: 'champion-gym',
            logo: 'https://picsum.photos/100/100?random=logo4',
            isVerified: true,
        },
        instructor: {
            name: 'مربی نیلوفر کاظمی',
            avatar: 'https://picsum.photos/100/100?random=teacher8',
            rating: 5.0,
        },
        category: 'ورزشی',
        subcategory: 'یوگا',
        level: 'مقدماتی',
        price: 900000,
        discount: 0,
        duration: '1.5 ماه',
        sessionsCount: 12,
        startDate: '1403/10/06',
        schedule: {
            days: ['یکشنبه', 'سه‌شنبه'],
            time: '08:00 - 09:30',
        },
        capacity: 15,
        enrolled: 13,
        rating: 4.9,
        reviewsCount: 267,
        viewsCount: 6780,
        isOnline: true,
        hasVideo: true,
        hasCertificate: false,
        description: 'تکنیک‌های یوگا و مدیتیشن برای آرامش و کاهش استرس',
        features: ['فضای آرام', 'موسیقی درمانی', 'چای گیاهی'],
    },
    {
        id: 9,
        title: 'طراحی گرافیک با Adobe Illustrator',
        slug: 'graphic-design-illustrator',
        image: 'https://picsum.photos/600/400?random=9',
        institute: {
            id: 2,
            name: 'مجتمع فنی تهران',
            slug: 'mft-tehran',
            logo: 'https://picsum.photos/100/100?random=logo2',
            isVerified: true,
        },
        instructor: {
            name: 'طراح سمیرا نوری',
            avatar: 'https://picsum.photos/100/100?random=teacher9',
            rating: 4.8,
        },
        category: 'طراحی گرافیک',
        subcategory: 'Illustrator',
        level: 'مقدماتی',
        price: 3200000,
        discount: 20,
        duration: '3 ماه',
        sessionsCount: 36,
        startDate: '1403/10/14',
        schedule: {
            days: ['شنبه', 'دوشنبه', 'چهارشنبه'],
            time: '16:00 - 18:30',
        },
        capacity: 18,
        enrolled: 15,
        rating: 4.7,
        reviewsCount: 412,
        viewsCount: 9340,
        isOnline: true,
        hasVideo: true,
        hasCertificate: true,
        description: 'آموزش کامل Illustrator برای طراحی لوگو، پوستر و موشن گرافیک',
        features: ['پروژه واقعی', 'پورتفولیو', 'فرصت شغلی'],
    },
];

const categories = [
    { id: 1, name: 'زبان انگلیسی', slug: 'english', count: 345, icon: 'fa-language' },
    { id: 2, name: 'برنامه‌نویسی', slug: 'programming', count: 289, icon: 'fa-code' },
    { id: 3, name: 'موسیقی', slug: 'music', count: 178, icon: 'fa-music' },
    { id: 4, name: 'ورزشی', slug: 'sports', count: 234, icon: 'fa-dumbbell' },
    { id: 5, name: 'آشپزی', slug: 'cooking', count: 156, icon: 'fa-utensils' },
    { id: 6, name: 'رباتیک', slug: 'robotics', count: 89, icon: 'fa-robot' },
    { id: 7, name: 'عکاسی', slug: 'photography', count: 123, icon: 'fa-camera' },
    { id: 8, name: 'طراحی گرافیک', slug: 'graphic-design', count: 267, icon: 'fa-palette' },
];

const levels = ['مقدماتی', 'متوسط', 'پیشرفته', 'همه سطوح'];
const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
const times = ['صبح (8-12)', 'عصر (14-18)', 'شب (18-22)'];

const stats = {
    totalClasses: 2456,
    totalInstructors: 487,
    totalStudents: 45000,
    averageRating: 4.7,
};

export const metadata = {
    title: 'همه کلاس‌ها | کلاس‌یار',
    description: 'لیست کامل کلاس‌های آموزشی در سراسر کشور - جستجو، مقایسه و ثبت‌نام آنلاین',
};

export default function AllClassesPage() {
    const breadcrumbItems = [
        { label: 'خانه', href: '/' },
        { label: 'کلاس‌ها', href: '/classes', current: true },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <main>
                {/* Hero Section */}
                <ClassesHero stats={stats} />

                {/* Search Section */}
                <ClassesSearch categories={categories} />

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <aside className="w-full lg:w-80 flex-shrink-0">
                            <ClassesFilter
                                categories={categories}
                                levels={levels}
                                days={days}
                                times={times}
                            />
                        </aside>

                        {/* Main Content Area */}
                        <div className="flex-1">
                            {/* Sort Bar */}
                            <ClassesSortBar totalCount={classesData.length} />

                            {/* Classes Grid */}
                            <ClassesGrid classes={classesData} />

                            {/* Pagination */}
                            <ClassesPagination
                                currentPage={1}
                                totalPages={15}
                                totalItems={classesData.length * 15}
                            />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}