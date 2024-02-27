import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Slide = ({ title, desc }) => {
  return (
    <div className="flex flex-col text-[#ffffff] rounded-lg px-5 py-7 bg-[#272727] w-[100%] md:w-[300px] h-[220px]  items-center">
      <div className="flex flex-col h-full place-content-between">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-[20px] font-semibold">{title}</h3>
          <p className="text-[#959595]">{desc}</p>
        </div>
        <MdArrowOutward className="text-[22px] font-bold cursor-pointer" />
      </div>
    </div>
  );
};

export default Slide;
