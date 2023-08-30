/**
 * Title: Write a program using JavaScript on Professional
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

import CategoryBanner from "@/components/home/mentors/categorybanner";
import Main from "@/components/layouts/main/main";
import Card from "@/components/shared/card";
import Circle from "@/components/shared/circle";
import Container from "@/components/shared/container";
import Meta from "@/components/shared/meta";
import React from "react";
import { useSelector } from "react-redux";

const JobRelated = () => {
  const { jobrelated } = useSelector((state) => state.mentor.mentors);
  const mentors = jobrelated || [];

  return (
    <>
      <Main>
        <Meta title="Academic" />
        <CategoryBanner />

        <section className="py-12">
          <Container>
            {mentors?.length ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {mentors?.map((mentor) => (
                  <Card key={mentor._id} mentor={mentor} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center">
                <Circle />
              </div>
            )}
          </Container>
        </section>
      </Main>
    </>
  );
};

export default JobRelated;
