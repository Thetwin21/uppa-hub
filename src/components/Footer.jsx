import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMedium } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="text-[#ffffff] mb-[60px] gap-y-4 flex flex-col">
        <div className="flex items-center justify-center gap-x-2">
          <div className="w-[48px] h-[48px]">
            <Image
              src="../../assets/Logo-upar 1.svg"
              width={48}
              height={48}
              alt="logo"
              //   sizes="(max-width: 768px) 100vw,
              //         (max-width: 1200px) 50vw,
              //         33vw"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <p className="text-[24px] font-serif text-blue-500">YOUR LOGO</p>
        </div>
        <div className="flex justify-between p-2 gap-x-3 text-[16px]">
          <span>
            <Link href="/faq">FAQ</Link>
          </span>
          <span>
            <Link href="/faq">Careers</Link>
          </span>
          <span className="mx-5">
            <Link href="/privacy">Privacy Policy</Link>
          </span>
          <span>
            <Link href="/terms">Terms of service</Link>
          </span>
        </div>
        <div className="flex items-center justify-between w-full gap-x-3">
          <Link
            href="https://www.linkedin.com/company/uparhub/"
            className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://x.com/uparhub"
            className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
          >
            <BsTwitterX />
          </Link>

          <Link
            href="https://t.me/uparhub"
            className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
          >
            <FaTelegram />
          </Link>
          <Link
            href="https://medium.com/@uparhub"
            className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
          >
            <BsMedium />
          </Link>
          <Link
            href="https://www.youtube.com/@UparHub"
            className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
          >
            <RiYoutubeLine />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
