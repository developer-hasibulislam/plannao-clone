/**
 * Title: Write a program using JavaScript on Transaction
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

import {
  createTransaction,
  getAllTransactions,
} from "@/controllers/transaction.controller";
import authorization from "@/middleware/authorization.middleware";
import verify from "@/middleware/verify.middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const result = await createTransaction(req);
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

            const result = await getAllTransactions(req);
            res.send(result);
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
