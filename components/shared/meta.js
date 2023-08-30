/**
 * Title: Write a program using JavaScript on Meta
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

import Head from "next/head";
import React from "react";

const Meta = ({ title }) => {
  const tabTitle = (title ? title : "N/A") + " - PlanNao";

  return (
    <Head>
      <title>{tabTitle}</title>
      
    </Head>
  );
};

export default Meta;

/**
 * Problem Statement:
 * A title element received an array with more than 1 element as children
 * Solution:
 * https://github.com/vercel/next.js/discussions/38256
 */
