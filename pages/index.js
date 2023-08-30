/**
 * Title: Write a program using JavaScript on Index
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

import Meta from "@/components/shared/meta";
import Navbar from "@/components/layouts/main/navbar";
import Footer from "@/components/layouts/main/footer";
import Banner from "@/components/home/banner";
import Solution from "@/components/home/solution";
import Review from "@/components/home/review";
import Mentors from "@/components/home/mentors/mentors";

export default function Home() {
  return (
    <>
      <Meta title={"Home"} />
      <main>
        <Navbar />
        <Banner />
        <Solution />
        <Mentors />
        <Review />
        <Footer />
      </main>
    </>
  );
}
