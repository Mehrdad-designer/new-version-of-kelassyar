// components/class-detail/InstituteMiniCard.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function InstituteMiniCard({ institute }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="fas fa-building text-sky-500"></i>
                اطلاعات آموزشگاه
            </h3>
            
            <div className="space-y-4">
                {/* Logo & Name */}
                <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-2 ring-sky-200">
                        {/* <Image 
                            src={institute.logo}
                            alt={institute.name}
                            fill
                            className="object-cover"
                        /> */}
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-800 flex items-center gap-1">
                            {institute.name}
                            {institute.isVerified && (
                                <i className="fas fa-check-circle text-blue-500 text-sm"></i>
                            )}
                        </h4>
                        <div className="flex items-center gap-1 mt-1">
                            <i className="fas fa-star text-yellow-400 text-sm"></i>
                            <span className="text-sm font-bold text-gray-700">{institute.rating}</span>
                            <span className="text-xs text-gray-500">({institute.reviewsCount.toLocaleString('fa-IR')})</span>
                        </div>
                    </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-gray-600 p-3 bg-gray-50 rounded-xl">
                    <i className="fas fa-map-marker-alt text-red-500 mt-0.5"></i>
                    <span className="leading-relaxed">{institute.address}</span>
                </div>
                
                {/* View Button */}
                <Link 
                    href={`/institutes/${institute.slug}`}
                    className="block w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all"
                >
                    <i className="fas fa-external-link-alt ml-2"></i>
                    مشاهده صفحه آموزشگاه
                </Link>
            </div>
        </div>
    );
}