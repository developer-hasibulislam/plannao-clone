/**
 * Title: Write a program using JavaScript on Tab
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

import React, { useState } from "react";
import Disclosure from "./disclosure";

const Tab = ({ description }) => {
  const { structures, purposes, lecturers } = description || {};
  const [descriptionTab, setDescriptionTab] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between p-2 rounded bg-primary">
          <button
            className={`py-1.5 px-2.5 w-full text-center rounded text-sm font-medium leading-5 ${
              descriptionTab === 0 ? "bg-secondary text-black" : "text-white"
            }`}
            onClick={() => setDescriptionTab(0)}
          >
            Mentor&apos;s Overview
          </button>
          <button
            className={`py-1.5 px-2.5 w-full text-center rounded text-sm font-medium leading-5 ${
              descriptionTab === 1 ? "bg-secondary text-black" : "text-white"
            }`}
            onClick={() => setDescriptionTab(1)}
          >
            Instructors
          </button>
        </div>

        {descriptionTab === 0 && (
          <>
            <Disclosure title={"Mentorship's Structure"} points={structures} />
            <Disclosure title={"Mentorship's Purpose"} points={purposes} />
          </>
        )}

        {descriptionTab === 1 && (
          <>
            <Disclosure title={"Instructors"} points={lecturers} />
          </>
        )}
      </div>
    </>
  );
};

export default Tab;
