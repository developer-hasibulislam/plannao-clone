/**
 * Title: Write a program using JavaScript on Root
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

import Loading from "@/components/shared/loading";
import { usePersistQuery } from "@/features/auth/authApi";
import { addUser } from "@/features/auth/authSlice";
import { useGetMentorsQuery } from "@/features/mentor/mentorApi";
import { addMentors } from "@/features/mentor/mentorSlice";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

const Root = ({ children }) => {
  const { data: userData, isLoading: fetchingUserData } = usePersistQuery();
  const { data: mentorsData, isLoading: fetchingMentorsData } =
    useGetMentorsQuery();
  const mentors = useMemo(() => mentorsData?.mentors || [], [mentorsData]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !fetchingUserData &&
      userData?.user &&
      Object?.keys(userData?.user).length
    )
      dispatch(addUser(userData?.user));

    if (!fetchingMentorsData) {
      const academicMentors = mentors.filter(
        (mentor) => mentor.category === "academic"
      );
      const professionalMentors = mentors.filter(
        (mentor) => mentor.category === "professional"
      );
      const jobRelatedMentors = mentors.filter(
        (mentor) => mentor.category === "jobrelated"
      );

      dispatch(
        addMentors({
          academic: academicMentors,
          professional: professionalMentors,
          jobrelated: jobRelatedMentors,
        })
      );
    }
  }, [dispatch, userData, fetchingUserData, fetchingMentorsData, mentors]);

  if (fetchingUserData || fetchingMentorsData) return <Loading />;

  return <>{children}</>;
};

export default Root;
