import React from "react";
import Slidecontainer from "./Slidecontainer";

const Slidecomps = ({slideRef}) => {
  
  return (
    <div className="flex flex-col mb-[50px] gap-y-[50px] w-[100%]">
      <h1 className="text-3xl md:text-[64px] text-[#ffffff]  font-bold  md:leading-[73px]">
        Invest with confidence, knowing our experts have rigorously evaluated
        every offering.
      </h1>
      <Slidecontainer slideRef={slideRef} />
    </div>
  );
};

export default Slidecomps;
