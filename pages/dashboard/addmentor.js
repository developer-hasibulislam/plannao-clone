/**
 * Title: Write a program using JavaScript on Addmentor
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

import Panel from "@/components/layouts/dashboard/panel";
import Circle from "@/components/shared/circle";
import Meta from "@/components/shared/meta";
import { useCreateMentorMutation } from "@/features/mentor/mentorApi";
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const className =
  "form-input focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded";

const AddMentor = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      thumbnail: null,
      title: "",
      about: "",
      price: 0,
      category: "academic",
      status: "active",
      structures: [{ structure: "" }],
      purposes: [{ purpose: "" }],
      lecturers: [{ lecturer: "" }],
    },
  });
  const [createMentor, { data, isLoading }] = useCreateMentorMutation();
  const [previewImageType, setPreviewImageType] = useState("image/webp");

  useEffect(() => {
    if (data && data?.success) {
      alert(data?.message);
    }

    // for displaying error
    if (data && !data?.success) {
      alert(data?.message || data?.error);
    }
  }, [data]);

  const {
    fields: structureFields,
    append: structureAppend,
    remove: structureRemove,
  } = useFieldArray({
    control,
    name: "structures",
  });

  const {
    fields: purposeFields,
    append: purposeAppend,
    remove: purposeRemove,
  } = useFieldArray({
    control,
    name: "purposes",
  });

  const {
    fields: lecturerFields,
    append: lecturerAppend,
    remove: lecturerRemove,
  } = useFieldArray({
    control,
    name: "lecturers",
  });

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setThumbnail(file);

    if (file && file.type.startsWith("image/")) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 1280 && img.height <= 720) {
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
          alert("Failed, image height and width must be less than 1280x720px.");
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

  function onSubmit(data) {
    const formData = new FormData();
    const formDataWithFields = { ...data };

    if (previewImage) {
      formData.append("thumbnail", thumbnail);
    }

    if (!formDataWithFields.thumbnail) {
      delete formDataWithFields.thumbnail;
    }

    const description = {
      structures: formDataWithFields.structures.map(
        (structure) => structure.structure
      ),
      purposes: formDataWithFields.purposes.map((purpose) => purpose.purpose),
      lecturers: formDataWithFields.lecturers.map(
        (lecturer) => lecturer.lecturer
      ),
    };

    delete formDataWithFields.structures;
    delete formDataWithFields.purposes;
    delete formDataWithFields.lecturers;
    formDataWithFields.description = JSON.stringify(description);

    Object.entries(formDataWithFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    createMentor(formData);
    reset();
    setPreviewImage(null);
  }

  return (
    <>
      <Panel>
        <Meta title={"Add New Mentor"} />
        <div className="h-full lg:max-w-3xl md:max-w-xl mx-auto">
          <form
            className="flex flex-col gap-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* thumbnail */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="thumbnail" className="flex justify-between">
                <span className="text-sm">
                  Choose Mentor Thumbnail (1280x720 PX)
                </span>
                <span className="text-gray-500 text-xs">Optional</span>
              </label>
              <>
                {!previewImage && (
                  <input
                    type="file"
                    name="thumbnail"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={handlePhotoChange}
                    className={`${className} w-full text-xs`}
                    required
                  />
                )}
                {previewImage ? (
                  <div className="w-[200px] h-[100px] relative">
                    <picture>
                      <source srcSet={previewImage} type={previewImageType} />
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-[200px] h-[113px] object-contain rounded shadow"
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

            {/* title */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="title" className="flex justify-between">
                <span className="text-sm">
                  Enter Title
                  <span className="text-red-500">*</span>
                </span>
                <span className="text-gray-500 text-xs">Required</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="i.e.: Mocking instagram app on visionOS"
                id="title"
                className={`${className} w-full text-sm`}
                {...register("title")}
                autoComplete="off"
                required
              />
            </div>

            {/* about */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="about" className="flex justify-between">
                <span className="text-sm">
                  Enter Mentor Short Description
                  <span className="text-red-500">*</span>
                </span>
                <span className="text-gray-500 text-xs">Required</span>
              </label>
              <textarea
                type="text"
                name="about"
                placeholder="i.e.: JetBrains has introduced a new AI Assistant for IntelliJ-based ..."
                id="about"
                rows={5}
                className={`form-textarea focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded w-full text-sm`}
                {...register("about")}
                autoComplete="off"
                required
              />
            </div>

            <hr />

            {/* price */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="price" className="flex justify-between">
                <span className="text-sm">
                  Enter Mentor Price (BDT)
                  <span className="text-red-500">*</span>
                </span>
                <span className="text-gray-500 text-xs">Required</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="i.e.: 599.99"
                id="price"
                step="0.01"
                className={`${className} w-full text-sm`}
                {...register("price")}
                autoComplete="off"
                required
              />
            </div>

            {/* category */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="flex justify-between">
                <span className="text-sm">
                  Select Mentor Category
                  <span className="text-red-500">*</span>
                </span>
                <span className="text-gray-500 text-xs">Required</span>
              </label>
              <select
                id="category"
                name="category"
                className="form-select focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded text-sm"
                {...register("category")}
              >
                <option value="academic">Academic</option>
                <option value="professional">Professional</option>
                <option value="jobrelated">Job Related</option>
              </select>
            </div>

            {/* status */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="flex justify-between">
                <span className="text-sm">Select Mentor Status</span>
                <span className="text-gray-500 text-xs">Optional</span>
              </label>
              <select
                id="status"
                name="status"
                className="form-select focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent border-0 border-b-2 border-b-primary focus:border-b-secondary rounded text-sm"
                {...register("status")}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <hr />

            {/* structure */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="flex justify-between">
                <span className="text-sm">
                  Select Mentor Structures
                  <span className="text-red-500">*</span>
                </span>
                <span
                  className="bg-primary hover:bg-primary/70 text-white rounded-full cursor-pointer"
                  onClick={() => structureAppend({ structure: "" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                </span>
              </label>

              <div className="w-full flex flex-col gap-2">
                {structureFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-center gap-x-4 w-full"
                  >
                    <input
                      type="text"
                      name={`structures[${index}].structure`}
                      placeholder="i.e.: World's Worst Tech Employers"
                      id={`structures[${index}].structure`}
                      className={`${className} w-full text-sm`}
                      defaultValue={field.structure}
                      {...register(`structures.${index}.structure`)}
                      autoComplete="off"
                      required
                    />
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 rounded-full text-white h-fit"
                      onClick={() => structureRemove(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* purpose */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="flex justify-between">
                <span className="text-sm">
                  Select Mentor Purposes
                  <span className="text-red-500">*</span>
                </span>
                <span
                  className="bg-primary hover:bg-primary/70 text-white rounded-full cursor-pointer"
                  onClick={() => purposeAppend({ purpose: "" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                </span>
              </label>

              <div className="w-full flex flex-col gap-2">
                {purposeFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-center gap-x-4 w-full"
                  >
                    <input
                      type="text"
                      name={`purposes[${index}].purpose`}
                      placeholder="i.e.: World's Worst Tech Employers"
                      id={`purposes[${index}].purpose`}
                      className={`${className} w-full text-sm`}
                      defaultValue={field.purpose}
                      {...register(`purposes.${index}.purpose`)}
                      autoComplete="off"
                      required
                    />
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 rounded-full text-white h-fit"
                      onClick={() => purposeRemove(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* lecturer */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="flex justify-between">
                <span className="text-sm">
                  Select Mentor Lecturers
                  <span className="text-red-500">*</span>
                </span>
                <span
                  className="bg-primary hover:bg-primary/70 text-white rounded-full cursor-pointer"
                  onClick={() => lecturerAppend({ lecturer: "" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                </span>
              </label>

              <div className="w-full flex flex-col gap-2">
                {lecturerFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-center gap-x-4 w-full"
                  >
                    <input
                      type="text"
                      name={`lecturers[${index}].lecturer`}
                      placeholder="i.e.: World's Worst Tech Employers"
                      id={`lecturers[${index}].lecturer`}
                      className={`${className} w-full text-sm`}
                      defaultValue={field.lecturer}
                      {...register(`lecturers.${index}.lecturer`)}
                      autoComplete="off"
                      required
                    />
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 rounded-full text-white h-fit"
                      onClick={() => lecturerRemove(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white py-3 rounded flex justify-center items-center text-sm"
            >
              {isLoading ? <Circle /> : "Add New Mentor"}
            </button>
          </form>
        </div>
      </Panel>
    </>
  );
};

export default AddMentor;
