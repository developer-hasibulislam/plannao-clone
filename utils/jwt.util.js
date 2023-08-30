/**
 * Title: Write a program using JavaScript on JWT Util
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

import jwt from "jsonwebtoken";

export default function generateAccessToken({ name, email, role }) {
  const token = jwt.sign(
    {
      name,
      email,
      role,
    },
    process.env.TOKEN_SECRET
  );

  return token;
}
