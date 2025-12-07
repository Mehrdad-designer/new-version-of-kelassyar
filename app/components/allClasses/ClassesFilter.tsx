// components/classes/InstructorFilter.tsx
'use client';

import { useState } from 'react';

export default function InstructorFilter() {
    const [minRating, setMinRating] = useState<number | null>(null);

    const ratings = [5, 4, 3];

    return (
        <div>
            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                <i className="fas fa-chalkboard-teacher text-orange-500"></i>
                امتیاز مدرس
            </label>
            <div className="space-y-2">
                {ratings.map((rating) => (
                    <label 
                        key={rating}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                        <input 
                            type="radio"
                            name="instructor-rating"
                            checked={minRating === rating}
                            onChange={() => setMinRating(rating)}
                            className="sr-only peer"
                        />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-yellow-500 peer-checked:border-[6px] transition-all"></div>
                        <div className="flex items-center gap-2 flex-1">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <i 
                                        key={i}
                                        className={`${i < rating ? 'fas' : 'far'} fa-star text-yellow-400 text-sm`}
                                    ></i>
                                ))}
                            </div>
                            <span className="text-xs text-gray-400">و بالاتر</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}