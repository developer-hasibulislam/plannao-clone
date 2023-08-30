/**
 * Title: Write a program using JavaScript on MyProfile
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 30, August 2023
 */

import React, { useEffect, useMemo, useState } from "react";
import Meta from "@/components/shared/meta";
import Circle from "@/components/shared/circle";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useUpdateUserMutation } from "@/features/user/userApi";
import Main from "@/components/layouts/main/main";

const className =
  "form-input focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded";

const MyProfile = () => {
  const user = useSelector((state) => state?.auth?.user);

  const defaultValues = useMemo(
    () => ({
      name: user.name || "",
      email: user.email || "",
      avatar: user?.avatar || null,
      whatsapp: user?.whatsapp || "",
      role: user?.role || "",
      status: user?.status || "",
    }),
    [user]
  );

  const [previewImage, setPreviewImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const [updateUser, { data, isLoading }] = useUpdateUserMutation({
    refetchOnMountOrArgChanges: true,
  });
  const [isNewAvatarSelected, setIsNewAvatarSelected] = useState(false);
  const [previewImageType, setPreviewImageType] = useState("image/webp");

  useEffect(() => {
    reset(defaultValues);

    if (data && data?.success) {
      alert(data?.message);
    }

    // for displaying error
    if (data && !data?.success) {
      alert(data?.message || data?.error);
    }

    if (defaultValues.avatar) {
      setPreviewImage(defaultValues.avatar ? defaultValues.avatar : null);
    }
  }, [reset, data, defaultValues]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
    setIsNewAvatarSelected(true);

    if (file && file.type.startsWith("image/")) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 300 && img.height <= 300) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert("Failed, image height and width must be less than 300px.");
          setAvatar(null); // Clear the selected avatar if invalid dimensions
        }
      };
      img.src = URL.createObjectURL(file);

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
      alert("Please select an image file (jpg, jpeg, or png).");
      setAvatar(null); // Clear the selected avatar if not an image
    }
  };

  const handleDeletePreview = () => {
    setPreviewImage(null);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    const formDataWithFields = { ...data };

    Object.entries(formDataWithFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (isNewAvatarSelected) {
      formData.append("avatar", avatar);
      updateUser({
        id: user?._id,
        data: formData,
        filename: user.avatar.match(/\/v\d+\/(.+)/)[1].replace(/\.[^.]+$/, ""),
      });
    } else {
      updateUser({ id: user?._id, data: formData });
    }
  };

  return (
    <>
      <Meta title={"My Profile"} />
      <Main>
        <section className="md:h-[calc(100vh-136px)] flex justify-center items-center bg-primary/10 py-12">
          <div className="h-full lg:max-w-3xl md:max-w-xl mx-auto">
            {Object?.keys(user)?.length ? (
              <form
                className="flex flex-col gap-y-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* avatar */}
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="password" className="flex justify-between">
                    <span className="text-sm">Choose Your Avatar</span>
                    <span className="text-gray-500 text-xs">Modifiable</span>
                  </label>
                  <>
                    {!previewImage && (
                      <input
                        type="file"
                        name="avatar"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={handlePhotoChange}
                        className={`${className} w-full text-xs`}
                      />
                    )}
                    {previewImage ? (
                      <div className="w-[100px] h-[100px] relative">
                        <picture>
                          <source
                            srcSet={previewImage}
                            type={previewImageType}
                          />
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
                    <span className="text-sm">
                      Your Name
                    </span>
                    <span className="text-gray-500 text-xs">Modifiable</span>
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
                <div className="flex flex-col gap-y-1 w-full">
                  <label htmlFor="email" className="flex justify-between">
                    <span className="text-sm">Your Email Address</span>
                    <span className="text-gray-500 text-xs">Read Only</span>
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
                    readOnly
                  />
                </div>

                {/* whatsapp */}
                <div className="flex flex-col gap-y-1 w-full">
                  <label htmlFor="password" className="flex justify-between">
                    <span className="text-sm">Your WhatsApp Number</span>
                    <span className="text-gray-500 text-xs">Read Only</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="i.e.: +8801906315901"
                    id="whatsapp"
                    className={`${className} w-full text-sm`}
                    {...register("whatsapp")}
                    autoComplete="off"
                    readOnly
                  />
                </div>

                <div className="flex lg:flex-row lg:justify-between flex-col gap-4">
                  {/* role */}
                  <div className="flex flex-col gap-y-1 w-full">
                    <label htmlFor="role" className="flex justify-between">
                      <span className="text-sm">Your Role</span>
                      <span className="text-gray-500 text-xs">Read Only</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      placeholder="i.e.: Hasibul Islam"
                      id="role"
                      className={`${className} w-full text-sm`}
                      {...register("role")}
                      autoComplete="off"
                      required
                      readOnly
                    />
                  </div>

                  {/* status */}
                  <div className="flex flex-col gap-y-1 w-full">
                    <label htmlFor="status" className="flex justify-between">
                      <span className="text-sm">Your Status</span>
                      <span className="text-gray-500 text-xs">Read Only</span>
                    </label>
                    <input
                      type="text"
                      name="status"
                      placeholder="i.e.: Hasibul Islam"
                      id="status"
                      className={`${className} w-full text-sm`}
                      {...register("status")}
                      autoComplete="off"
                      required
                      readOnly
                    />
                  </div>
                </div>

                {/* submit */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white py-3 rounded flex justify-center items-center"
                >
                  {isLoading ? <Circle /> : "Update Profile"}
                </button>
              </form>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <Circle />
              </div>
            )}
          </div>
        </section>
      </Main>
    </>
  );
};

export default MyProfile;
