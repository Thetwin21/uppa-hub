import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mobilenavbar from "@/components/Mobilenavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "uparhub",
  description: "a solana ecosystem",
};
export const viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#121315] flex flex-col items-center justify-center`}>
     
          <Navbar />
          <Mobilenavbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
