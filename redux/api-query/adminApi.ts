import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdminFormIF } from "../../models/admin.model";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collage-enquiry-system-chatbot.herokuapp.com/api",
  }),
  tagTypes: ["admin"],
  endpoints: (builder) => ({
    adminLogin: builder.mutation<{}, AdminFormIF>({
      query: (admin) => ({
        url: "/admin-sessions",
        method: "POST",
        body: admin,
      }),
      // invalidatesTags: ["message"],
    }),
  }),
});

export const { useAdminLoginMutation } = adminApi;
