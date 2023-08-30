/**
 * Title: Write a program using JavaScript on Navbar
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

import React from "react";
import Logo from "@/components/shared/logo";
import Large from "@/components/navbar/large";
import Small from "@/components/navbar/small";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-2xl py-4">
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center gap-x-2 text-white">
            <div className="md:block hidden">
              <Large />
            </div>
            <div className="md:hidden block">
              <Small />
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
