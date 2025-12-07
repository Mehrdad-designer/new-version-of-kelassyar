// components/class-detail/CommentItem.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CommentItem({ comment }: any) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleReplySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reply:', replyText);
        // اینجا باید با API ارتباط برقرار شود
        setReplyText('');
        setShowReplyForm(false);
    };

    return (
        <div className="border border-gray-200 rounded-xl p-5">
            {/* Comment Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-sky-200 flex-shrink-0">
                    {/* <Image 
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        fill
                        className="object-cover"
                    /> */}
                </div>
                
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h4 className="font-bold text-gray-800 flex items-center gap-2">
                                {comment.user.name}
                                {comment.user.isInstitute && (
                                    <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                                        آموزشگاه
                                    </span>
                                )}
                            </h4>
                            <p className="text-sm text-gray-500">{comment.date}</p>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <i 
                                    key={i}
                                    className={`fas fa-star text-sm ${
                                        i < comment.rating ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                ></i>
                            ))}
                        </div>
                    </div>
                    
                    {/* Comment Text */}
                    <p className="text-gray-700 leading-relaxed mb-3">
                        {comment.text}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-4 text-sm">
                        <button 
                            onClick={() => setShowReplyForm(!showReplyForm)}
                            className="text-sky-600 hover:text-sky-700 flex items-center gap-1"
                        >
                            <i className="fas fa-reply"></i>
                            پاسخ
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                            <i className="far fa-thumbs-up"></i>
                            مفید بود
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Reply Form */}
            {showReplyForm && (
                <div className="mr-16 mt-4 p-4 bg-sky-50 rounded-xl border border-sky-200">
                    <form onSubmit={handleReplySubmit}>
                        <textarea 
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="پاسخ خود را بنویسید..."
                            rows={3}
                            className="w-full px-4 py-3 bg-white border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                        />
                        <div className="flex gap-2 mt-3">
                            <button 
                                type="submit"
                                className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                            >
                                ارسال پاسخ
                            </button>
                            <button 
                                type="button"
                                onClick={() => setShowReplyForm(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                انصراف
                            </button>
                        </div>
                    </form>
                </div>
            )}
            
            {/* Replies */}
            {comment.replies.length > 0 && (
                <div className="mr-16 mt-4 space-y-4">
                    {comment.replies.map((reply: any) => (
                        <div 
                            key={reply.id}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
                        >
                            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 flex-shrink-0">
                                {/* <Image 
                                    src={reply.user.avatar}
                                    alt={reply.user.name}
                                    fill
                                    className="object-cover"
                                /> */}
                            </div>
                            
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h5 className="font-bold text-gray-800 text-sm">
                                        {reply.user.name}
                                    </h5>
                                    {reply.user.isInstitute && (
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                                            آموزشگاه
                                        </span>
                                    )}
                                    <span className="text-xs text-gray-500">{reply.date}</span>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {reply.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}