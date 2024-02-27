import React from "react";
import Slide from "./Slide";

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
];
const Slidecontainer = () => {
  return (
    <div className="flex flex-col my-3 gap-y-3 gap-x-6 w-[100%]">
      {slideData.map((slides, index) => {
        const {id, title, desc } = slides;
        return <Slide key={id} title={title} desc={desc} />;
      })}
    </div>
  );
};

export default Slidecontainer;
