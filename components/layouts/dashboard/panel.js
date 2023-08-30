/**
 * Title: Write a program using JavaScript on Dashboard
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

import React, { useEffect, useMemo } from "react";
import Sidebar from "./sidebar";
import PrivateRoute from "@/components/shared/privateroute";
import { useGetUsersQuery } from "@/features/user/userApi";
import { useDispatch } from "react-redux";
import Loading from "@/components/shared/loading";
import { addUsers } from "@/features/user/userSlice";

const Panel = ({ children }) => {
  const { data: usersData, isLoading: fetchingUsersData } = useGetUsersQuery();
  const users = useMemo(() => usersData?.users || [], [usersData]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetchingUsersData) {
      dispatch(addUsers(users));
    }
  }, [dispatch, fetchingUsersData, users]);

  if (fetchingUsersData) return <Loading />;

  return (
    <section className="h-screen w-screen overflow-x-hidden">
      <div className="grid lg:grid-cols-12 p-3 lg:gap-3 h-full w-full relative">
        <div className="lg:col-span-2 lg:p-4 p-2 lg:rounded-lg lg:static absolute top-4 left-4 bg-primary rounded text-white z-10">
          <Sidebar />
        </div>
        <main className="lg:col-span-10 bg-secondary/10 rounded-lg p-4 h-full w-full overflow-y-auto">
          <PrivateRoute allowedRoles={["admin"]}>{children}</PrivateRoute>
        </main>
      </div>
    </section>
  );
};

export default Panel;
