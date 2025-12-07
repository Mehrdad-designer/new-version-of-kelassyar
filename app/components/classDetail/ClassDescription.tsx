// components/class-detail/ClassDescription.tsx
'use client';

import { useState } from 'react';

export default function ClassDescription({ description }: any) {
    const [isExpanded, setIsExpanded] = useState(false);
    const shortDescription = description.substring(0, 300);
    const needsExpansion = description.length > 300;

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-sky-500"></i>
                درباره این کلاس
            </h2>
            
            <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {isExpanded ? description : needsExpansion ? `${shortDescription}...` : description}
                </p>
            </div>
            
            {needsExpansion && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-sky-600 hover:text-sky-700 font-medium flex items-center gap-2 transition-colors"
                >
                    {isExpanded ? (
                        <>
                            <span>نمایش کمتر</span>
                            <i className="fas fa-chevron-up"></i>
                        </>
                    ) : (
                        <>
                            <span>ادامه مطلب</span>
                            <i className="fas fa-chevron-down"></i>
                        </>
                    )}
                </button>
            )}
        </div>
    );
}