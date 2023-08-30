/**
 * Title: Write a program using JavaScript on Mentor Model
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

import { Schema, models, model } from "mongoose";
import connectDB from "@/utils/connectDB.util";

connectDB();

const mentorSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter your title"],
    },

    category: {
      type: String,
      required: [true, "Please, choose a mentor category"],
      enum: ["academic", "professional", "jobrelated"],
    },

    about: {
      type: String,
      required: [true, "Please, provide a short description"],
      trim: true,
    },

    thumbnail: {
      type: String,
      default: "https://placehold.co/1280x720.png",
    },

    description: {
      structures: [
        {
          type: String,
          required: [true, "Please, provide mentor structure"],
          trim: true,
        },
      ],
      purposes: [
        {
          type: String,
          required: [true, "Please, provide mentor purpose"],
          trim: true,
        },
      ],
      lecturers: [
        {
          type: String,
          required: [true, "Please, provide mentor lecturer"],
          trim: true,
        },
      ],
    },

    price: {
      type: Number,
      required: [true, "Please, provide the amount"],
    },

    status: {
      type: String,
      enum: ["active", "inactive", "trashed"],
      default: "active",
    },

    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Mentor = models.Mentor || model("Mentor", mentorSchema);

export default Mentor;
