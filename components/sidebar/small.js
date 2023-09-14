/**
 * Title: Write a program using JavaScript on Small
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

import React, { useState } from "react";
import OutsideClick from "../shared/outclick";
import Link from "next/link";
import { useRouter } from "next/router";

const Small = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Use the useRouter hook

  const isActive = (href) => {
    return router.pathname === href
      ? "border-b-2 border-b-secondary w-fit whitespace-nowrap"
      : "whitespace-nowrap w-full";
  };

  return (
    <aside>
      <Sidebar onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <>
          <div className="h-screen w-screen fixed bg-black/50 top-0 left-0 z-0"></div>
          <OutsideClick onOutsideClick={() => setIsOpen(false)}>
            <section className="flex flex-col gap-y-2 w-[30vh] h-screen p-4 bg-primary absolute -top-full -left-full">
              <Link
                href="/dashboard/addmentor"
                className={isActive("/dashboard/addmentor")}
              >
                Add Mentor
              </Link>
              {/* <Link href="/dashboard/listmentors" className={isActive("/dashboard/listmentors")}>List Mentors</Link> */}
              <Link
                href="/dashboard/academicmentors"
                className={isActive("/dashboard/academicmentors")}
              >
                Academic Mentors
              </Link>
              <Link
                href="/dashboard/professionalmentors"
                className={isActive("/dashboard/professionalmentors")}
              >
                Professional Mentors
              </Link>
              <Link
                href="/dashboard/jobrelatedmentors"
                className={isActive("/dashboard/jobrelatedmentors")}
              >
                Job Related Mentors
              </Link>
              <Link
                href="/dashboard/listusers"
                className={isActive("/dashboard/listusers")}
              >
                List Users
              </Link>
              <Link
                href="/dashboard/listbuyers"
                className={isActive("/dashboard/listbuyers")}
              >
                List Buyers
              </Link>
              <Link href="/">Go to Home</Link>
            </section>
          </OutsideClick>
        </>
      )}
    </aside>
  );
};

const Sidebar = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-6 h-6 text-white z-10"
    >
      <path
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Small;
