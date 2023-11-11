import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar.jsx";
import Loading from "../components/loading.jsx";

const CoffeeQualityClassifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [detectionDone, setDetectionDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [processingTime, setProcessingTime] = useState(null); // Add processingTime state

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDetectionDone(false);
    setProcessingTime(null);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    const start = performance.now();
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      //add a content type
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        "http://10.73.203.43:5000/predict",
        formData,
        config
      );
      console.log(response);
      // Update state dengan hasil prediksi dan gambar yang sudah diunggah
      setPredictions(response.data.classifications);
      setUploadedImage(response.data.image_data);
      setDetectionDone(true);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      const end = performance.now(); // Stop measuring time
      const duration = (end - start) / 1000; // Convert to seconds
      setProcessingTime(duration);
      setIsLoading(false); // Set loading to false when upload is complete
    }
  };

  const calculateTotalDefects = () => {
    if (predictions) {
      const bentukTidakWajarCount = predictions.filter(
        (result) => result === "Bentuk Tidak Wajar"
      ).length;

      const warnaTidakWajarCount = predictions.filter(
        (result) => result === "Warna Tidak Wajar"
      ).length;

      const kelainanLainCount = predictions.filter(
        (result) => result === "Kelainan Lain"
      ).length;

      return bentukTidakWajarCount + warnaTidakWajarCount + kelainanLainCount;
    }
    return 0;
  };

  const calculatePercentage = (category) => {
    if (predictions) {
      const totalDefects = calculateTotalDefects();
      const categoryCount = predictions.filter(
        (result) => result === category
      ).length;
      return (categoryCount / totalDefects) * 100 || 0; // Return 0 if totalDefects is 0 to avoid NaN
    }
    return 0;
  };

  const getQuality = (totalDefects) => {
    if (totalDefects <= 11) {
      return "Mutu 1";
    } else if (totalDefects <= 25) {
      return "Mutu 2";
    } else if (totalDefects <= 44) {
      return "Mutu 3";
    } else if (totalDefects <= 60) {
      return "Mutu 4a";
    } else if (totalDefects <= 80) {
      return "Mutu 4b";
    } else if (totalDefects <= 150) {
      return "Mutu 5";
    } else if (totalDefects <= 225) {
      return "Mutu 6";
    } else {
      return "Mutu tidak terdefinisi"; // Atau sesuai dengan kebutuhan Anda
    }
  };

  return (
    <div className="text-center max-w-screen mx-auto">
      <Navbar />
      <div className="text-center text-black text-2xl font-bold mt-2">
        Coffee Bean Detection
      </div>
      {isLoading && <Loading />}
      {/* Conditionally render the photo upload section */}
      {!detectionDone && (
        <div>
          <div className="text-center text-black text-xl mt-2">
            Upload or Take a Photo here!
          </div>
          <div className="w-[375px] h-[375px] lg:w-[500px] lg:h-[500px] mt-4 bg-black mx-auto relative flex items-center justify-center">
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="w-full h-full object-fit-cover"
              />
            ) : (
              <div className="text-[#D3D3D3] text-center">
                No photos added yet!
              </div>
            )}
          </div>
          <label className="text-center inline-flex text-white rounded-lg cursor-pointer mt-5 bg-[#BE7656] px-9 py-2 text-lg hover:bg-[#e8a587] hover:text-black">
            Add Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden" // Menggunakan kelas 'hidden' untuk menyembunyikan input asli
            />
          </label>
          <button
            onClick={handleUpload}
            className="text-center inline-flex text-white rounded-lg cursor-pointer m-2 bg-[#BE7656] px-5 py-2 text-lg hover:bg-[#e8a587] hover:text-black"
          >
            Start Detection
          </button>
        </div>
      )}
      <div lassName="flex flex-col lg:flex-row items-center justify-center">
        {detectionDone && uploadedImage && predictions.length > 0 && (
          <div>
            <h2 className="text-center text-black text-2xl font-bold">
              Result
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="result-image">
                <img
                  src={`data:image/png;base64,${uploadedImage}`}
                  alt="Uploaded"
                  className="w-full h-full object-fit-cover"
                />
              </div>
              <div className="result-statistics">
                <h1 className="text-2xl mb-2 font-bold lg:my-3">Statistic</h1>

                <h2 className="font-base text-base text-center">
                  Total Number of Defects: {calculateTotalDefects()}
                  <br />
                  Type of Quality: {getQuality(calculateTotalDefects())}
                </h2>
                {processingTime !== null && (
                  <p className="text-base m-1">
                    Duration: {processingTime.toFixed(2)}s
                  </p>
                )}
                <ul className="pl-6 list-disc">
                  <li>
                    Normal:{" "}
                    {calculatePercentage("Normal").toFixed(2).toString()}%
                  </li>
                  <li>
                    Bentuk Tidak Wajar:{" "}
                    {calculatePercentage("Bentuk Tidak Wajar")
                      .toFixed(2)
                      .toString()}
                    %
                  </li>
                  <li>
                    Warna Tidak Wajar:{" "}
                    {calculatePercentage("Warna Tidak Wajar")
                      .toFixed(2)
                      .toString()}
                    %
                  </li>
                  <li>
                    Kelainan Lain:{" "}
                    {calculatePercentage("Kelainan Lain").toFixed(2).toString()}
                    %
                  </li>
                </ul>
                <h1 className="text-2xl mb-2 font-bold lg:my-3">Description</h1>
                <ul className="pl-6 list-disc">
                  <li>Bentuk Tidak Wajar: Biji Pecah</li>
                  <li>
                    Warna Tidak Wajar: Biji Hitam, Biji Cokelat, Biji Muda
                  </li>
                  <li>Normal: Biji Kopi Normal </li>
                  <li>Kelainan Lain: Kopi Gelondong, Kulit Biji Kopi</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoffeeQualityClassifier;
