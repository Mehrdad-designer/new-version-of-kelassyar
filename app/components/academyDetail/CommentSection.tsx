"use client";

import { useState } from "react";
import { Star, Send, MessageCircle } from "lucide-react";

interface Comment {
  id: string;
  username: string;
  text: string;
  rating: number;
  date: string;
  replies: Array<{
    id: string;
    username: string;
    text: string;
    date: string;
  }>;
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({
  comments: initialComments,
}: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ text: "", rating: 5 });
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const submitComment = () => {
    if (!newComment.text.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      username: "کاربر جدید",
      text: newComment.text,
      rating: newComment.rating,
      date: new Date().toLocaleDateString("fa-IR"),
      replies: [],
    };

    setComments([comment, ...comments]);
    setNewComment({ text: "", rating: 5 });
    alert("نظر شما ثبت شد! ✅");
  };

  const submitReply = (commentId: string) => {
    if (!replyText.trim()) return;

    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now().toString(),
                username: "کاربر جدید",
                text: replyText,
                date: new Date().toLocaleDateString("fa-IR"),
              },
            ],
          };
        }
        return comment;
      })
    );

    setReplyText("");
    setReplyingTo(null);
    alert("پاسخ شما ثبت شد! ✅");
  };

  return (
    <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        نظرات ({comments.length})
      </h2>

      {/* Add New Comment Form */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 space-y-4">
        <h3 className="font-bold text-gray-700">نظر خود را بنویسید</h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">امتیاز:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setNewComment({ ...newComment, rating: star })}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= newComment.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <textarea
          value={newComment.text}
          onChange={(e) =>
            setNewComment({ ...newComment, text: e.target.value })
          }
          placeholder="نظر خود را بنویسید..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none bg-white/80 backdrop-blur-sm"
          rows={4}
        />

        <button
          onClick={submitComment}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium flex items-center justify-center gap-2 shadow-lg"
        >
          <Send className="w-5 h-5" />
          ارسال نظر
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="backdrop-blur-sm bg-white/80 rounded-xl p-4 border border-white/60 space-y-3"
          >
            {/* Comment Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {comment.username[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{comment.username}</p>
                  <p className="text-xs text-gray-500">{comment.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-700">
                  {comment.rating}
                </span>
              </div>
            </div>

            {/* Comment Text */}
            <p className="text-gray-700 leading-relaxed">{comment.text}</p>

            {/* Reply Button */}
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              پاسخ
            </button>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="پاسخ خود را بنویسید..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 outline-none resize-none text-sm"
                  rows={2}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => submitReply(comment.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                  >
                    ارسال
                  </button>
                  <button
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyText("");
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
                  >
                    انصراف
                  </button>
                </div>
              </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mr-8 space-y-3 border-r-2 border-blue-200 pr-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="bg-blue-50/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                        {reply.username[0]}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-800">
                          {reply.username}
                        </p>
                        <p className="text-xs text-gray-500">{reply.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{reply.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
