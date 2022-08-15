import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogIF } from "../../models/blog.model";
import { AddBlogFormIF } from "../../models/form.models";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    blogs: builder.query<BlogIF[], void>({
      query: () => "/blogs",
      // providesTags: ["Blog"],
    }),
    blog: builder.query<BlogIF, string>({
      query: (id) => `/blog/${id}`,
      // providesTags: ["Blog"],
    }),
    addBlog: builder.mutation<{}, AddBlogFormIF>({
      query: (blog) => ({
        url: "/blog",
        method: "POST",
        body: blog,
      }),
      // invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation<void, BlogIF>({
      query: ({ blogId, ...rest }) => ({
        url: `/blogs/${blogId}`,
        method: "PUT",
        body: rest,
      }),
      // invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation<void, string>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useBlogsQuery,
  useBlogQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
