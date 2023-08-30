/**
 * Title: Write a program using JavaScript on Extract Filename Util
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

export default function extractFilename(url) {
  const uploadsIndex = url.indexOf("uploads/");

  if (uploadsIndex !== -1) {
    return url.substring(uploadsIndex + 8);
  } else {
    return null;
  }
}

/**
 * What it does?
 * From "http://localhost:3000/uploads/1690511790023_sadia_khanum.jpg"
 * Extract "1690511790023_sadia_khanum.jpg"
 */
