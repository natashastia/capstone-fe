import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = () => {
    inputRef.current.click();
  };

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

  const takePhoto = () => {
    const width = 500;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    if (video && photo) {
      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoDataUrl = photo.toDataURL("image/jpeg");
      setCapturedPhoto(photoDataUrl);
      setHasPhoto(true);
      navigate("/result", { state: { capturedPhoto: photoDataUrl } });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Mengambil gambar pertama dalam daftar yang diunggah
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const capturedPhoto = reader.result;
        setCapturedPhoto(capturedPhoto);
        setHasPhoto(true);
        navigate("/result", { state: { capturedPhoto } });
      };
      reader.readAsDataURL(file);
    } else {
      // Tampilkan pesan kesalahan jika file yang diunggah bukan gambar
      alert("Silakan unggah gambar yang valid.");
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

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
        <div>
          <button
            onClick={takePhoto}
            className="m-1 border border-white bg-[#BE7656] rounded-lg w-28 py-2 text-lg text-white hover:bg-[#BE7656]/80 hover:text-black"
          >
            Take
          </button>
        </div>
        <label
          htmlFor="imageUpload"
          className="m-1 border border-white bg-[#BE7656] rounded-lg w-28 py-2 text-lg text-white text-center hover:bg-[#BE7656]/80 hover:text-black"
        >
          Upload
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </label>
        <canvas ref={photoRef} style={{ display: "none" }}></canvas>
      </div>
    </div>
  );
};

export default Scan;
