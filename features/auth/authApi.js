/**
 * Title: Write a program using JavaScript on Auth Api
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
 * Date: 28, July 2023
 */

import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // signup an user
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // signin an user
    signin: builder.mutation({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // persist user login
    persist: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providedTags: ["User"],
    }),

    // account password reset
    forgotpassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgotpassword",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // upload an avatar
    uploadavatar: builder.mutation({
      query: (data) => ({
        url: "/auth/avatar",
        method: "POST",
        body: data,
      }),
    }),

    // remove an avatar
    removeavatar: builder.mutation({
      query: (data) => ({
        url: `/auth/avatar?filename=${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useForgotpasswordMutation,
  usePersistQuery,
  useUploadavatarMutation,
  useRemoveavatarMutation,
} = authApi;
