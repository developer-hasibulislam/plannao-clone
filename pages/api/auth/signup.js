  /**
 * Title: Write a program using JavaScript on Signup API
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

import { confirmSignup, signUpUser } from "@/controllers/auth.controller";
import upload from "@/middleware/upload.middleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        upload.single("avatar")(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          const result = await signUpUser(req);
          res.send(result);
        });
      } catch (error) {
        res.send({
          success: false,
          error: error.message,
        });
      }
      break;

    case "GET":
      try {
        if (req.query.token) {
          const result = await confirmSignup(req.query.token);

          if (result.success) {
            const protocol = req.headers["x-forwarded-proto"] || "http";
            const host = req.headers.host;
            const url = `${protocol}://${host}/auth/signin`;

            res.redirect(url);
          } else {
            res.send(result);
          }
        } else {
          res.send({
            success: false,
            error: "token not found",
          });
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
