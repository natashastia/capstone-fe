import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="h-screen relative">
        <div className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center text-center items-center">
          {/*Overlay*/}
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Coffee <span className="text-[#EFC3A4]"> Bean </span>
          </h1>
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-[#EFC3A4]"> Detection </span> System
          </h1>
          <div className="p-9 space-x-5">
            <a href="/scan">
              <button className="m-1 border border-white bg-[#BE7656]/80 rounded-lg px-9 py-2 text-lg text-white hover:bg-white hover:text-black">
                Scanning
              </button>
            </a>
            <button className="m-1 border border-white bg-[#BE7656]/80 rounded-lg px-7 py-2 text-lg text-white hover:bg-white hover:text-black">
              Information
            </button>
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
