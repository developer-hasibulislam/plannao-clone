/**
 * Title: Write a program using JavaScript on Me
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

import { persistlogin } from "@/controllers/auth.controller";
import verify from "@/middleware/verify.middleware";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          const result = await persistlogin(req.user);
          res.send(result);
        });
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
        message: "Method not allowed",
      });
      break;
  }
}

/**
 * Problem Statement:
 * API resolved without sending a response
 * Problem Solution:
 * https://github.com/vercel/next.js/discussions/40270
 */
