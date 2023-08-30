/**
 * Title: Write a program using JavaScript on Loading
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
 * Date: 30, July 2023
 */

import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-primary/10">
      <Image src="/assets/Spinner.png" alt="Loading" width={50} height={50} className="animate-spin" />
    </section>
  );
};

export default Loading;
