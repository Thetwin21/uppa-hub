import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mobilenavbar from "@/components/Mobilenavbar";
import Parallex from "@/components/Parallex";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "synesxi",
  description: "a solana ecosystem",
};
export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full ">
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
