/**
 * Title: Write a program using JavaScript on Verify Middleware
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
 * Date: 28, July 2023
 */

import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async function verify(req, res, next) {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.send({
        acknowledgement: false,
        message: "Unauthorized, No token found",
      });
    } else {
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.TOKEN_SECRET
      );
      req.user = decoded;
    }

    next();
  } catch (error) {
    return res.send({
      acknowledgement: false,
      message: "Unauthorized, Invalid token",
    });
  }
}
