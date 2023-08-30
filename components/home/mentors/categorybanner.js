/**
 * Title: Write a program using JavaScript on Categorybanner
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

import SearchFilter from "@/components/searchfilter/searchfilter";
import React from "react";

const CategoryBanner = () => {
  const assets = {
    circle: "/assets/category/bended_circle.svg",
    bag: "/assets/category/bag.svg",
    book: "/assets/category/book.svg",
    hat: "/assets/category/hat.svg",
    paper: "/assets/category/paper.svg",
    triangle: "/assets/category/triangle.svg",
  };

  const style = {
    backgroundImage: `url(${assets.circle}), url(${assets.bag}), url(${assets.book}), url(${assets.hat}), url(${assets.paper}), url(${assets.triangle})`,
    backgroundSize: "auto",
    backgroundPosition:
      "center center, 80% 20%, top center, 90% 90%, 10% 10%, 10% 90%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section className="w-full">
        <div className="text-center bg-primary py-32 px-8" style={style}>
          <article className="flex flex-col gap-y-4 py-8">
            <h1 className="lg:text-4xl md:text-3xl text-2xl text-white leading-relaxed font-semibold">
              Take right decision Build bright future
            </h1>
            <p className="text-white">
              Our service brings you the best skill development with projects.
              <br />
              Which are aligned to your needs and courses that pave the way for
              your future success.
            </p>
          </article>
          <SearchFilter />
        </div>
      </section>
    </>
  );
};

export default CategoryBanner;
