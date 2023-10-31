import React from "react";

function AboutUs() {
  return (
    <div
      id="section-2"
      name="aboutus"
      className="bg-white h-screen w-full overflow-hidden"
    >
      <div className="h-3/4 items-center flex flex-col place-self-center pt-10 justify-center">
        <div className="mt-12 text-center text-3xl font-bold">About Us</div>
        <div className="w-1/2 mt-10 text-center text-2xl text-medium">
          Founded by a group of coffee aficionados with a deep-rooted love for
          the bean, This was born out of a desire to elevate the coffee journey
          for every enthusiast, from farmers to baristas and coffee lovers. With
          a commitment to quality and sustainability, we embarked on a mission
          to harness the power of artificial intelligence and machine learning
          to enhance the entire coffee bean lifecycle.
        </div>
        <div className="h-fit align-middle"></div>
      </div>
      <div className="items-center bg-gradient-to-r from-blue to-bluelight rounded-t-lg h-screen justify-between">
        <div className="text-white font-medium text-2px text-center mt-2 pt-5">
          © 2023 Studylism. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
