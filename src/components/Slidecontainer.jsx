"use client";
import React from "react";
import Slide from "./Slide";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    title: "Incubator",
    desc: "Secure funding and community support for your innovative project",
  },
];

const Slidecontainer = () => {
  const containerRef = useRef(null);
  const slideWidth = 300; // Width of each slide (adjust according to your design)

  useEffect(() => {
    const containerElement = containerRef.current;

    gsap.set(containerElement, { x: 0 });

    gsap.to(containerElement, {
      x: -(slideData.length * slideWidth) + window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: `+=${slideData.length * slideWidth - window.innerWidth}`,
        scrub: true,
        pin: true,
      },
    });
  }, []);
  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row my-3 gap-y-3 gap-x-6 w-[100%]"
      >
        {slideData.map((slides, index) => {
          const { id, title, desc } = slides;
          return (
            <Slide key={id} title={title} desc={desc} width={slideWidth} />
          );
        })}
      </div>
    </div>
  );
};

export default Slidecontainer;
