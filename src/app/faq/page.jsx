'use client'
import Wrapper from "@/components/Wrapper";
import React from "react";
import { useState } from "react";


const faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleOpen4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleOpen5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleOpen6 = () => {
    setIsOpen6(!isOpen6);
  };

  return (
    <Wrapper>
      <div className="w-full my-[50px] text-white  bg-[#272727] px-10 py-10">
        <div className="w-full text-center ">
          <h3 className="text-[34px] font-semibold">Upar Hub FAQ</h3>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold"> What is Upar Hub?</span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                Upar Hub is a comprehensive marketplace established on the
                Solana blockchain, designed to interconnect various stakeholders
                within the Web3 space. It serves as a centralized platform for
                applications (dApps), tokens, service providers, and other
                resources pertinent to the Solana ecosystem.
              </p>
            )}
          </div>
          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen1}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold">
                {" "}
                What are Upar Hub's goals?
              </span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen1 ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen1 && (
              <ul className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Market Leadership:</strong> To emerge as the
                      premier marketplace for dApps, tokens, and services within
                      the Solana ecosystem.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Safety and Trust:</strong> To cultivate a secure
                      and reliable environment for developers, investors, and
                      users alike.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Ecosystem Collaboration:</strong> To facilitate
                      collaboration among different players within the Solana
                      ecosystem, fostering both business-to-business (B2B) and
                      business-to-consumer (B2C) interactions.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Continuous Innovation:</strong> To perpetually
                      innovate and adapt, ensuring Upar Hub remains at the
                      forefront of the evolving blockchain landscape.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Market Leadership:</strong> To emerge as the
                      premier marketplace for dApps, tokens, and services within
                      the Solana ecosystem.
                    </p>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen2}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold">
                {" "}
                What services can I access on the Upar Hub platform?
              </span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen2 ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen2 && (
              <ul className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Marketplace for dApps and Tokens:</strong> Users
                      can explore, purchase, and sell dApps and tokens built on
                      the Solana blockchain.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Service Provider Directory: </strong>Users can
                      engage with a variety of service providers, including
                      developers, marketers, and influencers, operating within
                      the Solana ecosystem.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Wallet: </strong>Users can securely store their
                      Solana tokens within the Upar Hub platform.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Swap/Bridge (Future): </strong>Planned for launch
                      in Q3 2025, users will have the ability to seamlessly
                      exchange tokens between the Solana blockchain and other
                      leading blockchains.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Advanced Features (Future): </strong>Upar Hub
                      intends to integrate advanced functionalities such as
                      AI-powered recommendations, personalized dashboards, and
                      more in the forthcoming years.
                    </p>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen3}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold">
                What are the benefits of using Upar Hub?
              </span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen3 ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen3 && (
              <ul className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Secure Asset Management:</strong> Users gain
                      access to an extensive array of dApps, tokens, and
                      services within the Solana ecosystem.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Service Provider Directory: </strong> The platform
                      provides a secure and trusted environment for the
                      purchase, sale, and storage of digital assets.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Community Connection:</strong> Users have the
                      opportunity to connect with other participants in the
                      Solana ecosystem, fostering collaboration and networking.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      {" "}
                      <strong>Early Access to Projects: </strong>Through
                      launchpads and incubators, users can potentially access
                      promising new projects in their early stages.
                    </p>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen4}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold">
                {" "}
                What is the roadmap for Upar Hub?
              </span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen4 ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen4 && (
              <p className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                Upar Hub has delineated a comprehensive five-year roadmap,
                focusing on user experience enhancement, community building, and
                ongoing innovation. For a detailed breakdown of the roadmap,
                please visit our website.
              </p>
            )}
          </div>

          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen5}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold">
                what is the Upar Hub token?
              </span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen5 ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen5 && (
              <div className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                <p>
                  The Upar Hub token serves as a utility token within the
                  platform, enabling users to:
                </p>
                <ul>
                  <li>Pay for fees on the platform.</li>
                  <li>Access exclusive features and benefits.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-6 min-w-[200px] w-full">
            <button
              onClick={toggleOpen6}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-[#0d1b29] rounded-lg shadow-md hover:bg-[#93969f] focus:outline-none focus:ring focus:ring-gray-200"
            >
              <span className="text-lg font-semibold">
                Where can I learn more about Upar Hub?
              </span>
              <svg
                className={`h-6 w-6 text-gray-600 transition-transform ${
                  isOpen6 ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen6 && (
              <p className="px-6 py-4 mt-2 text-gray-800 bg-gray-100 rounded-lg shadow-md">
                {" "}
                You can acquire more information about Upar Hub by visiting our
                website or perusing our whitepaper. Additionally, updates and
                insights about Upar Hub can be found on our social media
                platforms, including Telegram and Twitter.
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default faq;
