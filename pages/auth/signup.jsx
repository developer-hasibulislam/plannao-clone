/**
 * Title: Write a program using JavaScript on Signup Auth
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
import { useSignupMutation } from "@/features/auth/authApi";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const className =
  "form-input focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded";

const Signup = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [signup, { data, isLoading, ...rest }] = useSignupMutation();
  const [previewImageType, setPreviewImageType] = useState("image/webp");

  useEffect(() => {
    if (data && data?.success) {
      alert(data?.message || data?.error);
    }

    // for displaying error
    if (data && !data?.success) {
      alert(data?.message || data?.error);
    }
  }, [data]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);

    if (file && file.type.startsWith("image/")) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 300 && img.height <= 300) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result);
          };
          reader.readAsDataURL(file);

          // Determine the image type for <source>
          let imageType = "image/webp";
          if (file.type === "image/jpeg" || file.type === "image/jpg") {
            imageType = "image/jpeg";
          } else if (file.type === "image/png") {
            imageType = "image/png";
          }

          // Update the source type for the preview image
          setPreviewImageType(imageType);
        } else {
          alert("Failed, image height and width must be less than 300px.");
        }
      };
      img.src = URL.createObjectURL(file);
    } else {
      alert("Please select an image file (jpg, jpeg, or png).");
    }
  };

  const handleDeletePreview = () => {
    setPreviewImage(null);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\+88\d{11}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const onSubmit = (data) => {
    if (!isValidPhoneNumber(data.whatsapp)) {
      alert(
        "Please enter a valid phone number (starting with +88 and 11 digits)."
      );
      return;
    }

    if (!data.name || !data.email || !data.password || !data.whatsapp) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();

    formData.append("avatar", avatar);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("whatsapp", data.whatsapp);

    signup(formData);
    setPreviewImage(null);
    reset();
  };

  return (
    <>
      <Meta title={"Signup"} />
      <main className="w-screen h-screen flex justify-center items-center bg-primary/10 md:px-0 px-4">
        <section className="bg-white shadow p-8 rounded-3xl md:w-96 w-full flex flex-col gap-y-8">
          <div className="flex justify-center">
            <Logo />
          </div>
          <form
            className="flex flex-col gap-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* avatar */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="avatar" className="flex justify-between">
                <span className="text-sm">Choose Your Avatar</span>
                <span className="text-red-500">*</span>
              </label>
              <>
                {!previewImage && (
                  <input
                    type="file"
                    name="avatar"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={handlePhotoChange}
                    className={`${className} w-full text-xs`}
                    required
                  />
                )}
                {previewImage ? (
                  <div className="w-[100px] h-[100px] relative">
                    <picture>
                      <source srcSet={previewImage} type={previewImageType} />
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-[100px] h-[100px] object-contain rounded shadow"
                      />
                    </picture>

                    <button
                      onClick={handleDeletePreview}
                      className="p-1 bg-red-500 text-white rounded absolute top-2 left-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ) : null}
              </>
            </div>

            {/* full name */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="flex justify-between">
                <span className="text-sm">Enter Full Name</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="i.e.: Hasibul Islam"
                id="name"
                className={`${className} w-full text-sm`}
                {...register("name")}
                autoComplete="off"
                required
              />
            </div>

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

            {/* whatsapp */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="whatsapp" className="flex justify-between">
                <span className="text-sm">Enter WhatsApp Number</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="i.e.: +8801906315901"
                id="whatsapp"
                className={`${className} w-full text-sm`}
                {...register("whatsapp")}
                autoComplete="off"
                required
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              className={`w-full bg-primary hover:bg-secondary text-white py-3 rounded-3xl flex justify-center items-center ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? <Circle /> : "Sign Up"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Signup;
