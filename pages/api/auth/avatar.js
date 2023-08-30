/**
 * Title: Write a program using JavaScript on Avatar
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

import fs from "fs";
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

          // const protocol = req.headers["x-forwarded-proto"] || "http";
          // const host = req.headers.host;
          // const url = `${protocol}://${host}`;
          // const file = `${url}/uploads/${req.file.filename}`;

          return res.send({
            success: true,
            message: "Avatar uploaded successfully",
            file: req.file,
          });
        });
      } catch (error) {
        res.send({
          success: false,
          error: error.message,
        });
      }
      break;

    case "DELETE":
      try {
        const filename = req.query.filename;

        fs.unlink(`./public/uploads/${filename}`, (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          return res.send({
            success: true,
            message: "Avatar deleted successfully",
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
