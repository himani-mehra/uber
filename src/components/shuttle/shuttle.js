import React, { useState } from "react";
import "./shuttle.css";

const Shuttle = () => {
  const [focusedIndex, setFocusedIndex] = useState(null); // Track the clicked element
  const [pickup, setPickup] = useState(""); // Track pickup input value
  const [dropoff, setDropoff] = useState(""); // Track dropoff input value
  const [pickupSuggestions, setPickupSuggestions] = useState([]); // Store pickup suggestions
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]); // Store dropoff suggestions

  const handleClick = (index) => {
    setFocusedIndex(index); // Set the clicked index
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
    <div className="shuttle-cover">
      <div className="shuttle">
        <div className="get-shuttle">Search routes between</div>
        <div className="shuttle-details">
          {/* Pickup Location */}
          <div
            onClick={() => handleClick(1)}
            className={`my-4 ${
              focusedIndex === 1 ? "focused" : "shuttle-input"
            }`}
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

          {/* Dropoff Location */}
          <div
            onClick={() => handleClick(2)}
            className={`my-4 ${
              focusedIndex === 2 ? "focused" : "shuttle-input"
            }`}
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
        </div>
      </div>

      {/* Explore Routes Section */}
      <div className="explore-routes">
        <div>
          <div className="text-lg">Explore routes near you</div>
          <div className="text-grayish text-sm">0+ routes available</div>
        </div>
        <button className="view-all text-sm">view all</button>
      </div>
    </div>
  );
};

export default Shuttle;

