/**
 * Title: Write a program using JavaScript on Large
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
import { useRouter } from "next/router";
import React from "react";

const Large = () => {
  const router = useRouter(); // Use the useRouter hook

  const isActive = (href) => {
    return router.pathname === href ? "text-black" : "";
  };

  return (
    <aside className="">
      <section className="flex flex-col gap-y-2">
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
    </aside>
  );
};

export default Large;
