import React from "react";
import Navbar from "../components/navbar.jsx";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <Navbar />
      <div className="h-screen relative items-center">
        <h1 className="text-xl font-bold text-center">Scan Here</h1>
        <div className="w-[500px] h-[500px] text-gray-200 bg-black m-10 text-white items-center">
          Camera
        </div>
        <a href="/result">
          <button className="m-1 border border-white bg-[#BE7656]/80 rounded-lg px-9 py-2 text-lg text-white hover:bg-white hover:text-black">
            Take
          </button>
        </a>
        <button className="m-1 border border-white bg-[#BE7656]/80 rounded-lg px-9 py-2 text-lg text-white hover:bg-white hover:text-black">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Hero;
