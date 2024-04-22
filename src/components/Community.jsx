import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Parallex from "./Parallex";
import Link from "next/link"

const Community = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center text-center md:text-inherit gap-y-9 py-[60px] bg-[#272727] w-full rounded-xl mb-36 md:mb-44 relative">
      <h1 className="text-3xl md:text-[64px] text-[#ffffff] md:max-w-[70%] font-bold ">
        Join our Community
      </h1>
      <p className="text-[#ffffffbe] text-[21px] md:text-[24px]">Become part of a vibrant ecosystem of innovators and collaborators</p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLScGVO2NmdZvDGPAhdQzFvSnVksIhtysa-ZeyiGkTloOmVpkPw/viewform">

      <button className="flex items-center justify-center gap-x-2 w-[300px] py-[16px] px-[32px] rounded-[30px] text-white font-semibold bg-[#1B95AC]"><span>Join now</span><MdArrowOutward /></button>
      </Link>
      
      <Parallex pos="bottom-0"/>
    </div>
  );
};

export default Community;
