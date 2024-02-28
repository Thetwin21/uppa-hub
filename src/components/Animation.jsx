// components/EndlessMarquee.js
"use client";
import { useState, useEffect } from "react";

const EndlessMarquee = ({ text }) => {
  const [animationDuration, setAnimationDuration] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = document.getElementById("marquee-container");
    const content = document.getElementById("marquee-content");

    if (container && content) {
      const contentWidth = content.offsetWidth;
      const containerWidth = container.offsetWidth;
      const duration = contentWidth / 50; // Adjust speed here

      setContainerWidth(containerWidth);
      setAnimationDuration(duration);
    }
  }, []);

  return (
    <div
      id="marquee-container"
      className="overflow-hidden"
      style={{ width: "100%", height: "50px" }} // Adjust height here
    >
      <div
        id="marquee-content"
        className={`

        ]
        
          'inline-block',
          'animate-marquee',
          { 'w-auto': containerWidth > 0 }
        `}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {text}
      </div>
    </div>
  );
};

export default EndlessMarquee;
