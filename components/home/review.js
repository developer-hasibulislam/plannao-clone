/**
 * Title: Write a program using JavaScript on Review
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

import React, { useEffect } from "react";
import Container from "../shared/container";
import Image from "next/image";

const Review = () => {
  const reviews = [
    {
      name: "Abrab Hossain",
      picture: "/assets/home/review/man.svg",
      opinion:
        "Wanted to study engineering since childhood. I was looking for a senior brother or sister who would give me proper guidance, but could not find anyone. I finally found Plan Nao and registered to take the service. Expert brothers gave such nice guidelines that I got answers to all my questions. Alhamdulillah I am now studying according to the guidelines.",
      qualification: "PhD, Sanford University",
      ratings: 5,
    },
    {
      name: "Abrab Hossain",
      picture: "/assets/home/review/man.svg",
      opinion:
        "Wanted to study engineering since childhood. I was looking for a senior brother or sister who would give me proper guidance, but could not find anyone. I finally found Plan Nao and registered to take the service.",
      qualification: "M.Phil, Sandiago University",
      ratings: 3,
    },
  ];

  return (
    <section className="bg-[#F0FCF7] py-12">
      <Container>
        <h1 className="md:text-4xl text-2xl text-center font-semibold">
          Decision from <span className="text-primary">Experts</span>
        </h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 py-8">
          {reviews.map((review, index) => (
            <div key={index} class="w-full py-8 relative">
              <div class="bg-white rounded-lg p-6 flex flex-col gap-y-4 border h-full">
                <p class="text-gray-700 text-sm">{review.opinion}</p>
                <div class="flex items-center mt-auto">
                  {[...Array(review.ratings).keys()]?.map((rating) => (
                    <Image
                      key={rating}
                      src={"/assets/home/review/star.svg"}
                      alt="rating"
                      height={20}
                      width={20}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 right-4 bg-white  rounded-lg md:w-1/2 w-3/4 p-4 border">
                <div class="flex items-center gap-x-4">
                  <Image
                    height={48}
                    width={48}
                    class="w-12 h-12 object-contain rounded-full shadow-2xl border border-secondary"
                    src={review.picture}
                    alt="User Avatar"
                  />
                  <div>
                    <p class="text-gray-800 font-semibold">{review.name}</p>
                    <p class="text-gray-600 text-xs">{review.qualification}</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1 left-4 flex">
                <Image
                  src={"/assets/home/review/quotation.svg"}
                  alt="quotation"
                  height={25}
                  width={25}
                />
                <Image
                  src={"/assets/home/review/quotation.svg"}
                  alt="quotation"
                  height={25}
                  width={25}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Review;
