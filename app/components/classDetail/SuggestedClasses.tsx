// components/class-detail/SuggestedClasses.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function SuggestedClasses({ classes }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-lightbulb text-yellow-500"></i>
                کلاس‌های پیشنهادی
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {classes.map((classItem: any) => {
                    const finalPrice = classItem.price - (classItem.price * classItem.discount / 100);
                    
                    return (
                        <Link 
                            key={classItem.id}
                            href={`/classes/${classItem.slug}`}
                            className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                {/* <Image 
                                    src={classItem.image}
                                    alt={classItem.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                /> */}
                                {classItem.discount > 0 && (
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                                        {classItem.discount}% تخفیف
                                    </div>
                                )}
                            </div>
                            
                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-sky-600 transition-colors">
                                    {classItem.title}
                                </h3>
                                
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-sky-50 text-sky-600 text-xs rounded-lg">
                                        {classItem.category}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                    <i className="fas fa-chalkboard-teacher text-sky-500"></i>
                                    <span className="line-clamp-1">{classItem.teacher}</span>
                                </div>
                                
                                <div className="flex items-center gap-1 mb-3">
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <span className="font-bold text-gray-700">{classItem.rating}</span>
                                </div>
                                
                                <div className="pt-3 border-t border-gray-100">
                                    {classItem.discount > 0 && (
                                        <div className="text-xs text-gray-400 line-through mb-1">
                                            {classItem.price.toLocaleString('fa-IR')} تومان
                                        </div>
                                    )}
                                    <div className="text-lg font-bold text-green-600">
                                        {finalPrice.toLocaleString('fa-IR')} تومان
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}