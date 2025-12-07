// components/class-detail/ClassRatingSystem.tsx
'use client';

import { useState } from 'react';
import UserRatingInput from './UserRatingInput';
import RatingSummary from './RatingSummary';

export default function ClassRatingSystem({ ratings, classId }: any) {
    const [showRatingForm, setShowRatingForm] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    امتیازدهی و نظرات
                </h2>
                <button 
                    onClick={() => setShowRatingForm(!showRatingForm)}
                    className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors flex items-center gap-2"
                >
                    <i className="fas fa-plus"></i>
                    ثبت امتیاز
                </button>
            </div>
            
            {/* Rating Summary */}
            <RatingSummary ratings={ratings} />
            
            {/* User Rating Input */}
            {showRatingForm && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                    <UserRatingInput 
                        classId={classId}
                        onClose={() => setShowRatingForm(false)}
                    />
                </div>
            )}
        </div>
    );
}