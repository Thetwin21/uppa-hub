"use client";
import React from "react";
import Slide from "./Slide";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const slideData = [
  {
    id: 1,
    title: "Talent Pool",
    desc: "Assemble your dream team from a pool of pre-vetted developers, marketers, and more.",
  },
  {
    id: 2,
    title: "Swap/Bridge",
    desc: "Seamlessly exchange tokens across different blockchains.",
  },
  {
    id: 3,
    title: "E-commerce (Select Locations)",
    desc: "Buy and sell goods and services using crypto.",
  },
  {
    id: 4,
    title: "Launchpad",
    desc: "Secure funding and community support for your innovative project",
  },
  {
    id: 5,
    title: "Incubator",
    desc: "Get expert guidance and resources to accelerate your journey.",
  },
];

const Slidecontainer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setOffsetX(0);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.pageX - startX;
      setOffsetX(newOffsetX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full overflow-x-hidden h-[400px]">
      <div
        className="flex my-3 gap-y-3 gap-x-6 w-[100%] absolute top-0 left-0 "   onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        {slideData.map((slides, index) => {
          const { id, title, desc } = slides;
          return (
            <Slide key={id} title={title} desc={desc}/>
          );
        })}
      </div>
    </div>
  );
};

export default Slidecontainer;
