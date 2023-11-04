import React from "react";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";

function AboutUs() {
  return (
    <div
      id="section-2"
      name="aboutus"
      className="min-h-screen w-full overflow-hidden flex flex-col justify-between"
    >
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold">
          About Us
        </div>
        <div className="w-11/12 md:w-2/3 lg:w-1/2 mt-5 md:mt-10 text-md md:text-xl lg:text-2xl text-center">
          Hello! We're a group of students from Gadjah Mada University's
          Electrical Engineering and Information Technology Department, working
          on our 2023 Capstone project. We're passionate about coffee and
          technology, and we've created a smart app to help coffee producers and
          lovers. Our app uses smart technology to find the best coffee beans.
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        <div className="border-4 border-[#BE7656] border-rounded overflow-hidden">
          <img
            src={photo1}
            alt="Coffee 1"
            className="w-[250] h-[170px] px lg:w-[400px] lg:h-[320px]"
          />
        </div>
        <div className="border-4 border-[#BE7656] border-rounded overflow-hidden">
          <img
            src={photo2}
            alt="Coffee 2"
            className="w-[250] h-[170px] lg:w-[400px] lg:h-[320px]"
          />
        </div>
      </div>
      <div className="bg-[#BE7656] text-white font-medium text-sm md:text-base text-center py-3">
        © 2023 Capstone B_02 DTETI FT UGM. All Rights Reserved
      </div>
    </div>
  );
}

export default AboutUs;
