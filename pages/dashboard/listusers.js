/**
 * Title: Write a program using JavaScript on Listusers
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
 * Date: 01, August 2023
 */

import Badge from "@/components/dashboard/badge";
import MakeAdmin from "@/components/dashboard/makeadmin";
import UserDelete from "@/components/dashboard/userdelete";
import Panel from "@/components/layouts/dashboard/panel";
import Circle from "@/components/shared/circle";
import Meta from "@/components/shared/meta";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const ListUsers = () => {
  const { users } = useSelector((state) => state.user);

  return (
    <>
      <Panel>
        <Meta title={"List Users"} />
        {users?.length ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 z-10">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Avatar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    WhatsApp
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mentors
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Last Purchase
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map(
                  ({
                    _id,
                    avatar,
                    name,
                    whatsapp,
                    email,
                    role,
                    status,
                    mentors,
                    updatedAt,
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
                          src={avatar}
                          alt={name}
                          height={30}
                          width={30}
                          className="rounded"
                        />
                      </th>
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {name}
                      </th>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {whatsapp}
                      </td>
                      <td className="px-6 py-4">{email}</td>
                      <td className="px-6 py-4">
                        {role === "user" && (
                          <Badge color="indigo">{role}</Badge>
                        )}
                        {role === "admin" && <Badge color="rose">{role}</Badge>}
                      </td>
                      <td className="px-6 py-4">
                        {status === "active" && (
                          <Badge color="sky">{status}</Badge>
                        )}
                        {status === "inactive" && (
                          <Badge color="rose">{status}</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4">{mentors?.length}</td>
                      <td className="px-6 py-4">
                        {new Date(updatedAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        {role === "admin" ? (
                          "N/A"
                        ) : (
                          <span className="flex items-center gap-x-4">
                            <MakeAdmin id={_id} />
                            <UserDelete id={_id} />
                          </span>
                        )}
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

export default ListUsers;
