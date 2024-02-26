import React from "react";
import Image from "next/image"
import Link from "next/link"
import { IoLogoFacebook } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="text-[#ffffff] mb-44 gap-y-4 flex flex-col">
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
        <span className="mx-5">
          <Link href="/privacy">Privacy Policy</Link>
        </span>
        <span>
          <Link href="/terms">Terms of service</Link>
        </span>
      </div>
      <div className="flex items-center justify-between w-full gap-x-3">
        <span className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"><BsLinkedin /></span>
        <span className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"><BsTwitterX /></span>
        <span className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"><FaInstagram /></span>
        <span className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"><IoLogoFacebook /></span>
        <span className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"><RiYoutubeLine /></span>
      </div>
    </div>
  );
};

export default Footer;