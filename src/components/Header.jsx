import React from "react";
import Navbar from "./NavBar";

export const Header = () => {
  return (
    <header className="hero w-full h-screen relative">
      <Navbar />
      <img
        src="/header_ass.png"
        alt="Your Image"
        className="absolute pointer-events-none inset-0 w-4/5 h-full object-contain translate-x-[32rem] translate-y-8"
      />
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col w-1/2 h-full pt-20 pl-28 ">
        <div className="text-6xl font-extrabold text-left text-blue-600 translate-y-[-3rem]">Assessment</div>
          <div className="text-6xl font-bold mb-4 shadow-lg text-black">Header</div>
          <div className="text-6xl font-bold mb-4 shadow-lg text-black">User Data</div>
          <div className="text-6xl font-bold mb-4 shadow-lg text-black">Footer</div>
        
          
        </div>
      </div>
    </header>
  );
};
