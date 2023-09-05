/**
 * Title: Write a program using JavaScript on Transaction Controller
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

import Mentor from "@/models/mentor.model";
import Transaction from "@/models/transaction.model";
import User from "@/models/user.model";

export async function createTransaction(req) {
  try {
    const filter = { user: req.body.user };
    const update = { $push: { users: req.body.user } };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const transactionUpdate = {
      $push: { information: req.body.information },
    };

    const transaction = await Transaction.findOneAndUpdate(
      filter,
      transactionUpdate,
      options
    );

    await Mentor.updateOne({ _id: req.body.information.mentor }, update);
    await User.updateOne(
      { _id: req.body.user },
      {
        $push: { mentors: req.body.information.mentor },
        $set: { transaction: transaction._id },
      }
    );

    return {
      success: true,
      message: "transaction created successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getAllTransactions(req) {
  try {
    let transactions;

    if (req.query.page) {
      const { page } = req.query;
      const pageSize = 1;
      const ignorePageContent = (page - 1) * pageSize;

      transactions = await Transaction.find()
        .populate([{ path: "user" }, { path: "information.mentor" }])
        .skip(page && ignorePageContent)
        .limit(page && pageSize)
        .sort({ updatedAt: -1 });
    } else {
      transactions = await Transaction.find()
        .populate([{ path: "user" }, { path: "information.mentor" }])
        .sort({ updatedAt: -1 });
    }

    return {
      success: true,
      message: "transactions fetched successfully",
      transactions,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function checkAllTransactions(req) {
  try {
    const transaction = await Transaction.findOne({
      "information.token": req.query.token,
    });

    if (!transaction) {
      return {
        success: true,
        message: "All Right!",
      };
    } else {
      return {
        success: false,
        message: "Try Again!",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
