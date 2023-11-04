import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="h-screen relative flex flex-col justify-center text-center items-center">
        <div className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center text-center items-center">
          {/*Overlay*/}
          <h1 className="text-2xl text-4xl md:text-6xl lg:text-7xl font-bold">
            Coffee <span className="text-[#EFC3A4]"> Bean </span>
          </h1>
          <h1 className="text-2xl text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-[#EFC3A4]"> Detection </span> System
          </h1>
          <div className="flex flex-col items-center mt-5 sm:flex-row">
            <a href="/scan">
              <button className="m-1 border border-white bg-[#BE7656]/80 rounded-lg px-9 py-2 text-lg text-white hover:bg-white hover:text-black">
                Scanning
              </button>
            </a>
            <a href="/">
              <button className="m-1 border border-white bg-[#BE7656]/80 rounded-lg px-7 py-2 text-lg text-white hover:bg-white hover:text-black">
                Information
              </button>
            </a>
          </div>
        </div>
        <img
          className="w-full h-screen object-cover"
          src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Coffee"
        />
      </div>
    </div>
  );
};

export default Hero;
