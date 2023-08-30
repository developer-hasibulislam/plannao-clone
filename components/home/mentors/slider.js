/**
 * Title: Write a program using JavaScript on Slider
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

import React, { useEffect } from "react";
import Card from "../../shared/card";
import Glide from "@glidejs/glide";

const Slider = ({ mentors }) => {
  useEffect(() => {
    const options = {
      type: "carousel",
      perView: 4,
      breakpoints: {
        820: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        480: {
          perView: 1,
        },
      },
    };

    new Glide(".glide", options).mount();
  }, []);

  return (
    <div className="glide py-12">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides flex gap-6">
          {mentors.map((mentor) => (
            <li className="glide__slide" key={mentor._id}>
              <Card mentor={mentor} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
