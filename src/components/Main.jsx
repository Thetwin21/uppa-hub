'use client'
import React, { useEffect, useRef } from "react";
import Search from "./Search";

const Main = () => {
  // const elementRef = useRef(null);

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center w-full h-[calc(100vh-200px)]  gap-y-9 text-center">
      <span className="text-4xl md:text-5xl text-[#ffffff] md:max-w-[70%] font-bold space-y-3">
        <h1 className="">Your Gateway to the Trusted</h1>
        <h1> Solana Ecosystem</h1>
      </span>
      <p className="text-[#ffffffbe] text-[18px]  md:text-[20px]">
        Unleash the Power of Collaboration in the Secure World of Upar Hub
      </p>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Main;
