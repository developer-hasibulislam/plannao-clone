/**
 * Title: Write a program using JavaScript on [id]
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

import { updateUser } from "@/controllers/user.controller";
import authorization from "@/middleware/authorization.middleware";
import upload from "@/middleware/upload.middleware";
import verify from "@/middleware/verify.middleware";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case "PATCH":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          authorization("admin", "user")(req, res, async (err) => {
            if (err) {
              return res.send({
                success: false,
                error: err.message,
              });
            }

            upload.single("avatar")(req, res, async (err) => {
              if (err) {
                return res.send({
                  success: false,
                  error: err.message,
                });
              }

              const result = await updateUser(req);
              res.send(result);
            });
          });
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
        error: "Method not allowed",
      });
      break;
  }
}
