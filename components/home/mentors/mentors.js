/**
 * Title: Write a program using JavaScript on Mentors
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

import React from "react";
import AcademicSection from "./academicsection";
import ProfessionalSection from "./professionalsection";
import JobRelatedSection from "./jobrelatedsection";
import { useSelector } from "react-redux";

const Mentors = () => {
  const { mentors } = useSelector((state) => state.mentor);

  return (
    <>
      <AcademicSection mentors={mentors.academic} />
      <ProfessionalSection mentors={mentors.professional} />
      <JobRelatedSection mentors={mentors.jobrelated} />
    </>
  );
};

export default Mentors;
