import React from "react";
import Bluebg from "./Bluebg";

const ThirdLayer = () => {
  return (
    <div className="relative flex items-center justify-center w-full mb-[109px]">
      <div className="flex flex-col w-full gap-y-[50px]">
        <h1 className="text-3xl md:text-[55px] text-[#ffffff]  font-bold md:leading-[73px]">
          Your one-stop shop for secure and reliable dApps, tokens, and service
          providers in the Solana blockchain.
        </h1>
        <div className="grid grid-cols-1 mt-6 overflow-hidden text-white md:grid-cols-3 rounded-3xl">
          <div className="px-6 bg-[#1F1F21] gap-y-3 flex flex-col justify-center py-7">
            <div>
              <img src="../assets/Icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[21px] md:text-[24px] font-semibold">Trusted Marketplace</h3>
              <p className="text-[#ffffffbe]">
                Upar Hub is your one-stop shop for secure and reliable dApps,
                tokens, and service providers in the Solana blockchain.
              </p>
            </div>
          </div>
          <div className="px-6 bg-[#1F1F21] border border-gray-400 border-b-0 border-t-0 gap-y-3 flex flex-col justify-center py-7">
            <div>
              <img src="../assets/Icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[21px] md:text-[24px] font-semibold">
                Trusted Collaboration
              </h3>
              <p className="text-[#ffffffbe]">
                Discover a secure haven for dApps, tokens, and talent on the
                Solana blockchain. Upar Hub prioritizes user choice and safety,
                offering both
              </p>
            </div>
          </div>
          <div className="px-6 bg-[#1F1F21] gap-y-3 flex flex-col justify-center py-7">
            <div>
              <img src="../assets/Icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[21px] md:text-[24px] font-semibold">
                Anonymous Exploration
              </h3>
              <p className="text-[#ffffffbe]">
                Browse freely, explore curated offerings, and connect with
                like-minded individuals without compromising your privacy
              </p>
            </div>
          </div>
          <div className="px-6 bg-[#1F1F21] gap-y-3 border border-gray-400 border-l-0 border-r-0 border-b-0 flex flex-col justify-center py-7">
            <div>
              <img src="../assets/Icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[21px] md:text-[24px] font-semibold">
                Verified Partnerships
              </h3>
              <p className="text-[#ffffffbe]">
                When verified trust matters, leverage our KYC partnerships for
                additional identity verification. This empowers you to
                confidently collaborate with community members
              </p>
            </div>
          </div>
          <div className="px-6 bg-[#1F1F21] border border-gray-400 border-b-0 gap-y-3 flex flex-col justify-center py-7">
            <div>
              <img src="../assets/Icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[21px] md:text-[24px] font-semibold">Collaboration Hub</h3>
              <p className="text-[#ffffffbe]">
                Join forces with talented developers, marketers, influencers,
                and moderators. Find the perfect team to launch your innovative
                project. Upar Hub fosters synergy and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-[-10] left-[-10px] bottom-[-10px]">
        <Bluebg bgcolor="bg-[#A3CA00]" />
      </div>
    </div>
  );
};

export default ThirdLayer;
