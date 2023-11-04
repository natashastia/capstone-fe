import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";

const Scan = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 500, height: 500 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="relative flex flex-col items-center mt-4">
        <div className="text-black text-4xl font-bold text-center">
          Scan Here
        </div>
        <div className="camera">
          <video ref={videoRef}></video>
        </div>
        <a href="/result">
          <button className="m-1 border border-white bg-[#BE7656] rounded-lg w-28 py-2 text-lg text-white hover:bg-[#BE7656]/80 hover:text-black">
            Take
          </button>
        </a>
        <a href="/result">
          <button className="m-1 border border-white bg-[#BE7656] rounded-lg w-28 py-2 text-lg text-white hover:bg-[#BE7656]/80 hover:text-black">
            Upload
          </button>
        </a>
      </div>
    </div>
  );
};

export default Scan;
