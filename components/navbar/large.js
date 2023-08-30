/**
 * Title: Write a program using JavaScript on Large Device
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
 * Date: 29, July 2023
 */

import Link from "next/link";
import React, { useState } from "react";
import OutsideClick from "../shared/outclick";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

const className = {
  container:
    "flex flex-col justify-start items-center gap-y-2 absolute top-full right-0 mt-3 h-fit w-48 bg-white text-black p-4 shadow shadow-secondary rounded-tl-3xl rounded-b-3xl",
  link: "hover:bg-secondary font-semibold px-3 py-2 hover:border-primary rounded-3xl hover:text-black",
  link1:
    "hover:bg-secondary font-semibold px-3 py-2 w-full text-center rounded-3xl",
};

const Large = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  const router = useRouter(); // Use the useRouter hook

  const isActive = (href) => {
    return router.pathname === href ? "bg-secondary text-black" : "";
  };

  return (
    <div className="flex items-center gap-x-4">
      {user?.role === "admin" && (
        <Link
          href="/dashboard"
          className={`${className.link} ${isActive("/dashboard")}`}
        >
          Dashboard
        </Link>
      )}
      {user.role === "user" && (
        <Link
          href="/auth/myprofile"
          className={`${className.link} ${isActive("/myprofile")}`}
        >
          My Profile
        </Link>
      )}
      <Link
        href="/workprocedure"
        className={`${className.link} ${isActive("/workprocedure")}`}
      >
        Work Procedure
      </Link>
      <span
        className="relative cursor-pointer font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${className.link} ${isActive("/ambition")}`}>
          Ambition
        </span>
        {isOpen && (
          <>
            <OutsideClick onOutsideClick={() => setIsOpen(false)}>
              <div className={className.container}>
                <Link
                  href="/category/academic"
                  className={`${className.link1} ${isActive(
                    "/category/academic"
                  )}`}
                >
                  Academic
                </Link>
                <Link
                  href="/category/professional"
                  className={`${className.link1} ${isActive(
                    "/category/professional"
                  )}`}
                >
                  Professional
                </Link>
                <Link
                  href="/category/jobrelated"
                  className={`${className.link1} ${isActive(
                    "/category/jobrelated"
                  )}`}
                >
                  Job Related
                </Link>
              </div>
            </OutsideClick>
          </>
        )}
      </span>
      {user && Object?.keys(user)?.length ? (
        <span
          className={`${className.link} cursor-pointer flex items-center gap-x-2 hover:text-black group`}
          onClick={() => {
            localStorage.removeItem("accessToken");
            window.location.reload();
          }}
        >
          <Image
            src={user?.avatar}
            alt="avatar"
            height={30}
            width={30}
            className="rounded-full border-2 border-secondary group-hover:border-primary"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : (
        <span
          className="relative cursor-pointer font-semibold"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          <span className={`${className.link} ${isActive("/auth")}`}>Auth</span>
          {isOpen1 && (
            <>
              <OutsideClick onOutsideClick={() => setIsOpen1(false)}>
                <div className={className.container}>
                  <Link
                    href="/auth/signin"
                    className={`${className.link1} ${isActive("/auth/signin")}`}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className={`${className.link1} ${isActive("/auth/signup")}`}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/auth/forgotpassword"
                    className={`${className.link1} ${isActive(
                      "/auth/forgotpassword"
                    )}`}
                  >
                    Forgot Password
                  </Link>
                </div>
              </OutsideClick>
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default Large;
