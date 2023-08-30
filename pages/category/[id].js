/**
 * Title: Write a program using JavaScript on [id]
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
import Pricing from "@/components/detail/pricing";
import Tab from "@/components/detail/tab";
import Main from "@/components/layouts/main/main";
import Container from "@/components/shared/container";
import Loading from "@/components/shared/loading";
import { useGetMentorQuery } from "@/features/mentor/mentorApi";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

const MentorDetail = () => {
  const router = useRouter();
  const fullUrl = `${router.basePath}${router.asPath}`;
  const { id } = router.query;
  const { data, isLoading } = useGetMentorQuery(id);
  const { title, category, about, thumbnail, description, status } =
    data?.mentor || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <Head>
        {/* Site Title */}
        <title>{title}</title>

        {/* Primary Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={about} />
        <meta name="keywords" content="PlanNao, Mentor, Advisory, Platform" />
        <meta name="robots" content="index, follow" />
        <meta content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Hasibul Islam" />

        {/* Open Graph/Facebook Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={about} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={thumbnail} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:url" content={fullUrl} />
        <meta name="twitter:description" content={about} />
        <meta name="twitter:image" content={thumbnail} />

        {/* Pinterest Tags */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta name="pinterest:title" content={title} />
        <meta property="pinterest:url" content={fullUrl} />
        <meta name="pinterest:description" content={about} />
        <meta name="pinterest:image" content={thumbnail} />
      </Head>
      <Main>
        <section className="py-12 z-0">
          <Container>
            <div className="grid grid-cols-12 lg:gap-x-8 gap-y-12">
              <div className="lg:col-span-7 col-span-12 lg:px-0 px-4 w-full">
                <div className="flex flex-col gap-y-4 relative">
                  <Image
                    src={thumbnail}
                    alt={title}
                    height={360}
                    width={640}
                    className="my-8 rounded-2xl w-full max-w-full object-cover object-center"
                  />
                  <div className="flex flex-col gap-y-4">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                      {title}
                    </h1>
                    <div className="text-gray-500">{about}</div>
                  </div>
                  <div className="w-full">
                    <Tab description={description} />
                  </div>

                  <div className="absolute top-0 left-0 flex gap-x-2">
                    <Badge color={"fuchsia"}>{category}</Badge>
                    <Badge color={"indigo"}>{status}</Badge>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 col-span-12 lg:px-0 px-4 w-full">
                <Pricing mentor={data?.mentor} />
              </div>
            </div>
          </Container>
        </section>
      </Main>
    </>
  );
};

export default MentorDetail;
