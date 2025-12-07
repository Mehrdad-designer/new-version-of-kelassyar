// components/class-detail/CommentsSection.tsx
'use client';

import { useState } from 'react';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

export default function CommentsSection({ comments, classId }: any) {
    const [showCommentForm, setShowCommentForm] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-comments text-sky-500"></i>
                    نظرات کاربران ({comments.length.toLocaleString('fa-IR')})
                </h2>
                <button 
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors flex items-center gap-2"
                >
                    <i className="fas fa-plus"></i>
                    ثبت نظر
                </button>
            </div>
            
            {/* Comment Form */}
            {showCommentForm && (
                <div className="mb-6">
                    <CommentForm 
                        classId={classId}
                        onClose={() => setShowCommentForm(false)}
                    />
                </div>
            )}
            
            {/* Comments List */}
            <div className="space-y-6">
                {comments.map((comment: any) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
            
            {comments.length === 0 && (
                <div className="text-center py-12">
                    <i className="fas fa-comments text-6xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500">هنوز نظری ثبت نشده است</p>
                </div>
            )}
        </div>
    );
}