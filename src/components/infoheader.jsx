import React from "react";

const InfoHeader = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="h-screen relative">
        <div className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center">
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Coffee Bean
          </h1>
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Detection System
          </h1>
          <div className="w-full lg:w-1/2 p-9 space-x-5 font-medium">
            <p>
              Founded by a group of coffee aficionados with a deep-rooted love
              for the bean, This was born out of a desire to elevate the coffee
              journey for every enthusiast, from farmers to baristas and coffee
              lovers. With a commitment to quality and sustainability, we
              embarked on a mission to harness the power of artificial
              intelligence and machine learning to enhance the entire coffee
              bean lifecycle.
            </p>
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

export default InfoHeader;
