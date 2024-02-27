'use client'
import { useEffect } from 'react';
import gsap from 'gsap';

const Animation = () => {
  useEffect(() => {
    // Define the elements
    const circle = document.querySelector('.circle');
    const items = document.querySelectorAll('.item');

    // Set the center of the circle
    const centerX = circle.getBoundingClientRect().left + circle.offsetWidth / 2;
    const centerY = circle.getBoundingClientRect().top + circle.offsetHeight / 2;

    // Define the radius of the circle
    const radius = 100;

    // Create a timeline animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Define the rotation angle increment for each item
    const angleIncrement = (2 * Math.PI) / items.length;

    // Define the duration of the animation
    const duration = 2;

    // Rotate each item around the circle
    items.forEach((item, index) => {
      const angle = angleIncrement * index;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      tl.to(item, {
        duration,
        x,
        y,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-24 h-24 border border-black rounded-full circle">
        <div className="absolute w-4 h-4 bg-red-500 rounded-full item"></div>
        <div className="absolute w-4 h-4 bg-green-500 rounded-full item"></div>
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full item"></div>
        <div className="absolute w-4 h-4 bg-yellow-500 rounded-full item"></div>
      </div>
    </div>
  );
};

export default Animation;
