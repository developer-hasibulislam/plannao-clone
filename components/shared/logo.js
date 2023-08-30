/**
 * Title: Write a program using JavaScript on Logo Shared
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
 * Date: 28, July 2023
 */

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        src="/assets/PlanNao Logo.png"
        alt="PlanNao Logo"
        height={32}
        width={150}
        placeholder="blur"
        blurDataURL="https://placehold.co/150x32.png"
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
    </>
  );
};

export default Logo;
