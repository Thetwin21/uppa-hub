import React from 'react'
import Image from "next/image";
import Bluebg from "./Bluebg";

const SecondLayer = () => {
  return (
    <div className="relative w-full py-3 mb-10">
      <div className="">
        <div className="w-full">
          <Image
            src="../assets/Image.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="absolute top-[-10px] right-[-30px] z-[-10]">
            <Bluebg bgcolor="bg-[#59D8F0]"/>
        </div>
      </div>
      </div>
  )
}

export default SecondLayer