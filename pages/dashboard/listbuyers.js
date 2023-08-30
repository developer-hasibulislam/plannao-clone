/**
 * Title: Write a program using JavaScript on List Buyers
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
import Panel from "@/components/layouts/dashboard/panel";
import Circle from "@/components/shared/circle";
import Meta from "@/components/shared/meta";
import { useGetAllTransactionsQuery } from "@/features/transaction/transactionApi";
import Image from "next/image";
import React from "react";

const ListBuyers = () => {
  const { data, isLoading } = useGetAllTransactionsQuery();
  const transactions = data?.transactions || [];

  return (
    <>
      <Panel>
        <Meta title={"List Buyers"} />
        {isLoading || transactions?.length ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 z-10">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Avatar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mentor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thumbnail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TrxID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="whitespace-nowrap">Amount (BDT)</span>
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Purchase
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions?.map(({ user, information }) =>
                  information?.map(
                    ({ _id, mentor, token, amount, createdAt }) => (
                      <tr
                        key={_id}
                        className="bg-white border-b hover:bg-secondary/10"
                      >
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {user?.name}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <Image
                            src={user?.avatar}
                            alt={user?.name}
                            height={30}
                            width={30}
                            className="rounded"
                          />
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {mentor?.title}
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <Image
                            src={mentor?.thumbnail}
                            alt={mentor?.title}
                            height={96}
                            width={54}
                            className="rounded"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <Badge color="purple">{token}</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge color="sky">{amount}</Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {new Date(createdAt).toLocaleString()}
                        </td>
                      </tr>
                    )
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

export default ListBuyers;
