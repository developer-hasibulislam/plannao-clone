/**
 * Title: Write a program using JavaScript on Transaction Model
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
 * Date: 01, August 2023
 */

import connectDB from "@/utils/connectDB.util";
import { Schema, models, model } from "mongoose";

connectDB();

const transactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    information: [
      {
        mentor: {
          type: Schema.Types.ObjectId,
          ref: "Mentor",
        },
        amount: {
          type: Number,
          required: true,
        },
        token: {
          type: String,
          required: true,
          uppercase: true,
          unique: true
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
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
  {
    timestamps: true,
  }
);

const Transaction =
  models.Transaction || model("Transaction", transactionSchema);

export default Transaction;
