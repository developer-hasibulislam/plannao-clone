/**
 * Title: Write a program using JavaScript on MentorSlice
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mentor: {},
  mentors: {},
};

const mentorSlice = createSlice({
  name: "mentor",
  initialState,
  reducers: {
    addMentor: (state, { payload }) => {
      state.mentor = payload;
    },
    addMentors: (state, { payload }) => {
      state.mentors = payload;
    },
  },
});

export const { addMentor, addMentors } = mentorSlice.actions;
export default mentorSlice.reducer;
