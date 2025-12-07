// app/classes/[slug]/page.tsx
import ClassBreadcrumb from "@/app/components/classDetail/ClassBreadcrumb";
import ClassDescription from "@/app/components/classDetail/ClassDescription";
import ClassHeader from "@/app/components/classDetail/ClassHeader";
import ClassInfoGrid from "@/app/components/classDetail/ClassInfoGrid";
import ClassMainImage from "@/app/components/classDetail/ClassMainImage";
import ClassRatingSystem from "@/app/components/classDetail/ClassRatingSystem";
import CommentsSection from "@/app/components/classDetail/CommentsSection";
import InstituteMiniCard from "@/app/components/classDetail/InstituteMiniCard";
import QuickClassInfo from "@/app/components/classDetail/QuickClassInfo";
import RegistrationSection from "@/app/components/classDetail/RegistrationSection";
import SuggestedClasses from "@/app/components/classDetail/SuggestedClasses";

// داده‌های نمونه کلاس
const classData = {
    id: 1,
    title: 'دوره جامع IELTS آکادمیک - آماده‌سازی کامل برای آزمون',
    subtitle: 'از مبتدی تا پیشرفته با تضمین نمره',
    slug: 'ielts-academic-complete',
    mainImage: 'https://picsum.photos/1200/600?random=1',
    category: 'زبان انگلیسی',
    categorySlug: 'english',
    subcategory: 'IELTS',
    subcategorySlug: 'ielts',
    rating: 4.8,
    reviewsCount: 245,
    viewsCount: 3420,
    teacher: {
        name: 'دکتر علی محمدی',
        avatar: 'https://picsum.photos/100/100?random=teacher1',
        rating: 4.9,
        experience: '15 سال',
    },
    tags: ['IELTS Academic', 'Speaking', 'Writing', 'تضمین نمره'],
    institute: {
        id: 1,
        name: 'آموزشگاه زبان پارسیان',
        slug: 'parsian-language',
        logo: 'https://picsum.photos/100/100?random=logo1',
        address: 'تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک 1250',
        rating: 4.7,
        reviewsCount: 324,
        isVerified: true,
    },
    description: `
        دوره جامع IELTS آکادمیک یک برنامه آموزشی کامل و تخصصی است که شما را برای موفقیت در آزمون بین‌المللی IELTS آماده می‌کند. 
        این دوره با تمرکز بر چهار مهارت اصلی Reading، Writing، Listening و Speaking طراحی شده است.
        
        در این دوره شما با استراتژی‌های حرفه‌ای، تکنیک‌های آزمون، و تمرینات عملی فراوان آشنا خواهید شد. 
        تیم مدرسین ما با سال‌ها تجربه در آموزش IELTS، شما را در مسیر کسب نمره دلخواه همراهی می‌کنند.
        
        ویژگی‌های منحصر به فرد این دوره:
        - آموزش توسط مدرسین با مدرک CELTA و DELTA
        - آزمون‌های آزمایشی هفتگی
        - تصحیح رایتینگ توسط اساتید Native
        - کلاس‌های Speaking تک به تک
        - دسترسی به منابع آنلاین و کتاب‌های اصلی کمبریج
        - پشتیبانی 24 ساعته
    `,
    price: 3500000,
    discount: 10,
    level: 'پیشرفته',
    schedule: {
        days: ['شنبه', 'دوشنبه', 'چهارشنبه'],
        time: '17:00 - 19:00',
    },
    ageGroup: '18 سال به بالا',
    sessionsCount: 36,
    duration: '3 ماه',
    capacity: 15,
    enrolled: 12,
    prerequisites: 'سطح Pre-Intermediate به بالا، آشنایی اولیه با ساختار آزمون IELTS',
    hasCertificate: true,
    certificateInfo: 'گواهینامه معتبر از آموزشگاه پارسیان',
    createdAt: '1403/09/15',
    registrationDocument: 'لطفاً کارت ملی و یک قطعه عکس به همراه داشته باشید.',
    startDate: '1403/10/01',
    status: 'limited', // 'available' | 'limited' | 'full'
    ratings: {
        overall: 4.8,
        counts: { 5: 150, 4: 80, 3: 10, 2: 3, 1: 2 },
        aspects: {
            teaching: 4.9,
            content: 4.7,
            support: 4.6,
            value: 4.5,
        }
    }
};

// داده‌های نظرات - جداگانه تعریف می‌شود
const comments = [
    {
        id: 1,
        user: {
            name: 'مریم احمدی',
            avatar: 'https://picsum.photos/50/50?random=user1',
        },
        rating: 5,
        text: 'دوره عالی بود! استاد واقعاً با حوصله و دقیق تدریس می‌کردن. منابع آموزشی هم کامل بود.',
        date: '1403/09/20',
        replies: [
            {
                id: 11,
                user: {
                    name: 'پشتیبانی پارسیان',
                    avatar: 'https://picsum.photos/50/50?random=support1',
                    isInstitute: true
                },
                text: 'سپاس از نظر شما! خوشحالیم که دوره مورد توجه شما قرار گرفته.',
                date: '1403/09/21',
            }
        ],
    },
    {
        id: 2,
        user: {
            name: 'سارا رضایی',
            avatar: 'https://picsum.photos/50/50?random=user2',
        },
        rating: 4,
        text: 'تجربه خوبی بود، فقط کاش کلاس‌های اسپیکینگ بیشتر بود. ولی به طور کلی راضی هستم.',
        date: '1403/09/18',
        replies: [],
    },
    {
        id: 3,
        user: {
            name: 'علی کریمی',
            avatar: 'https://picsum.photos/50/50?random=user3',
        },
        rating: 5,
        text: 'عالی بود! استاد محمدی واقعاً استاد کاری هستند. توصیه می‌کنم حتماً در این دوره شرکت کنید.',
        date: '1403/09/15',
        replies: [],
    },
];

// کلاس‌های پیشنهادی
const suggestedClasses = [
    {
        id: 2,
        title: 'دوره IELTS Speaking پیشرفته',
        category: 'زبان انگلیسی',
        rating: 4.7,
        reviewsCount: 89,
        price: 1200000,
        discount: 15,
        image: 'https://picsum.photos/400/300?random=2',
        slug: 'ielts-speaking-advanced',
    },
    {
        id: 3,
        title: 'دوره TOEFL iBT کامل',
        category: 'زبان انگلیسی',
        rating: 4.6,
        reviewsCount: 76,
        price: 2800000,
        discount: 10,
        image: 'https://picsum.photos/400/300?random=3',
        slug: 'toefl-ibt-complete',
    },
    {
        id: 4,
        title: 'دوره گرامر پیشرفته انگلیسی',
        category: 'زبان انگلیسی',
        rating: 4.5,
        reviewsCount: 54,
        price: 850000,
        discount: 20,
        image: 'https://picsum.photos/400/300?random=4',
        slug: 'advanced-english-grammar',
    },
];

export const metadata = {
    title: `${classData.title} | کلاس‌یار`,
    description: classData.description.substring(0, 160),
};

export default function ClassDetailPage() {
    const breadcrumbItems = [
        { label: 'خانه', href: '/' },
        { label: classData.category, href: `/categories/${classData.categorySlug}` },
        { label: classData.subcategory, href: `/categories/${classData.categorySlug}/${classData.subcategorySlug}` },
        { label: classData.title, current: true },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
            
            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <ClassBreadcrumb items={breadcrumbItems} />
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Class Header */}
                        <ClassHeader 
                            title={classData.title}
                            subtitle={classData.subtitle}
                        />
                        
                        {/* Main Image */}
                        <ClassMainImage 
                            image={classData.mainImage}
                            title={classData.title}
                        />
                        
                        {/* Quick Info */}
                        <QuickClassInfo 
                            rating={classData.rating}
                            reviewsCount={classData.reviewsCount}
                            teacher={classData.teacher}
                            viewsCount={classData.viewsCount}
                            tags={classData.tags}
                        />
                        
                        {/* Description */}
                        <ClassDescription description={classData.description} />
                        
                        {/* Info Grid */}
                        <ClassInfoGrid 
                            price={classData.price}
                            discount={classData.discount}
                            level={classData.level}
                            schedule={classData.schedule}
                            ageGroup={classData.ageGroup}
                            sessionsCount={classData.sessionsCount}
                            duration={classData.duration}
                            capacity={classData.capacity}
                            enrolled={classData.enrolled}
                            prerequisites={classData.prerequisites}
                            hasCertificate={classData.hasCertificate}
                            certificateInfo={classData.certificateInfo}
                            createdAt={classData.createdAt}
                            registrationDocument={classData.registrationDocument}
                            tags={classData.tags}
                            category={classData.category}
                            subcategory={classData.subcategory}
                            instituteName={classData.institute.name}
                        />
                        
                        {/* Rating System */}
                        <ClassRatingSystem 
                            ratings={classData.ratings}
                            classId={classData.id}
                        />
                        
                        {/* Comments */}
                        <CommentsSection 
                            comments={comments}
                            classId={classData.id}
                        />
                    </div>
                    
                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Institute Card */}
                        <InstituteMiniCard institute={classData.institute} />
                        
                        {/* Registration Section */}
                        <RegistrationSection 
                            price={classData.price}
                            discount={classData.discount}
                            status={classData.status}
                            capacity={classData.capacity}
                            enrolled={classData.enrolled}
                            startDate={classData.startDate}
                            classSlug={classData.slug}
                        />
                    </div>
                </div>
                
                {/* Suggested Classes */}
                <div className="mt-12">
                    <SuggestedClasses classes={suggestedClasses} />
                </div>
            </main>
            
        </div>
    );
}