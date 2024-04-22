import React, { useState } from "react";
import Image from "next/image";
import Parallex from "./Parallex";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ThirdLayer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? 4 - 3 : prev - 3));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 3) % 4);
  };
  return (
    <div className="relative flex items-center justify-center w-full mb-[109px]">
      <div data-aos="fade-up" className="flex flex-col w-full gap-y-[50px] ">
        <h1 className="text-3xl text-center md:text-[55px] text-[#ffffff]  font-bold md:leading-[73px]">
          Your one-stop shop for secure and reliable dApps, tokens, and service
          providers in the Solana blockchain.
        </h1>

        <div className="relative w-full overflow-y-hidden h-[360px] marquee">
          <div className="absolute flex w-full h-full marquee--inner scroll-m-0">
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/trader.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Traders/Investors
                </h3>
                <p className="text-[#ffffffbe]">
                  Conduct in-depth research on tokens and dApps on the Solana
                  Blockchain to make informed investment decisions. Explore a
                  curated marketplace of  vetted cryptocurrency  tokens. While
                  we don't handle trades directly, you can access your favourite
                  and other reputable exchanges for seamless trading experiences
                  all within Synesxi.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/Icon (11).svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Fostering Collaboration
                </h3>
                <p className="text-[#ffffffbe]">
                  Synesxi actively promotes multifaceted collaboration across
                  the entire Solana ecosystem.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/Icon (12).svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Service Providers
                </h3>
                <p className="text-[#ffffffbe]">
                  Showcase your expertise and connect with businesses actively
                  shaping the future of Solana. Target your ideal clients
                  efficiently within this booming ecosystem and unlock new
                  business opportunities.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/Icon (10).svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Developers
                </h3>
                <p className="text-[#ffffffbe]">
                  Launch, propel your tokens and or  dApps to new heights. Gain
                  valuable exposure and build a loyal user base within the
                  ever-expanding Solana ecosystem. Synesxi fosters a seamless
                  environment for direct interaction with potential users,
                  accelerating your growth journey.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/trader.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Traders/Investors
                </h3>
                <p className="text-[#ffffffbe]">
                  Conduct in-depth research on tokens and dApps on the Solana
                  Blockchain to make informed investment decisions. Explore a
                  curated marketplace of  vetted cryptocurrency  tokens. While
                  we don't handle trades directly, you can access your favourite
                  and other reputable exchanges for seamless trading experiences
                  all within Synesxi.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/Icon (11).svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Fostering Collaboration
                </h3>
                <p className="text-[#ffffffbe]">
                  Synesxi actively promotes multifaceted collaboration across
                  the entire Solana ecosystem.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/Icon (12).svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Service Providers
                </h3>
                <p className="text-[#ffffffbe]">
                  Showcase your expertise and connect with businesses actively
                  shaping the future of Solana. Target your ideal clients
                  efficiently within this booming ecosystem and unlock new
                  business opportunities.
                </p>
              </div>
            </div>
            <div className="orb w-[400px] min-w-[400px]  py-8 px-7 text-[#fff] flex flex-col gap-y-5 border-y-[0.1px] border-gray-500 border-l-[0.1px] bg-[#272727]">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="../assets/Icon (10).svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[21px] md:text-[24px] font-semibold">
                  Developers
                </h3>
                <p className="text-[#ffffffbe]">
                  Launch, propel your tokens and or  dApps to new heights. Gain
                  valuable exposure and build a loyal user base within the
                  ever-expanding Solana ecosystem. Synesxi fosters a seamless
                  environment for direct interaction with potential users,
                  accelerating your growth journey.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-center w-full bg-transparent gap-x-2">
            <button
              onClick={goToPrevious}
              className=" z-[2000] left-0 btn1 w-[40px] h-[40px] rounded-[50%] bg-transparent my-auto top-0 bottom-0 border-[#ffffff74] border text-[#ffffff74] flex justify-center items-center text-[20px]"
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              onClick={goToNext}
              className="right-0 btn1 w-[40px] h-[40px] rounded-[50%] my-auto top-0 bottom-0 bg-transparent border-[#fff] border text-[#fff] flex justify-center items-center text-[20px] z-[2000]"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
      </div>

      <Parallex />
    </div>
  );
};

export default ThirdLayer;
