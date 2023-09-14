/**
 * Title: Write a program using JavaScript on Card
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

import Badge from "@/components/dashboard/badge";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Card = ({ mentor }) => {
  const router = useRouter();
  const { title, thumbnail, price, about, status } = mentor || {};

  return (
    <div className="flex flex-col justify-between gap-y-4 border border-transparent rounded-lg p-2">
      <div className="flex flex-col gap-y-4 relative">
        <Image
          src={thumbnail}
          alt={title}
          height={200}
          width={480}
          class="rounded-lg border border-secondary"
        />
        <h2 className="text-lg font-bold tracking-tight text-gray-900 line-clamp-2">
          {title}
        </h2>

        <span className="absolute top-2 right-2">
          {status === "active" && <Badge color="fuchsia">Available</Badge>}
          {status === "inactive" && <Badge color="rose">Coming Soon</Badge>}
        </span>
      </div>
      <article className="flex flex-col gap-y-4">
        <p className="font-normal text-gray-700 text-sm line-clamp-3">
          {about}
        </p>
        <p className="flex flex-wrap justify-between items-center gap-y-4">
          <Badge color="sky" className="flex gap-x-1 items-center">
            ৳ <span className="font-bold">{mentor?.price}</span>
          </Badge>
          <button
            class="inline-flex justify-between items-center px-2 py-2 text-sm font-medium text-center text-white bg-primary rounded-full hover:text-black hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary disabled:bg-primary/50"
            onClick={() =>
              router.push(
                `/category/${mentor._id}?mentor_title=${title
                  .replace(/ /g, "-")
                  .toLowerCase()}`
              )
            }
            disabled={status === "inactive"}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </p>
      </article>
    </div>
  );
};

export default Card;
