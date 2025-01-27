import React, { useState } from "react";
import mobileRental from "../../../assests/rental.png";
import "./mobileRental.css";

const Mobilerental = () => {
  const [selected, setSelected] = useState("send"); // Default to "send"

  const handleButtonClick = (button) => {
    setSelected(button);
  };

  return (
    <div className="mobile-rental">
      <img src={mobileRental} alt="Rental" className="rental-image" />
      <div className="rental-info">
        <span className="rental-title">Uber Rentals</span>
        <span className="text-[20px] mb-2">
          Get rentals delivered in the time it takes to drive there.
        </span>
        <div className="mobile-rental-detail">
          <div className="mobile-rental-input">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              color="#000000"
            >
              <title>Hourglass</title>
              <path
                d="M19 5.5V4h1V1H4v3h1v1.5c0 2.95 1.83 5.47 4.41 6.5A7.002 7.002 0 0 0 5 18.5V20H4v3h16v-3h-1v-1.5c0-2.95-1.83-5.47-4.41-6.5A7.002 7.002 0 0 0 19 5.5ZM16 4v1.5c0 .53-.11 1.04-.3 1.5H8.3c-.19-.46-.3-.97-.3-1.5V4h8Zm0 14.5V20H8v-1.5c0-2.21 1.79-4 4-4s4 1.79 4 4Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-grayish">
              Keep a car and driver for up to 12 hours
            </div>
          </div>
          <div className="mobile-rental-input">
            <i className="bi bi-briefcase-fill"></i>
            <div className="text-grayish">
              Ideal for business meetings, tourist travel and multiple stop
              trips
            </div>
          </div>
          <div className="mobile-rental-input">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm3 7h-4V2h2v3h2v2Z"
                fill="currentColor"
              ></path>
              <path
                d="M18.2 14H18c-3.7 0-6.9-2.6-7.8-6H6.4c-.9 0-1.6.5-1.9 1.3L2.8 14H1v3h1v6h4v-1h9v1h4v-6h1v-3h-1.8ZM8 19H4v-2h4v2Zm9 0h-4v-2h4v2Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-grayish">
              Book for now or reserve for later
            </div>
          </div>
        </div>
        <div className="get-started-container">
          <button className="get-started" onClick={() => alert("Going back!")}>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilerental;
