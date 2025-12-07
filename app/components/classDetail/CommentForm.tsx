// components/class-detail/CommentForm.tsx
'use client';

import { useState } from 'react';

export default function CommentForm({ classId, onClose }: any) {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting comment:', { classId, rating, comment });
        // اینجا باید با API ارتباط برقرار شود
        setRating(0);
        setComment('');
        onClose();
    };

    return (
        <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">نظر خود را بنویسید</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        امتیاز شما:
                    </label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                className="transition-transform hover:scale-110"
                            >
                                <i 
                                    className={`fas fa-star text-3xl ${
                                        star <= (hoveredRating || rating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                    }`}
                                ></i>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Comment Text */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        نظر شما:
                    </label>
                    <textarea 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="تجربه خود از این کلاس را با ما به اشتراک بگذارید..."
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        حداقل 20 کاراکتر
                    </p>
                </div>
                
                {/* Guidelines */}
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs text-gray-600 mb-2 font-medium">راهنمای نوشتن نظر:</p>
                    <ul className="text-xs text-gray-600 space-y-1 mr-4">
                        <li>• نظرات باید مرتبط با کلاس باشد</li>
                        <li>• از زبان محترمانه استفاده کنید</li>
                        <li>• تجربه واقعی خود را بنویسید</li>
                        <li>• از ذکر اطلاعات شخصی خودداری کنید</li>
                    </ul>
                </div>
                
                {/* Submit Buttons */}
                <div className="flex gap-3">
                    <button 
                        type="submit"
                        disabled={rating === 0 || comment.length < 20}
                        className="flex-1 py-3 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        ثبت نظر
                    </button>
                    <button 
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-colors"
                    >
                        انصراف
                    </button>
                </div>
            </form>
        </div>
    );
}