/**
 * Title: Write a program using JavaScript on Forgot Password
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

import Circle from "@/components/shared/circle";
import Logo from "@/components/shared/logo";
import Meta from "@/components/shared/meta";
import { useForgotpasswordMutation } from "@/features/auth/authApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const className =
  "form-input focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded";

const Forgotpassword = () => {
  const { register, handleSubmit, reset } = useForm();
  const [resetpassword, { data, isLoading }] = useForgotpasswordMutation();

  useEffect(() => {
    if (data && data?.success) {
      alert(data?.message);
    }

    // for displaying error
    if (data && !data?.success) {
      alert(data?.message || data?.error);
    }
  }, [data]);

  const onSubmit = (data) => {
    resetpassword({ email: data.email, password: data.password });
    reset();
  };

  return (
    <>
      <Meta title={"Reset Password"} />
      <main className="w-screen h-screen flex justify-center items-center bg-primary/10 md:px-0 px-4">
        <section className="bg-white shadow p-8 rounded-3xl md:w-96 w-full flex flex-col gap-y-8">
          <div className="flex justify-center">
            <Logo />
          </div>
          <form
            className="flex flex-col gap-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* email */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="flex justify-between">
                <span className="text-sm">Enter Email Address</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="i.e.: developer.hasibulislam@gmail.com"
                id="email"
                className={`${className} w-full text-sm`}
                {...register("email")}
                autoComplete="off"
                required
              />
            </div>

            {/* password */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="flex justify-between">
                <span className="text-sm">Enter Your Password</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="i.e.: Hasib@123"
                id="password"
                className={`${className} w-full text-sm`}
                {...register("password")}
                autoComplete="off"
                required
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-3xl flex justify-center items-center"
            >
              {isLoading ? <Circle /> : "Reset Password"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Forgotpassword;
