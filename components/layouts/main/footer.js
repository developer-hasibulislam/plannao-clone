/**
 * Title: Write a program using JavaScript on Footer
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
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary shadow-2xl py-4">
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex md:flex-row md:justify-between items-center flex-col text-white">
          <span>All rights reserved &copy; {new Date().getFullYear()}</span>
          <span className="text-sm">
            Developed by{" "}
            <Link href="https://www.linkedin.com/in/devhasibulislam" className="text-secondary">
              @devhasibulislam
            </Link>{" "}
            & Designed by{" "}
            <Link href="https://www.linkedin.com/in/nipa-akter" className="text-secondary"> @nipaaa</Link>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
