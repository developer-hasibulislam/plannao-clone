/**
 * Title: Write a program using JavaScript on Sidebar
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

import Large from "@/components/sidebar/large";
import Small from "@/components/sidebar/small";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="lg:block hidden">
        <Large />
      </div>
      <div className="lg:hidden block relative">
        <Small />
      </div>
    </>
  );
};

export default Sidebar;
