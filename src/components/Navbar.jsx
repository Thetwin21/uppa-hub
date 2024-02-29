import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-center w-screen border-b border-[#1D1D1D] py-[20px] px-[20px]">
    <div className="flex  items-center justify-between w-full text-[#fff] lg:max-w-[1400px]">
      <div className="w-[48px] h-[48px]">
        <Image
          src="../../assets/Logo-upar 1.svg"
          width={48}
          height={48}
          alt="logo"
        //   sizes="(max-width: 768px) 100vw,
        //         (max-width: 1200px) 50vw,
        //         33vw"
          style={{ height: '100%', width: '100%' }} 
        />
      </div>
      <nav className="hidden md:block">
        <ul className="flex flex-row list-none nav gap-x-5">
            <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer"><Link href=" ">Discover</Link></li>
            <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer"><Link href=" ">Features</Link></li>
            <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer"><Link href=" ">Benefits</Link></li>
        </ul>
      </nav>
     <button className="bg-[#1B95AC] group text-white rounded-3xl py-2 px-5 flex gap-x-2 items-center justify-center"><span className="hidden transition-all md:block group-hover:block">Join waitlist</span> <MdArrowOutward /></button>
    </div>
    </div>
  );
};

export default Navbar;
