/**
 * Title: Write a program using JavaScript on User Model
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
 * Date: 27, July 2023
 */

import { Schema, models, model } from "mongoose";
import { randomBytes } from "crypto";
import { genSaltSync, hashSync, compare } from "bcryptjs";
import connectDB from "@/utils/connectDB.util";

connectDB();

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },

    avatar: {
      type: String,
      default: "https://placehold.co/300x300.png",
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    whatsapp: {
      type: String,
      required: [true, "Please enter your WhatsApp number"],
      unique: true,
    },

    transaction: {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "trashed"],
      default: "inactive",
    },

    mentors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Mentor",
      },
    ],

    confirmationToken: String,
    confirmationTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,

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

// encrypt the password before saving
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const salt = genSaltSync(10);
    const hash = hashSync(this.password, salt);
    this.password = hash;
  } catch (error) {
    next(error);
  }
});

/* encrypted user account password */
userSchema.methods.encryptPassword = function (password) {
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  return hashedPassword;
};

// compare user given password with db stored password
userSchema.methods.comparePassword = async function (
  currentPassword,
  storedPassword
) {
  const isMatch = await compare(currentPassword, storedPassword);
  return isMatch;
};

// generate confirmation token with 1 hour expiration
userSchema.methods.generateConfirmationToken = function () {
  const token = randomBytes(16).toString("hex");

  const date = new Date();
  date.setHours(date.getHours() + 1);

  this.confirmationToken = token;
  this.confirmationTokenExpires = date;

  return token;
};

// generate reset password token with 1 hour expiration
userSchema.methods.generateResetPasswordToken = function () {
  const token = randomBytes(16).toString("hex");

  const date = new Date();
  date.setHours(date.getHours() + 1);

  this.resetPasswordToken = token;
  this.resetPasswordExpire = date;

  return token;
};

const User = models.User || model("User", userSchema);

export default User;
