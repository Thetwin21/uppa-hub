"use client";
import React from "react";
import Slide from "./Slide";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

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
gsap.registerPlugin(ScrollTrigger)

const Slidecontainer = () => {

  useEffect(()=> {
  gsap.to(".slide-wrapper",{
    x: "100%",
    duration: 5,
    scrollTrigger:{
      trigger: ".slide-wrapper",
      start: "top 80%",
      scrub: true,
      markers: true
    }
  })
  })


  return (
    <div className="slide-container relative w-full overflow-x-hidden h-[400px]">
      <div className="slide-wrapper translate-x-[-100%] flex my-3 gap-y-3 gap-x-6 w-[100%] absolute top-0 left-0 ">
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
