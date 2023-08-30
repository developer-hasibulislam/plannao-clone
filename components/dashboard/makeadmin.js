/**
 * Title: Write a program using JavaScript on Make Admin
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 30, August 2023
 */

import React, { useEffect } from "react";
import Circle from "../shared/circle";
import { useUpdateUserMutation } from "@/features/user/userApi";

const MakeAdmin = ({ id }) => {
  const [updateUser, { data, isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (data && data?.success) {
      alert(data?.message);
    }

    // for displaying error
    if (data && !data?.success) {
      alert(data?.message || data?.error);
    }
  }, [data]);

  return (
    <span
      className="bg-green-500 hover:bg-green-500/70 text-white rounded cursor-pointer p-1"
      onClick={() => {
        const formData = new FormData();
        formData.append("role", "admin");

        updateUser({ id, data: formData });
      }}
    >
      {isLoading ? (
        <Circle />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
        </svg>
      )}
    </span>
  );
};

export default MakeAdmin;
