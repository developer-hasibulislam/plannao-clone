/**
 * Title: Write a program using JavaScript on Index
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

import { createMentor, getAllMentors } from "@/controllers/mentor.controller";
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
    case "POST":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          authorization("admin")(req, res, async (err) => {
            if (err) {
              return res.send({
                success: false,
                error: err.message,
              });
            }

            upload.single("thumbnail")(req, res, async (err) => {
              if (err) {
                return res.send({
                  success: false,
                  error: err.message,
                });
              }

              const result = await createMentor(req);
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

    case "GET":
      try {
        const result = await getAllMentors(req);
        res.send(result);
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
