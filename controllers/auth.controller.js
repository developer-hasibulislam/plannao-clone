/**
 * Title: Write a program using JavaScript on User Controller
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

import User from "@/models/user.model";
import sendEmail from "@/utils/email.util";
import generateAccessToken from "@/utils/jwt.util";

function isExpire(mongoDBTime) {
  const mongoDBDate = new Date(mongoDBTime);
  const currentTime = new Date();
  const timeDifferenceInMs = currentTime - mongoDBDate;
  const oneHourInMs = 60 * 60 * 1000;

  return timeDifferenceInMs > oneHourInMs;
}

export async function signUpUser(req) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const url = `${protocol}://${host}`;

    const user = await User.create(req.body);
    const token = await user.generateConfirmationToken();

    user.avatar = req.file.path;

    await user.save({ validateBeforeSave: false });

    sendEmail(
      {
        email: user.email,
        name: user.name,
        expireIn: user.confirmationTokenExpires,
      },
      `${url}/api/auth/signup?token=${token}`,
      "Confirm Your Email"
    );

    return {
      success: true,
      message: "account confirmation link sent successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function confirmSignup(token) {
  try {
    const user = await User.findOne({ confirmationToken: token });

    if (!user) {
      return {
        success: false,
        message: "user not found",
      };
    }

    if (isExpire(user.confirmationTokenExpires)) {
      return {
        success: false,
        message: "token expired",
      };
    }

    user.status = "active";
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return {
      success: true,
      message: "user account activated successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function signInUser(userInfo) {
  try {
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return {
        success: false,
        message: "user not found",
      };
    } else {
      const isMatch = await user.comparePassword(
        userInfo.password,
        user.password
      );

      console.log(userInfo.password, user.password);

      if (isMatch) {
        if (user.status === "active") {
          const accessToken = generateAccessToken(user);

          return {
            success: true,
            accessToken,
          };
        } else {
          return {
            success: false,
            message: "account not active",
          };
        }
      } else {
        return {
          success: false,
          message: "incorrect password",
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function forgotUserPassword(req) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return {
        success: false,
        message: "user not found",
      };
    }

    const token = await user.generateResetPasswordToken();
    const hashedUserPassword = await user.encryptPassword(req.body.password);

    await user.save({ validateBeforeSave: false });

    await User.findOneAndUpdate(
      { email: req.body.email },
      { password: hashedUserPassword, status: "inactive" }
    );

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const url = `${protocol}://${host}/api/auth/forgotpassword?token=${token}`;

    sendEmail(
      {
        email: user.email,
        name: user.name,
        expireIn: user.resetPasswordExpire,
      },
      url,
      "Reset Your Password"
    );

    return {
      success: true,
      message: "password confirmation link sent successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function confirmForgotPassword(token) {
  try {
    const user = await User.findOne({ resetPasswordToken: token });

    if (!user) {
      return {
        success: false,
        message: "user not found",
      };
    }

    if (isExpire(user.resetPasswordExpire)) {
      return {
        success: false,
        message: "token expired",
      };
    }

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    user.status = "active";
    await user.save({ validateBeforeSave: false });

    return {
      success: true,
      message: "user password reset successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function persistlogin(user) {
  try {
    const result = await User.findOne({ email: user.email });

    if (!result) {
      return {
        success: false,
        message: "user not found",
      };
    }

    return {
      success: true,
      user: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
