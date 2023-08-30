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
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Disclosure from "./disclosure";
import { useCreateTransactionMutation } from "@/features/transaction/transactionApi";
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
  const [createTransaction, { isLoading, isSuccess }] =
    useCreateTransactionMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) setModalState("purchase");
  }, [isLoading, isSuccess, setModalState]);

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
          <label htmlFor="transaction" className="flex justify-between">
            <span className="text-sm">
              TrxID (BKash) <span className="text-red-500">*</span>
            </span>
            <span className="text-gray-500 text-xs">Required</span>
          </label>
          <input
            type="text"
            name="transaction"
            id="transaction"
            placeholder="i.e.: 5C424PC2WM"
            className={`${className} w-full text-sm`}
            required
          />
        </div>

        {/* submit */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-full flex justify-center items-center text-sm"
        >
          {isLoading ? <Circle /> : "Purchase"}
        </button>
      </form>
    </>
  );
};

export default Checkout;
