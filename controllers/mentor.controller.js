/**
 * Title: Write a program using JavaScript on Mentor Controller
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

import cloudinary from "cloudinary";
import Mentor from "@/models/mentor.model";

export async function createMentor(req) {
  try {
    const descriptionObject = JSON.parse(req.body.description);
    const mentorData = {
      ...req.body,
      description: descriptionObject,
    };

    const mentor = await Mentor.create(mentorData);

    mentor.thumbnail = req.file.path;

    await mentor.save({ validateBeforeSave: false });

    return {
      success: true,
      message: "mentor created successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getMentor(id) {
  try {
    const mentor = await Mentor.findById(id);

    if (!mentor) {
      return {
        success: false,
        error: "mentor not found",
      };
    } else {
      return {
        success: true,
        message: "mentor fetched successfully",
        mentor,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getAllMentors(req) {
  try {
    let mentors;

    if (req.query.page) {
      const { page } = req.query;
      const pageSize = 1;
      const ignorePageContent = (page - 1) * pageSize;

      mentors = await Mentor.find({
        status: { $in: ["active", "inactive"] },
      })
        .skip(page && ignorePageContent)
        .limit(page && pageSize)
        .sort({ updatedAt: -1 });
    } else {
      mentors = await Mentor.find({
        status: { $in: ["active", "inactive"] },
      }).sort({ updatedAt: -1 });
    }

    return {
      success: true,
      message: "mentors fetched successfully",
      mentors,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateMentor(req) {
  try {
    const { id, filename, status } = req.query;

    if (status) {
      await Mentor.findByIdAndUpdate(id, { status: status });

      return {
        success: true,
        message: "mentor trashed successfully",
      };
    }

    const descriptionObject = JSON.parse(req.body.description);
    const mentorData = {
      ...req.body,
      description: descriptionObject,
    };

    if (filename && req.file) {
      await cloudinary.uploader.destroy(filename);
      mentorData.thumbnail = req.file.path;
    }

    await Mentor.findByIdAndUpdate(id, mentorData);

    return {
      success: true,
      message: "mentor updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
