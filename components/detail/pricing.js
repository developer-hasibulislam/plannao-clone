/**
 * Title: Write a program using JavaScript on Pricing
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

import React, { useState } from "react";
import Modal from "../shared/modal";
import { useDispatch, useSelector } from "react-redux";
import { addMentor } from "@/features/mentor/mentorSlice";
import Checkout from "./checkout";
import Purchase from "./purchase";
import { useRouter } from "next/router";

const Pricing = ({ mentor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState("checkout");
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  const facilities = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
        </svg>
      ),
      title: "Program Related Video Lectures",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5.75a.75.75 0 010 1.5H8.5v4.275c0 .296.144.455.26.499a3.5 3.5 0 004.402-1.77h-.412a.75.75 0 010-1.5h.537c.462 0 .887.21 1.156.556.278.355.383.852.184 1.337a5.001 5.001 0 01-6.4 2.78C7.376 15.353 7 14.512 7 13.774V9.5H5.75a.75.75 0 010-1.5H7V6.56l-.22.22a.75.75 0 11-1.06-1.06l.22-.22z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Lifetime Mentorship Support",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Overtime Duration",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
          <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
          <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
        </svg>
      ),
      title: "Provide Necessary Accessories",
    },
  ];

  return (
    <div className="lg:col-span-5 col-span-12 lg:px-0 px-4 w-full">
      <div className="rounded-lg h-fit lg:border border-secondary lg:p-5 w-full flex flex-col gap-y-8">
        <article className="flex flex-col gap-y-2">
          <h2 className="text-xl font-bold">Career Placement Initiative</h2>
          <p className="text-gray-700">
            You can join and enroll at any time with ease in any batch now.
          </p>
        </article>
        <div className="bg-primary/100 rounded-lg text-white p-5">
          <div className="flex flex-col gap-y-3">
            {facilities?.map((facility, index) => (
              <div key={index} className="flex flex-row gap-x-3">
                {facility.icon}
                <p>{facility?.title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center bg-[#32DB8E] text-[#4D876E] my-5 px-4 py-3 rounded-md font-medium">
            <p className="text-black">Price of Mentorship</p>
            <p className="text-black">
              <span className="bg-green-100 text-green-800 text-base px-2.5 py-0.5 rounded-md border border-green-400 whitespace-nowrap flex gap-x-1 items-center">
                <span className="text-xs font-medium">৳</span>{" "}
                <span className="font-bold">{mentor?.price}</span>
              </span>
            </p>
          </div>
        </div>
        <button
          className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-md flex justify-center items-center disabled:bg-primary/50"
          onClick={() => {
            if (!Object.keys(user).length) {
              router.push("/auth/signin");
            } else {
              setIsOpen(!isOpen);
              dispatch(addMentor(mentor));
            }
          }}
          disabled={mentor?.status === "inactive" || user?.role === "admin"}
        >
          Order Now
        </button>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {modalState === "checkout" && (
            <Checkout setModalState={setModalState} />
          )}
          {modalState === "purchase" && <Purchase />}
        </Modal>
      )}
    </div>
  );
};

export default Pricing;
