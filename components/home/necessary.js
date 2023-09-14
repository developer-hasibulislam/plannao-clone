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

import React from "react";
import Container from "../shared/container";
import Image from "next/image";

const Necessary = () => {
  const necessaries = [
    {
      name: "Take decision from industry expert",
      picture: "/assets/home/necessary/package-1.svg",
    },
    {
      name: "Get help while preparing roadmap",
      picture: "/assets/home/necessary/package-2.svg",
    },
    {
      name: "Provide help while choosing materials",
      picture: "/assets/home/necessary/package-3.svg",
    },
    {
      name: "Face end-to-end mentorship",
      picture: "/assets/home/necessary/package-4.svg",
    },
  ];

  return (
    <section className="bg-slate-50 py-12">
      <Container>
        <h1 className="md:text-4xl text-2xl text-center font-semibold">
          Why Our Mentors <span className="text-primary">Necessary</span>
        </h1>

        <div className="py-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-8">
            {necessaries.map((necessary, index) => (
              <Card key={index} necessary={necessary} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

function Card({ necessary }) {
  return (
    <div class="w-full py-8 flex flex-col gap-y-4 items-center border border-secondary rounded-lg bg-white">
      <Image
        src={necessary.picture}
        alt={necessary.name}
        height={100}
        width={100}
        className="border border-secondary rounded-full p-0.5"
      />
      <p className="text-gray-700">{necessary.name}</p>
    </div>
  );
}

export default Necessary;
