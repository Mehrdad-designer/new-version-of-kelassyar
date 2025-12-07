// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:8000/api/v1/'
    }),
    tagTypes: ['Posts', 'Users'], // برای اینوالیدیشن کش
    endpoints: (builder) => ({
        // دریافت لیست پست‌ها
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: ['Posts'] // کَش‌گذاری با تگ
        }),

        // دریافت پست با آیدی
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
            providesTags: (result, error, id) =>
                [{ type: 'Posts', id }]
        }),

        // ایجاد پست جدید (مثالی از mutation)
        createPost: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost
            }),
            invalidatesTags: ['Posts'] // اینوالید کردن کش
        }),

        // آپدیت پست
        updatePost: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: patch
            }),
            invalidatesTags: (result, error, { id }) =>
                [{ type: 'Posts', id }]
        })
    })
})

// Export hooks برای استفاده در کامپوننت‌ها
export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation
} = api