/**
 * Title: Write a program using JavaScript on Badge
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
 * Date: 31, July 2023
 */

import React from "react";

const Badge = ({ children, color }) => {
  let badgeColor = "";

  if (color === "purple") {
    badgeColor = "bg-purple-100 text-purple-800";
  } else if (color === "pink") {
    badgeColor = "bg-pink-100 text-pink-800";
  } else if (color === "indigo") {
    badgeColor = "bg-indigo-100 text-indigo-800";
  } else if (color === "fuchsia") {
    badgeColor = "bg-fuchsia-100 text-fuchsia-800";
  } else if (color === "rose") {
    badgeColor = "bg-rose-100 text-rose-800";
  } else if (color === "sky") {
    badgeColor = "bg-sky-100 text-sky-800";
  }

  return (
    <>
      <span
        className={`text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap ${badgeColor}`}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
