import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mobilenavbar from "@/components/Mobilenavbar";
import Parallex from "@/components/Parallex";
import Head from "next/head";
import Link from "next/link"
import 'aos/dist/aos.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "synesxi",
  description: "Unleash the Potential of Solana with Synesxi. Discover a comprehensive platform designed to empower individuals (Solana developer, Solana NFT investor), freelancers (Solana project manager, Solana marketing specialist), investors (VC investor in Solana projects, retail investor in Solana tokens), and businesses (B2B/B2C/D2C) within the Solana blockchain. Explore tokens, dApps, services, and investment opportunities tailored to your needs.",
};
export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full ">
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`bg-[#121315] flex flex-col items-center justify-center relative`}
      >
        <Parallex pos="top-0" />
        <Navbar />
        <Mobilenavbar />
        {children}
        <Parallex pos="bottom-0" />
        <Footer />
      </body>
    </html>
  );
}
