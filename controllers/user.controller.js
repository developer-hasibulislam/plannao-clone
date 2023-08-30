/**
 * Title: Write a program using JavaScript on User Controller
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

import User from "@/models/user.model";
import cloudinary from "cloudinary";

export async function getAllUsers(req) {
  try {
    let users;
    if (req.query.page) {
      const { page } = req.query;
      const pageSize = 1;
      const ignorePageContent = (page - 1) * pageSize;

      users = await User.find({
        status: { $in: ["active", "inactive"] },
      })
        .skip(page && ignorePageContent)
        .limit(page && pageSize)
        .sort({ updatedAt: -1 });
    } else {
      users = await User.find({ status: { $in: ["active", "inactive"] } }).sort(
        { updatedAt: -1 }
      );
    }

    return {
      success: true,
      message: "users fetched successfully",
      users,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateUser(req) {
  try {
    const { id, status, filename } = req.query;

    if (status) {
      await User.findByIdAndUpdate(id, { status: status });

      return {
        success: true,
        message: "user trashed successfully",
      };
    }

    const userData = { ...req.body };

    if (filename && req.file) {
      await cloudinary.uploader.destroy(filename);
      userData.avatar = req.file.path;
    }

    await User.findByIdAndUpdate(id, userData);

    return {
      success: true,
      message: "user updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
