/**
 * Title: Write a program using JavaScript on Solution
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
import { useRouter } from "next/router";

const Solution = () => {
  const router = useRouter();

  return (
    <section className="bg-slate-50">
      <Container>
        <div className="py-12 grid lg:grid-cols-2 items-center lg:gap-0 gap-y-6">
          <div className="flex flex-col gap-y-4 lg:order-2 order-2">
            <h1 className="md:text-4xl text-2xl font-semibold text-center">
              Digital{" "}
              <span className="text-primary">Consultancy & Mentorship</span> for
              your academic & professional career
            </h1>
            <div className="flex flex-col gap-y-4 items-center">
              <button
                className="bg-primary hover:bg-secondary text-white py-3 px-6 rounded-3xl flex justify-center items-center font-semibold capitalize"
                onClick={() => router.push("/category")}
              >
                What&apos;s your ambition?
              </button>
            </div>
          </div>
          <div className="order-1">
            <Image
              src={"/assets/home/solution/man1.svg"}
              alt="banner image"
              width={500}
              height={500}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Solution;
