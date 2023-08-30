/**
 * Title: Write a program using JavaScript on Private Route
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

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./loading";

const PrivateRoute = ({ allowedRoles, children }) => {
  const router = useRouter();
  const user = useSelector((state) => state?.auth?.user);
  const userRole = user?.role;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userRole && allowedRoles.includes(userRole)) {
      setIsLoading(false);
    } else {
      if (!userRole) {
        router.replace("/auth/signin");
      } else {
        router.replace("/unauthorized");
      }
    }
  }, [userRole, allowedRoles, router]);

  if (isLoading) return <Loading />;

  return !isLoading && userRole && allowedRoles.includes(userRole)
    ? children
    : null;
};

export default PrivateRoute;
