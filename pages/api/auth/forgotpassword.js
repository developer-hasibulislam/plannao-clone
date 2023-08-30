/**
 * Title: Write a program using JavaScript on Forgot Password API
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

import {
  confirmForgotPassword,
  forgotUserPassword,
} from "@/controllers/auth.controller";

export default async function handler(req, res) {
  switch (req.method) {
    case "PATCH":
      try {
        const result = await forgotUserPassword(req);
        res.send(result);
      } catch (error) {
        res.send({
          success: false,
          error: error.message,
        });
      }
      break;

    case "GET":
      try {
        const result = await confirmForgotPassword(req.query.token);

        if (result.success) {
          const protocol = req.headers["x-forwarded-proto"] || "http";
          const host = req.headers.host;
          const url = `${protocol}://${host}/auth/signin`;

          res.redirect(url);
        } else {
          res.send(result);
        }
      } catch (error) {
        res.send({
          success: false,
          error: error.message,
        });
      }
      break;

    default:
      res.send({
        success: false,
        error: "Method not allowed",
      });
      break;
  }
}
