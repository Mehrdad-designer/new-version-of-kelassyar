// components/class-detail/QuickClassInfo.tsx
import Image from 'next/image';

export default function QuickClassInfo({ rating, reviewsCount, teacher, viewsCount, tags }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <div className="flex flex-wrap items-center gap-6">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <i 
                                key={i}
                                className={`fas fa-star ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            ></i>
                        ))}
                    </div>
                    <span className="font-bold text-gray-800">{rating}</span>
                    <span className="text-sm text-gray-500">({reviewsCount.toLocaleString('fa-IR')} نظر)</span>
                </div>
                
                {/* Divider */}
                <div className="w-px h-8 bg-gray-200"></div>
                
                {/* Teacher */}
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-sky-200">
                        {/* <Image 
                            src={teacher.avatar}
                            alt={teacher.name}
                            fill
                            className="object-cover"
                        /> */}
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">مدرس:</p>
                        <p className="font-bold text-gray-800">{teacher.name}</p>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="w-px h-8 bg-gray-200"></div>
                
                {/* Views */}
                <div className="flex items-center gap-2">
                    <i className="fas fa-eye text-sky-500"></i>
                    <span className="text-gray-700">{viewsCount.toLocaleString('fa-IR')} بازدید</span>
                </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                {tags.map((tag: string, index: number) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-sky-50 text-sky-700 text-sm rounded-full border border-sky-200"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}