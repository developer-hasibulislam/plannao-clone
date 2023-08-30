/**
 * Title: Write a program using JavaScript on Job Related Mentors
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

import Badge from "@/components/dashboard/badge";
import MentorDelete from "@/components/dashboard/mentordelete";
import Panel from "@/components/layouts/dashboard/panel";
import Circle from "@/components/shared/circle";
import Meta from "@/components/shared/meta";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const JobRelatedMentors = () => {
  const { jobrelated } = useSelector((state) => state.mentor.mentors);

  return (
    <>
      <Panel>
        <Meta title={"Academic Mentor's List"} />
        {jobrelated?.length ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 z-10">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Thumbnail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price (BDT)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Users
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobrelated?.map(
                  ({
                    _id,
                    thumbnail,
                    title,
                    category,
                    price,
                    status,
                    users,
                  }) => (
                    <tr
                      key={_id}
                      className="bg-white border-b hover:bg-secondary/10"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <Image
                          src={thumbnail}
                          alt={title}
                          height={96}
                          width={54}
                          className="rounded"
                        />
                      </th>
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {title}
                      </th>
                      <td className="px-6 py-4">
                        {category === "academic" && (
                          <Badge color="purple">{category}</Badge>
                        )}
                        {category === "professional" && (
                          <Badge color="indigo">{category}</Badge>
                        )}
                        {category === "jobrelated" && (
                          <Badge color="pink">{category}</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4">{price}</td>
                      <td className="px-6 py-4">
                        {status === "active" && (
                          <Badge color="fuchsia">{status}</Badge>
                        )}
                        {status === "inactive" && (
                          <Badge color="rose">{status}</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4">{users?.length}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-x-4">
                          <Link
                            href={`/dashboard/${_id}/?action=edit&mentor_title=${title
                              .replace(/ /g, "-")
                              .toLowerCase()}`}
                            className="bg-primary hover:bg-primary/70 text-white rounded cursor-pointer p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                          </Link>
                          <MentorDelete id={_id} />
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Circle />
          </div>
        )}
      </Panel>
    </>
  );
};

export default JobRelatedMentors;
