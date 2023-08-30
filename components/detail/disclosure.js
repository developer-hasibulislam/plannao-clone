/**
 * Title: Write a program using JavaScript on Disclosure
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

const Disclosure = ({ title, points }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col gap-y-4">
      <div
        className="flex w-full justify-between rounded bg-primary/5 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-primary/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-primary transform"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <ol className="list-none flex flex-col gap-y-2">
          {points?.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-x-2 shadow-sm p-2 rounded"
            >
              <span className="rounded flex items-center justify-center bg-secondary text-black text-xs px-1.5 py-0.5">
                {index + 1}
              </span>
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default Disclosure;
