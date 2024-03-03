"use client";
import React from "react";
import Slide from "./Slide";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

const Slidecontainer = ({slideRef}) => {

  useGSAP(
    () => {
      gsap.to(".slideanime", {
        x: 1000,
        duration: 3,
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "top 30%",
          scrub: 4,
        },
      }); // <-- automatically reverted
    },
    { scope: slideRef }
  );

  return (
    <div className="relative w-full overflow-x-hidden h-[400px]">
      <div className="slideanime translate-x-[-100%] flex my-3 gap-y-3 gap-x-6 w-[100%] absolute top-0 left-0 ">
        {slideData.map((slides, index) => {
          const { id, title, desc } = slides;
          return (
            <div>
              <Slide key={id} title={title} desc={desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slidecontainer;
