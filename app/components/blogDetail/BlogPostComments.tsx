// components/blog-detail/BlogPostComments.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface User {
  name: string;
  image: string;
  isAuthor?: boolean;
}

interface Reply {
  id: number;
  user: User;
  date: string;
  content: string;
  likes: number;
}

interface Comment {
  id: number;
  user: User;
  date: string;
  content: string;
  likes: number;
  replies: Reply[];
}

interface BlogPostCommentsProps {
  comments: Comment[];
  commentsCount: number;
}

export default function BlogPostComments({
  comments,
  commentsCount,
}: BlogPostCommentsProps) {
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New comment:", newComment);
    setNewComment("");
  };

  const handleSubmitReply = (commentId: number) => {
    console.log("Reply to", commentId, ":", replyContent);
    setReplyContent("");
    setReplyTo(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
          <i className="fas fa-comments text-white"></i>
        </div>
        نظرات ({commentsCount.toLocaleString("fa-IR")})
      </h3>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmitComment}
        className="mb-8 p-6 bg-gray-50 rounded-xl"
      >
        <h4 className="font-bold text-gray-800 mb-4">نظر خود را بنویسید</h4>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="نظر شما..."
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <i className="fas fa-paper-plane"></i>
          ارسال نظر
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-100 pb-6 last:border-0"
          >
            {/* Comment */}
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                {/* <Image
                  src={comment.user.image}
                  alt={comment.user.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-gray-800">
                    {comment.user.name}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {comment.content}
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                    <i className="far fa-heart"></i>
                    <span className="text-sm">
                      {comment.likes.toLocaleString("fa-IR")}
                    </span>
                  </button>
                  <button
                    onClick={() => setReplyTo(comment.id)}
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    <i className="fas fa-reply"></i>
                    <span className="text-sm">پاسخ</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyTo === comment.id && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="پاسخ شما..."
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-3"
                    ></textarea>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSubmitReply(comment.id)}
                        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        ارسال پاسخ
                      </button>
                      <button
                        onClick={() => setReplyTo(null)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors text-sm"
                      >
                        انصراف
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 mr-8 space-y-4">
                    {comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="flex gap-3 p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          {/* <Image
                            src={reply.user.image}
                            alt={reply.user.name}
                            fill
                            className="object-cover"
                          /> */}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-800 text-sm">
                              {reply.user.name}
                            </span>
                            {reply.user.isAuthor && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                                نویسنده
                              </span>
                            )}
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              {reply.date}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            {reply.content}
                          </p>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                            <i className="far fa-heart text-xs"></i>
                            <span className="text-xs">
                              {reply.likes.toLocaleString("fa-IR")}
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
