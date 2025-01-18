import React, { useState } from "react";
import OptionCard from "../optionCard/OptionCard";
import "./MobileFooter.css";
import mobileRide from "../../../assests/mobile-ride.png";
import mobilePackage from "../../../assests/mobile-package.png";
import mobileRental from "../../../assests/mobile-rental.png";
import mobileShuttle from "../../../assests/mobile-shuttle.png";
import reserveRide from "../../../assests/reserve_clock.png";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const navigate = useNavigate();
  const [isBottomCardVisible, setIsBottomCardVisible] = useState(false);

  const handleSeeAllClick = () => {
    setIsBottomCardVisible(!isBottomCardVisible);
  };

  return (
    <div>
      {isBottomCardVisible && (
        <div className="overlay" onClick={handleSeeAllClick}></div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">Suggestions</span>
        <span
          onClick={handleSeeAllClick}
          className="cursor-pointer font-semibold"
        >
          See All
        </span>
      </div>

      <div className="option-grid mt-4">
        {/* Ride is default, no navigation */}
        <OptionCard image={mobileRide} title="Ride" />

        {/* Navigate to the respective routes */}
        <div onClick={() => navigate("/package")}>
          <OptionCard image={mobilePackage} title="Package" />
        </div>
        <div onClick={() => navigate("/rental")}>
          <OptionCard image={mobileRental} title="Rental" />
        </div>
        <div onClick={() => navigate("/shuttle")}>
          <OptionCard image={mobileShuttle} title="Shuttle" />
        </div>
      </div>

      {/* Bottom card with transition */}
      <div
        className={`bottom-card ${
          isBottomCardVisible ? "bottom-0" : "-bottom-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-xl">All Options</h3>
          <span onClick={handleSeeAllClick} className="cursor-pointer">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: "currentColor" }}
            >
              <path
                d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div className="option-grid">
          {/* Navigate for bottom card options */}
          <div onClick={() => navigate("/ride")}>
            <OptionCard image={mobileRide} title="Ride" />
          </div>
          <div onClick={() => navigate("/package")}>
            <OptionCard image={mobilePackage} title="Package" />
          </div>
          <div onClick={() => navigate("/rental")}>
            <OptionCard image={mobileRental} title="Rental" />
          </div>
          <div onClick={() => navigate("/shuttle")}>
            <OptionCard image={mobileShuttle} title="Shuttle" />
          </div>
          <div onClick={() => navigate("/reserve")}>
            <OptionCard image={reserveRide} title="Reserve" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
