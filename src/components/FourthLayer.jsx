import React from "react";
import Image from "next/image";

const FourthLayer = () => {
  return (
    <div className="flex items-center justify-center w-full my-16">
      <div className="flex justify-center w-full gap-x-3">
        <div className="w-[35%]">
          <Image
            src="../assets/pngtree.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="image"
          />
        </div>
        <div className="w-[55%] flex flex-col gap-y-3">
          <span className="mb-5">
            {" "}
            <h1 className="text-5xl text-[#ffffff]  font-bold space-y-3 leading-[60px]">
              Uphold your anonymity or opt for enhanced verification, it's up to you
            </h1>
            <p className="text-[20px] text-[#ffffffbe] ">
              We partner with leading KYC providers for optional identity
              verification, ensuring peace of mind when needed
            </p>
          </span>
          <div className="grid grid-cols-2 text-white gap-y-5 gap-x-2">
            <div className="flex flex-col items-start mb-5 gap-y-3">
              <h3 className="font-semibold text-[20px]">Complete Ecosystem</h3>
              <p className="text-[16px] text-[#ffffffbe]">
                Access a comprehensive suite of services, including a
                swap/bridge, e-commerce (select locations), launchpad, and
                incubator. Scale your project from ideation to reality.
              </p>
              <button className="bg-transparent border-0 text-[#A3CA00]">
                Join now
              </button>
            </div>
            <div className="flex flex-col items-start mb-5 gap-y-3">
              <h3 className="font-semibold text-[20px]">Curated Ecosystem</h3>
              <p className="text-[16px] text-[#ffffffbe]">
                Explore a carefully selected and secure environment for dApps,
                tokens, and trusted talent.
              </p>
              <button className="bg-transparent border-0 text-[#A3CA00]">
                Join now
              </button>
            </div>
            <div className="flex flex-col items-start mb-5\  gap-y-3">
              <h3 className="font-semibold text-[20px]">B2B & B2C Solutions</h3>
              <p className="text-[16px] text-[#ffffffbe]">
                Access a comprehensive suite of services, including a
                swap/bridge, e-commerce (select locations), launchpad, and
                incubator. Scale your project from ideation to reality.
              </p>
              <button className="bg-transparent border-0 text-[#A3CA00]">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthLayer;
