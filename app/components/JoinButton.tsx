import React from "react";

const JoinButton = ({large}: {large: boolean}) => {
  return (
    <a
      href="https://forms.gle/XqyrWmPBkx1hU8WLA"
      target="_blank"
      className={`box-border relative -z-0 inline-flex items-center justify-center ${large?'w-64':'w-auto'} px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-blue-700 rounded-full cursor-pointer group  ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none`}
    >
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className={`relative  flex items-center ${large?'text-xl':'text-sm'}` }>
        <svg
          className="relative w-5 h-5 mr-2 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        Join CSI
      </span>
    </a>
  );
};

export default JoinButton;
