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
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-4xl md:text-[64px] text-[#ffffff] md:max-w-[70%] mb-4 font-bold md:space-y-[16px] md:leading-[73px]">
          <h1 className="">
            Your Gateway
            <br className="hidden md:block" /> to the Solana Ecosystem
          </h1>
        </span>
        <p className="text-[#ffffffbe] text-[20px] md:text-[26px]">
        Discover, Collaborate, & Own Your Solana Journey
        </p>
      </div>
      <div>
        <button className="bg-[rgba(89,183,233,1)] h-[46px] w-[176px] flex justify-center items-center font-semibold rounded-[10px] text-[#fff]">Learn More</button>
      </div>
      {/* <Parallex />  */}
    </div>
  );
};

export default Main;
