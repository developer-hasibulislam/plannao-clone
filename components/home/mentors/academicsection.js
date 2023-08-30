/**
 * Title: Write a program using JavaScript on Academic Section
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

import Container from "@/components/shared/container";
import React from "react";
import Card from "../../shared/card";
import Circle from "@/components/shared/circle";
// import Slider from "./slider";

const AcademicSection = ({ mentors }) => {
  return (
    <section className="bg-white py-12">
      <Container>
        <h1 className="md:text-4xl text-2xl text-center font-semibold">
          <span className="text-primary">Academic</span> Section
        </h1>

        {/* <Slider mentors={mentors} /> */}
        <div className="py-8">
          {mentors?.length ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              {mentors?.slice(0, 4)?.map((mentor) => (
                <Card key={mentor._id} mentor={mentor} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <Circle />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AcademicSection;
