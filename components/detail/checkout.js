/**
 * Title: Write a program using JavaScript on Checkout
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

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Disclosure from "./disclosure";
import {
  useCheckAllTransactionsQuery,
  useCreateTransactionMutation,
} from "@/features/transaction/transactionApi";
import Circle from "../shared/circle";

const className =
  "form-input focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded";

const Checkout = ({ setModalState }) => {
  const {
    auth: {
      user: { _id: uid },
    },
    mentor: { mentor },
  } = useSelector((state) => state);

  const { _id, title, category, about, thumbnail, description, price, status } =
    mentor || {};
  const { structures, purposes, lecturers } = description || {};
  const [createTransaction, { data, isLoading, isSuccess }] =
    useCreateTransactionMutation();

  const [token, setToken] = useState("");
  const { data: transaction, isLoading: checking } =
    useCheckAllTransactionsQuery(token);

  useEffect(() => {
    if (!isLoading && isSuccess) setModalState("purchase");

    if (data && data?.success) {
      alert(data?.message);
    }

    // for displaying error
    if (data && !data?.success) {
      alert(data?.message || data?.error);
    }
    if (transaction && !transaction?.success) {
      alert(transaction?.message || transaction?.error);
    }
  }, [isLoading, isSuccess, setModalState, data, transaction]);

  function handleTransaction(event) {
    event.preventDefault();

    const transactionInfo = {
      user: uid,
      information: {
        mentor: _id,
        amount: price,
        token: event.target.transaction.value,
      },
    };

    createTransaction(transactionInfo);
  }

  return (
    <>
      <form className="flex flex-col gap-y-8" onSubmit={handleTransaction}>
        {/* thumbnail */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="thumbnail" className="flex justify-between">
            <span className="text-sm">Mentor Thumbnail (1280x720 PX)</span>
          </label>
          <Image
            src={thumbnail}
            width={200}
            height={113}
            alt="Preview"
            className="rounded shadow"
          />
        </div>

        {/* title */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="title" className="flex justify-between">
            <span className="text-sm">Mentor Title</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            className={`${className} w-full text-sm`}
          />
        </div>

        {/* about */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="about" className="flex justify-between">
            <span className="text-sm">Enter Mentor Short Description</span>
          </label>
          <textarea
            type="text"
            name="about"
            id="about"
            rows={5}
            value={about}
            className={`form-textarea focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded w-full text-sm`}
          />
        </div>

        <hr />

        {/* price */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="price" className="flex justify-between">
            <span className="text-sm">Enter Mentor Price (BDT)</span>
          </label>
          <input
            type="number"
            name="price"
            id="price"
            step="0.01"
            value={price}
            className={`${className} w-full text-sm`}
          />
        </div>

        {/* category */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="category" className="flex justify-between">
            <span className="text-sm">Select Mentor Category</span>
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            className={`${className} w-full text-sm`}
          />
        </div>

        {/* status */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="status" className="flex justify-between">
            <span className="text-sm">Select Mentor Status</span>
          </label>
          <input
            type="text"
            name="status"
            id="status"
            value={status}
            className={`${className} w-full text-sm`}
          />
        </div>

        <hr />

        {/* structure */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password" className="flex justify-between">
            <span className="text-sm">Select Mentor Structures</span>
          </label>

          <div className="w-full flex flex-col gap-2">
            <Disclosure title={"Mentorship's Structure"} points={structures} />
          </div>
        </div>

        {/* purpose */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password" className="flex justify-between">
            <span className="text-sm">Select Mentor Purposes</span>
          </label>

          <div className="w-full flex flex-col gap-2">
            <Disclosure title={"Mentorship's Purpose"} points={purposes} />
          </div>
        </div>

        {/* lecturer */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password" className="flex justify-between">
            <span className="text-sm">Select Mentor Lecturers</span>
          </label>

          <div className="w-full flex flex-col gap-2">
            <Disclosure title={"Instructors"} points={lecturers} />
          </div>
        </div>

        <hr />

        {/* transaction */}
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="transaction"
            className="flex justify-between items-center"
          >
            <span className="text-sm">
              TrxID (BKash) <span className="text-red-500">*</span>
            </span>
            <span className="flex items-center gap-x-2">
              {checking ? (
                <span className="text-gray-500 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 animate-spin"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 01.615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 00-1.06 1.061l2.999 3a.75.75 0 001.06 0l3.001-3a.75.75 0 10-1.06-1.06l-1.748 1.747a41.31 41.31 0 00-.264-3.386 2.18 2.18 0 00-1.97-1.913 41.512 41.512 0 00-7.477 0 2.18 2.18 0 00-1.969 1.913 41.16 41.16 0 00-.16 1.61.75.75 0 101.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 01.615-.597A40.012 40.012 0 0110 4.5zM5.281 9.22a.75.75 0 00-1.06 0l-3.001 3a.75.75 0 101.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 001.97 1.913 41.533 41.533 0 007.477 0 2.18 2.18 0 001.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 10-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 01-.615.597 40.013 40.013 0 01-7.208 0 .68.68 0 01-.615-.597 39.785 39.785 0 01-.25-3.15l1.689 1.69a.75.75 0 001.06-1.061l-2.999-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ) : token?.length === 0 ? (
                <span className="text-gray-500 text-xs">
                  Required
                </span>
              ) : transaction?.success ? (
                <span className="text-primary text-xs">
                  {transaction?.message}
                </span>
              ) : (
                <span className="text-red-500 text-xs">
                  {transaction?.message}
                </span>
              )}
            </span>
          </label>
          <input
            type="text"
            name="transaction"
            id="transaction"
            placeholder="i.e.: 5C424PC2WM"
            className={`${className} w-full text-sm`}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>

        {/* submit */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-full flex justify-center items-center text-sm"
          disabled={!transaction?.success}
        >
          {isLoading ? <Circle /> : "Purchase"}
        </button>
      </form>
    </>
  );
};

export default Checkout;
