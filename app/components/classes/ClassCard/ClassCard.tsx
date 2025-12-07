// components/classes/ClassCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface ClassData {
    id: number;
    title: string;
    category: string;
    categoryColor: string;
    institute: string;
    teacher: string;
    startDate: string;
    schedule: string;
    views: number;
    image: string;
    isNew?: boolean;
    isPopular?: boolean;
}

interface ClassCardProps {
    data: ClassData;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
};

export default function ClassCard({ data }: ClassCardProps) {
    const colorClasses = categoryColors[data.categoryColor] || categoryColors.blue;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <Image 
                    src={data.image}
                    alt={data.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                    {data.isNew && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                            جدید
                        </span>
                    )}
                    {data.isPopular && (
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                            محبوب
                        </span>
                    )}
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 right-4">
                    <span className={`px-3 py-1.5 ${colorClasses.bg} ${colorClasses.text} text-xs font-bold rounded-lg backdrop-blur-sm`}>
                        {data.category}
                    </span>
                </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
                {/* Institute */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <i className="fas fa-building text-blue-400"></i>
                    <span>{data.institute}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {data.title}
                </h3>
                
                {/* Details */}
                <div className="space-y-2 mb-4">
                    {/* Teacher */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fas fa-user-tie text-blue-500 w-4"></i>
                        <span>مدرس: {data.teacher}</span>
                    </div>
                    
                    {/* Start Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fas fa-calendar-alt text-green-500 w-4"></i>
                        <span>شروع: {data.startDate}</span>
                    </div>
                    
                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="fas fa-clock text-orange-500 w-4"></i>
                        <span>{data.schedule}</span>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* Views */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <i className="fas fa-eye text-gray-400"></i>
                        <span>{data.views.toLocaleString('fa-IR')} بازدید</span>
                    </div>
                    
                    {/* View Button */}
                    <Link 
                        href={`/classes/${data.id}`}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                    >
                        مشاهده
                        <i className="fas fa-arrow-left text-xs"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}