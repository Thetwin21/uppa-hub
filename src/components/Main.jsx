"use client";
import React, { useEffect, useRef } from "react";
import Search from "./Search";
import Parallex from "./Parallex";

const Main = () => {
  // const elementRef = useRef(null);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center w-full h-[calc(100vh-200px)] gap-y-[28px] text-center"
    >
      <div className="flex flex-col items-center justify-center w-full gap-7 md:gap-y-9">
        <span className="text-4xl md:text-[64px] text-[#ffffff] md:max-w-[70%] mb-4 font-bold md:space-y-[16px] md:leading-[73px]">
          <h1 className="">
            Your Gateway to the <br className="hidden md:block" />{" "}
            Solana Ecosystem
          </h1>
        </span>
        <p className="text-[#ffffffbe] text-[18px]  md:text-[20px]">
          Unleash the Power of Collaboration in the Secure World of Upar Hub
        </p>
      </div>
      <div>
        <Search />
      </div>
     {/* <Parallex />  */}
    </div>
  );
};

export default Main;
