/**
 * Title: Write a program using JavaScript on UserApi
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
 * Date: 01, August 2023
 */

import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // display users
    getUsers: builder.query({
      query: (page) => {
        const url = page ? `/user?page=${page}` : "/user";
        return {
          url,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      },
      providesTags: ["User"],
    }),

    // update user
    updateUser: builder.mutation({
      query: ({ id, status, data, filename }) => {
        let url = "";

        if (status) {
          url = `/user/${id}?status=${status}`;
          return {
            url,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          };
        } else if (filename) {
          url = `/user/${id}?filename=${filename}`;
          return {
            url,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: data,
          };
        } else {
          return {
            url: `/user/${id}`,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: data,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
