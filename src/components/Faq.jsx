'use client'
import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 min-w-[200px] w-full">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-200"
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`h-6 w-6 text-gray-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
