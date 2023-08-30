/**
 * Title: Write a program using JavaScript on Email Util
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

import { createTransport } from "nodemailer";

function localTime(timestamp) {
  const date = new Date(timestamp);
  const regularTime = date.toLocaleString();

  return regularTime;
}

function sendEmail(user, url, subject) {
  const transporter = createTransport({
    service: process.env.APP_SERVICE,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_EMAIL,
    to: user?.email,
    subject: `PlanNao - ${subject}`,
    html: `
    <div style="font-family: Arial, sans-serif">
        <div
            style="
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
            "
        >
            <div style="text-align: center; margin-bottom: 30px">
                <img
                    src="https://res.cloudinary.com/dho0rpn5a/image/upload/v1687838048/samples/PlanNao_Logo_adf80j.png"
                    alt="Company Logo"
                    style="max-width: 150px"
                />
                <h1>${subject}</h1>
            </div>
            <div style="margin-bottom: 30px">
                <p style="text-align: center">
                    Dear <b>${user?.name}</b>, Please, click the button below:
                </p>
            </div>
            <a
                href=${url}
                style="
                    display: block;
                    width: fit-content;
                    margin: 0 auto;
                    padding: 10px 20px;
                    background-color: #298770;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 4px;
                "
            >
                <b>Accept Confirmation</b>
            </a>
            <div style="margin-top: 30px; text-align: center; color: #888">
                <p>Keep mind this link will expire within <b>${localTime(
                  user.expireIn
                )}</b></p>
                <p><span style="color: white; background-color: red;"><b>Having trouble?</b></span> Paste the URL <mark><b><i>${url}</i></b></mark> at <b>reply</b> to this <b>email</b></p>
                <p>If you did not <b>create an account</b> with us, please ignore this email.</p>
                <p>&copy; ${new Date().getFullYear()} PlanNao. All rights reserved.</p>
            </div>
        </div>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.name);
    } else {
      console.log("Email sent to: " + info.envelope.to[0]);
    }
  });
}

export default sendEmail;
