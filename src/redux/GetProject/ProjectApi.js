import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "@env"

// 192.168.1.77

export const ProjectApi = createApi({
  reducerPath: "ProjectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Discussion'],
  endpoints: (builder) => ({
    getProject: builder.query({
      query: () => ({
        url: "getproject",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "getuser",
        method: "GET",
      }),
    }),
    getIssues: builder.query({
      query: () => ({
        url: "getissues",
        method: "GET",
      }),
    }),
    getDiscussion: builder.query({
      query: () => ({
        url: "getdiscussion",
        method: "GET",
      }),
      providesTags: ['Discussion'],
    }),
    createDiscussion: builder.mutation({
      query: (discussionData) => ({
        url: "creatediscussion",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: discussionData,
      }),
      invalidatesTags: ['Discussion'],
    }),
    deleteDiscussion: builder.mutation({
      query: (discussionId) => ({
        url: `deletediscussion/${discussionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Discussion'],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useGetUserQuery,
  useGetIssuesQuery,
  useCreateDiscussionMutation,
  useGetDiscussionQuery,
  useDeleteDiscussionMutation
} = ProjectApi;
