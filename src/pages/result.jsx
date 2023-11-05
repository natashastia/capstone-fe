import React from "react";
import Navbar from "../components/navbar.jsx";
import DefectList from "../components/defectlist.jsx";
import { useLocation } from "react-router-dom";

const Result = () => {
  const defectData = [
    { name: "Biji Cokelat", percentage: "35%" },
    { name: "Biji Hitam", percentage: "20%" },
    { name: "Biji Muda", percentage: "15%" },
    { name: "Biji Normal", percentage: "20%" },
    { name: "Biji Pecah", percentage: "15%" },
    { name: "Biji Muda", percentage: "15%" },
    { name: "Biji Normal", percentage: "20%" },
    { name: "Biji Pecah", percentage: "15%" },
    { name: "Biji Muda", percentage: "15%" },
    { name: "Biji Normal", percentage: "20%" },
    { name: "Biji Pecah", percentage: "15%" },
  ];
  const location = useLocation();
  const capturedPhoto = location.state?.capturedPhoto;
  return (
    <div className="max-w-screen mx-auto">
      <Navbar />
      <div className="w-screen h-screen flex flex-col items-center">
        <div className="text-center text-black text-2xl font-bold mt-2">
          Result
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row items-center">
          {capturedPhoto && (
            <img
              src={capturedPhoto}
              alt="Captured"
              className="lg:w-[550px] lg:h-[550px] w-[300px] h-[300px] my-2 mx-4"
            />
          )}
          <div className="lg:w-[550px] lg:min-h-[550px] w-[300px] bg-black/10 rounded-lg border-2 border-black p-4">
            <div className="text-black text-2xl font-bold">Duration</div>
            <ul className="list-disc pl-6">
              <li>Object Detection: 2s</li>
              <li>Classification: 1s</li>
            </ul>
            <div className="text-black text-2xl font-bold mt-2">Defects</div>
            <div className="font-bold text-base lg:text-xl pb-2 m-2 text-center">
              Total Number of Defects: 5
              <br />
              Type of Quality: Mutu 1
            </div>
            <DefectList data={defectData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
