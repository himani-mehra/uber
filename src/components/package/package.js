import React, { useState } from "react";
import "./package.css";

const Package = () => {
  const [focusedInput, setFocusedInput] = useState(null); // Track focused input
  const [pickup, setPickup] = useState(""); // Track pickup input value
  const [dropoff, setDropoff] = useState(""); // Track dropoff input value
  const [pickupSuggestions, setPickupSuggestions] = useState([]); // Store pickup suggestions
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]); // Store dropoff suggestions

  const handleFocus = (input) => {
    setFocusedInput(input); // Set the clicked input to be focused
  };

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value); // Update pickup value

    // Fetch suggestions for pickup location
    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await response.json();
        setPickupSuggestions(data); // Set suggestions for pickup location
      } catch (error) {
        console.error("Error fetching pickup suggestions:", error);
      }
    }
  };

  const handleDropoffChange = async (e) => {
    const value = e.target.value;
    setDropoff(value); // Update dropoff value

    // Fetch suggestions for dropoff location
    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await response.json();
        setDropoffSuggestions(data); // Set suggestions for dropoff location
      } catch (error) {
        console.error("Error fetching dropoff suggestions:", error);
      }
    }
  };

  const handlePickupSuggestionClick = (place) => {
    setPickup(place.display_name); // Set pickup value
    setPickupSuggestions([]); // Clear suggestions after selection
  };

  const handleDropoffSuggestionClick = (place) => {
    setDropoff(place.display_name); // Set dropoff value
    setDropoffSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="package">
      <div className="get-package">Courier</div>
      <div className="package-details">
        <span className="text-grayish">
          Have a courier deliver something for you. Get packages delivered in
          the time it takes to drive there.
        </span>

        {/* Send / Receive Buttons */}
        <div className="my-4 package-input">
          <button
            onClick={() => setFocusedInput("send")}
            className={`travel ${focusedInput === "send" ? "clicked-btn" : ""}`}
          >
            Send
          </button>
          <button
            onClick={() => setFocusedInput("receive")}
            className={`travel ${
              focusedInput === "receive" ? "clicked-btn" : ""
            }`}
          >
            Receive
          </button>
        </div>

        {/* Pickup Input */}
        <div
          className={`my-4 package-input ${
            focusedInput === "pickup" ? "focused" : ""
          }`}
          onClick={() => handleFocus("pickup")}
        >
          <i className="bi bi-clock-fill"></i>
          <input
            type="text"
            value={pickup}
            onChange={handlePickupChange}
            placeholder="Enter Pickup Location"
            className="input-field"
          />
        </div>

        {/* Pickup Suggestions */}
        {pickupSuggestions.length > 0 && (
          <div className="suggestions">
            <ul>
              {pickupSuggestions.map((place, index) => (
                <li
                  key={index}
                  onClick={() => handlePickupSuggestionClick(place)}
                >
                  {place.display_name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Dropoff Input */}
        <div
          className={`my-4 package-input ${
            focusedInput === "dropoff" ? "focused" : ""
          }`}
          onClick={() => handleFocus("dropoff")}
        >
          <i className="bi bi-clock-fill"></i>
          <input
            type="text"
            value={dropoff}
            onChange={handleDropoffChange}
            placeholder="Enter Dropoff Location"
            className="input-field"
          />
        </div>

        {/* Dropoff Suggestions */}
        {dropoffSuggestions.length > 0 && (
          <div className="suggestions">
            <ul>
              {dropoffSuggestions.map((place, index) => (
                <li
                  key={index}
                  onClick={() => handleDropoffSuggestionClick(place)}
                >
                  {place.display_name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Other Components */}
        <button className="search text-grayish">Search</button>
      </div>
    </div>
  );
};

export default Package;
