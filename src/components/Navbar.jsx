"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="hidden md:flex items-center justify-center w-screen border-b border-[#1D1D1D] py-[20px] px-[20px]">
      <div className="flex  items-center justify-between w-full text-[#fff] max-w-screen-sm px-5 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="w-[48px] h-[48px]">
          <Link href="/">
            {" "}
            <Image
              src="../vercel.svg"
              width={48}
              height={48}
              alt="logo"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-row list-none nav gap-x-5">
            <li
              className={`${
                path == "/discover" ? "bg-[#393D3E]" : ""
              } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
            >
              <Link href="/discover">Discover</Link>
            </li>
            <li
              className={`${
                path == "/features" ? "bg-[#393D3E]" : ""
              } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
            >
              <Link href="/features">Features</Link>
            </li>
            <li
              className={`${
                path == "/benefits" ? "bg-[#393D3E]" : ""
              } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
            >
              <Link href="/benefits">Benefits</Link>
            </li>
          </ul>
        </nav>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScGVO2NmdZvDGPAhdQzFvSnVksIhtysa-ZeyiGkTloOmVpkPw/viewform">
          <button className="bg-[#1B95AC] group text-white rounded-3xl py-2 px-5 flex gap-x-2 items-center justify-center">
            <span className="hidden transition-all md:block group-hover:block">
              Join waitlist
            </span>{" "}
            <div>
              <MdArrowOutward />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
