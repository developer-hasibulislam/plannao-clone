/**
 * Title: Write a program using JavaScript on MentorApi
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 30, July 2023
 */

import apiSlice from "../api/apiSlice";

const mentorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create a mentor
    createMentor: builder.mutation({
      query: (data) => ({
        url: "/mentor",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
      invalidatesTags: ["Mentor"],
    }),

    // display mentors
    getMentors: builder.query({
      query: (page) => {
        const url = page ? `/mentor?page=${page}` : "/mentor";
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Mentor"],
    }),

    // display mentor
    getMentor: builder.query({
      query: (id) => ({
        url: `/mentor/${id}`,
        method: "GET",
      }),
      providesTags: ["Mentor"],
    }),

    // update mentor
    updateMentor: builder.mutation({
      query: ({ id, data, filename, status }) => {
        let url = "";

        if (filename) {
          url = `/mentor/${id}?filename=${filename}`;

          return {
            url: url,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: data,
          };
        } else if (status) {
          url = `/mentor/${id}?status=${status}`;

          return {
            url: url,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ status }),
          };
        } else {
          url = `/mentor/${id}`;

          return {
            url: url,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: data,
          };
        }
      },
      invalidatesTags: ["Mentor"],
    }),
  }),
});

export const {
  useCreateMentorMutation,
  useGetMentorsQuery,
  useGetMentorQuery,
  useUpdateMentorMutation,
} = mentorApi;
