/**
 * Title: Write a program using JavaScript on Small Device
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

const className = {
  link: "hover:bg-secondary font-semibold px-3 py-2 hover:border-primary rounded-3xl w-full text-center",
  link1:
    "hover:bg-secondary hover:text-white font-semibold px-3 py-2 w-full text-center rounded-3xl",
  container:
    "flex flex-col justify-start items-center gap-y-2 absolute top-full right-0 h-fit w-48 bg-white text-black p-4 shadow shadow-secondary rounded-tl-3xl rounded-b-3xl z-50",
  container1:
    "flex flex-col justify-start items-center gap-y-2 absolute top-full right-0 mt-1 h-fit w-48 bg-white text-black p-4 shadow shadow-primary rounded-tl-3xl rounded-b-3xl z-50",
};

const Small = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  const router = useRouter(); // Use the useRouter hook

  const isActive = (href) => {
    return router.pathname === href ? "bg-secondary text-white" : "";
  };

  return (
    <section className="relative">
      <Hamburger onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <>
          <div className="h-screen w-screen fixed bg-black/50 top-0 left-0 z-10"></div>
          <OutsideClick onOutsideClick={() => setIsOpen(false)}>
            <div className={className.container}>
              {user?.role === "admin" ? (
                <Link
                  href="/dashboard"
                  className={`${className.link} ${isActive("/dashboard")}`}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/auth/myprofile"
                  className={`${className.link} ${isActive("/auth/myprofile")}`}
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
                className={
                  "relative cursor-pointer font-semibold " + className.link
                }
                onClick={() => setIsOpen1(!isOpen1)}
              >
                <span className={`${className.link} ${isActive("/ambition")}`}>
                  Ambition
                </span>
                {isOpen1 && (
                  <>
                    <OutsideClick onOutsideClick={() => setIsOpen1(false)}>
                      <div className={className.container1}>
                        <Link
                          href="/category/academic"
                          className={`${className.link} ${isActive(
                            "/category/academic"
                          )}`}
                        >
                          Academic
                        </Link>
                        <Link
                          href="/category/professional"
                          className={`${className.link} ${isActive(
                            "/category/professional"
                          )}`}
                        >
                          Professional
                        </Link>
                        <Link
                          href="/category/jobrelated"
                          className={`${className.link} ${isActive(
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
                  className={`${className.link} cursor-pointer`}
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    window.location.reload();
                  }}
                >
                  Logout
                </span>
              ) : (
                <span
                  className={
                    "relative cursor-pointer font-semibold " + className.link
                  }
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  <span className={`${className.link} ${isActive("/auth")}`}>
                    Auth
                  </span>
                  {isOpen2 && (
                    <>
                      <OutsideClick onOutsideClick={() => setIsOpen2(false)}>
                        <div className={className.container1}>
                          <Link
                            href="/auth/signin"
                            className={`${className.link1} ${isActive(
                              "/auth/signin"
                            )}`}
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/auth/signup"
                            className={`${className.link1} ${isActive(
                              "/auth/signup"
                            )}`}
                          >
                            Sign Up
                          </Link>
                          <Link
                            href="/auth/forgotpassword"
                            className={`${className.link1} ${isActive(
                              "/auth/forgotpassword"
                            )}`}
                          >
                            Reset Password
                          </Link>
                        </div>
                      </OutsideClick>
                    </>
                  )}
                </span>
              )}
            </div>
          </OutsideClick>
        </>
      )}
    </section>
  );
};

const Hamburger = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Small;
