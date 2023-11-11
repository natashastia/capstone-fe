import React from "react";
import Barista from "../assets/barista.png";
import Worker from "../assets/worker.png";
import Office from "../assets/office-worker.png";
import Photo from "../assets/take-a-photo.png";
import Detection from "../assets/recognition.png";

const Feature = () => {
  return (
    <div className="feature-section" id="section-2" name="feature">
      <div className="feature-item">
        <div className="feature-content">
          <img
            src={Barista}
            className="feature-icon"
            alt="Coffee stickers created by paulalee - Flaticon"
          />
          <h1 className="feature-title">What Is Mr. Bean?</h1>
          <p className="feature-description">
            Mr. Bean is an advanced application designed specifically for coffee
            enthusiasts. With state-of-the-art technology, this application can
            detect coffee bean quality, including normal conditions, unusual
            shapes, unusual colors, and other abnormalities.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
          <img
            src={Office}
            className="feature-icon"
            alt="Coffee stickers created by paulalee - Flaticon"
          />
          <h1 className="feature-title">Why Mr. Bean?</h1>
          <p className="feature-description">
            This application helps you avoid low-quality coffee beans, ensuring
            you only use the best. With precise detection, you will always find
            high-quality coffee beans that meet your standards. Never compromise
            on the taste of your coffee again.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
          <img
            src={Worker}
            className="feature-icon"
            alt="Coffee stickers created by paulalee - Flaticon"
          />
          <h1 className="feature-title">How to Use Mr. Bean?</h1>
          <p className="feature-description">
            <div className="flex items-center">
              <img
                src={Photo}
                className="h-[75px] "
                alt="Take a pic icons created by Dooder - Flaticon"
              ></img>
              Take a photo or upload an image of coffee beans.
            </div>
            <div className="flex items-center">
              The identification of the quality of the coffee beans.
              <img
                src={Detection}
                className="h-[75px] "
                alt="Take a pic icons created by Dooder - Flaticon"
              ></img>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
