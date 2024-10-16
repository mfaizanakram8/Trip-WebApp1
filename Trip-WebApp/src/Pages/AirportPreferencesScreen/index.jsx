// import React, { useState } from 'react';
// import Tag from '../../Components/Tag';
// import Input from '../../Components/InputC';
// import Button from '../../Components/Button/Button';

import { useNavigate } from "react-router-dom";
import Tag from "../../Components/Tag";
import Input from "../../Components/InputC";
import Button from "../../Components/Button/Button";
import "../AirportPreferencesScreen/AirportPreferencesScreen.css"; // Custom styles

const AirportPreferencesScreen = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/nextPage"); // Add your route here for the next screen
  };

  const handleBackClick = () => {
    navigate("/previousPage"); // Add your route here for the previous screen
  };

  return (
    <div className="airport-preferences-screen">
      {/* Left section: Text and inputs */}
      <div className="left-section">
        <div className="header">
          <h1 className="logo">Logo</h1>
          <div className="back-cod">
            <button className="back-button" onClick={handleBackClick}>
              <img
                src="/Images/Vector 42.png"
                alt="arrow"
                width={10}
                className="object-contain"
              />
              Back
            </button>
          </div>
        </div>

        <h2 className="text-3xl text-[#7346D2] font-bold mt-16">
          Add Your Airport{""}
          <span className="span">Preferences</span>{" "}
        </h2>
        <p className="description">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX{""}
          <span className="span"> XXXXXXXXXXXXXXXXXXXXXX</span>
        </p>

        <div className="input-container">
          <Input placeholder="Search here" className="h-16" />
        </div>
        <div className="path">
          {/* Tag for selected airport */}
          <div className="tag-container">
            <Tag
              text="KHI - Karachi"
              onRemove={() => console.log("Remove tag")}
            />
          </div>

          {/* Continue button */}
          <Button
            text="Continue"
            onClick={handleContinueClick}
            className="continue-button"
          />
        </div>
      </div>

      {/* Right section: Image and stepper */}
      <div className="right-section">
        <div className="step-indicator">Step 1 of 2</div>
        <div className="plane-image">
          <img src="/Images/path-to-plane-image.png" alt="Plane" />
        </div>
      </div>
    </div>
  );
};

export default AirportPreferencesScreen;
