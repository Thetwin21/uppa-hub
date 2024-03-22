import React from "react";
import Slidecontainer from "./Slidecontainer";

const Ecosystem = () => {
  return (
    <div className="flex flex-col mb-[50px] gap-y-[50px] w-[100%] my-20">
      <div className="flex flex-col items-center justify-center w-full gap-y-11">
        <h1 className="text-3xl md:text-[64px] text-center text-[#ffffff]  font-bold  md:leading-[73px]">
          Complete Ecosystem
        </h1>
        <p className="text-[rgba(255,255,255,1)] text-[26px] text-center">
          Access a comprehensive suite of services, including a swap/bridge,
          launchpad, and incubator. Scale your project from ideation to reality.
        </p>
      </div>
      <div className="relative w-full overflow-y-hidden h-[320px] ecosystem">
      
        <Slidecontainer />
      </div>
    </div>
  );
};

export default Ecosystem;
