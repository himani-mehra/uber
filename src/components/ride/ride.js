import React, { useState } from "react";
import "./ride.css";

const Ride = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);

    // Fetch places near the pickup location using OpenStreetMap Nominatim API
    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await response.json();
        setPickupSuggestions(data); // Set suggestions for pickup location
        console.log("Pickup Suggestions:", data); // Log suggestions
      } catch (error) {
        console.error("Error fetching pickup suggestions:", error);
      }
    }
  };

  const handleDropoffChange = async (e) => {
    const value = e.target.value;
    setDropoff(value);

    // Fetch places near the dropoff location using OpenStreetMap Nominatim API
    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await response.json();
        setDropoffSuggestions(data); // Set suggestions for dropoff location
        console.log("Dropoff Suggestions:", data); // Log suggestions
      } catch (error) {
        console.error("Error fetching dropoff suggestions:", error);
      }
    }
  };

  const handlePickupSuggestionClick = (place) => {
    setPickup(place.display_name); // Set the pickup input value
    setPickupSuggestions([]); // Clear suggestions after selection
  };

  const handleDropoffSuggestionClick = (place) => {
    setDropoff(place.display_name); // Set the dropoff input value
    setDropoffSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="ride">
      <div className="get-ride">Get a ride</div>
      <div className="ride-details">
        {/* Pickup Input */}
        <div
          className={`my-4 ride-input ${
            focusedInput === "pickup" ? "focused" : ""
          }`}
          onClick={() => handleFocus("pickup")}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Radio button selected</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            type="text"
            value={pickup}
            onChange={handlePickupChange}
            placeholder="Enter Pickup Location"
            className="input-field"
          />
        </div>

        {/* Pickup Suggestions */}
        <div className="suggestions">
          {pickupSuggestions.length > 0 && (
            <ul>
              {pickupSuggestions.map((place, index) => (
                <li
                  key={index}
                  onClick={() => handlePickupSuggestionClick(place)}
                >
                  {place.display_name}
                </li> // Display place names and set on click
              ))}
            </ul>
          )}
        </div>

        {/* Dropoff Input */}
        <div
          className={`my-4 ride-input flex items-center ${
            focusedInput === "dropoff" ? "focused" : ""
          }`}
          onClick={() => handleFocus("dropoff")}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Dropoff</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            type="text"
            value={dropoff}
            onChange={handleDropoffChange}
            placeholder="Enter Dropoff Location"
            className="input-field"
          />
        </div>

        {/* Dropoff Suggestions */}
        <div className="suggestions">
          {dropoffSuggestions.length > 0 && (
            <ul>
              {dropoffSuggestions.map((place, index) => (
                <li
                  key={index}
                  onClick={() => handleDropoffSuggestionClick(place)}
                >
                  {place.display_name}
                </li> // Display place names and set on click
              ))}
            </ul>
          )}
        </div>

        {/* Other Inputs */}
        <div className="my-4 ride-input">
          <i className="bi bi-clock-fill"></i>
          <div>Pickup now</div>
          <i className="bi bi-chevron-down ml-auto"></i>
        </div>
        <div className="for-me">
          <i className="bi bi-person-fill"></i>For me
          <i className="bi bi-chevron-down"></i>
        </div>
        <button className="search text-grayish">Search</button>
      </div>
    </div>
  );
};

export default Ride;
