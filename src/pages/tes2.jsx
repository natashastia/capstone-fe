import React, { useState } from "react";
import axios from "axios";

const CoffeeQualityClassifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
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
        "http://localhost:5000/predict",
        formData,
        config
      );
      console.log(response);
      // Update state dengan hasil prediksi dan gambar yang sudah diunggah
      setPredictions(response.data.classifications);
      setUploadedImage(response.data.image_data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h1>Object Detection and Classification</h1>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Predict</button>

      {uploadedImage && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={`data:image/png;base64,${uploadedImage}`} alt="Uploaded" />
        </div>
      )}

      {predictions.length > 0 && (
        <div>
          <h2>Predictions</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>{prediction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CoffeeQualityClassifier;
