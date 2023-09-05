/**
 * Title: Write a program using JavaScript on TransactionApi
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
 * Date: 02, August 2023
 */

import apiSlice from "../api/apiSlice";

const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create a transaction
    createTransaction: builder.mutation({
      query: (data) => ({
        url: "/transaction",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Transaction"],
    }),

    // get all transactions
    getAllTransactions: builder.query({
      query: (page) => {
        const url = page ? `/transaction?page=${page}` : "/transaction";
        return {
          url,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      },
      providesTags: ["Transaction"],
    }),

    // check all transactions
    checkAllTransactions: builder.query({
      query: (token) => ({
        url: `/transaction/check?token=${token}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Transaction"],
    }),
  }),
});

export const {
  useCreateTransactionMutation,
  useGetAllTransactionsQuery,
  useCheckAllTransactionsQuery,
} = transactionApi;
