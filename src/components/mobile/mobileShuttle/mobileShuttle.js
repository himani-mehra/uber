import React, { useState } from "react";
import "./mobileShuttle.css";

const Shuttle = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

  const handleClick = (index) => {
    setFocusedIndex(index);
  };

  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);

    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await response.json();
        setPickupSuggestions(data);
      } catch (error) {
        console.error("Error fetching pickup suggestions:", error);
      }
    }
  };

  const handleDropoffChange = async (e) => {
    const value = e.target.value;
    setDropoff(value);

    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        const data = await response.json();
        setDropoffSuggestions(data);
      } catch (error) {
        console.error("Error fetching dropoff suggestions:", error);
      }
    }
  };

  const handlePickupSuggestionClick = (place) => {
    setPickup(place.display_name);
    setPickupSuggestions([]);
  };

  const handleDropoffSuggestionClick = (place) => {
    setDropoff(place.display_name);
    setDropoffSuggestions([]);
  };

  return (
    <div className="mobile-shuttle-cover">
      <div className="mobile-shuttle">
        <div className="mobile-get-shuttle">Search routes between</div>
        <div className="mobile-shuttle-details">
          <div
            onClick={() => handleClick(1)}
            className={`my-4 ${
              focusedIndex === 1 ? "mobile-focused" : "mobile-shuttle-input"
            }`}
          >
            <i className="bi bi-clock-fill"></i>
            <input
              type="text"
              value={pickup}
              onChange={handlePickupChange}
              placeholder="Enter Pickup Location"
              className="mobile-input-field"
            />
          </div>

          {pickupSuggestions.length > 0 && (
            <div className="mobile-suggestions">
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

          <div
            onClick={() => handleClick(2)}
            className={`my-4 ${
              focusedIndex === 2 ? "mobile-focused" : "mobile-shuttle-input"
            }`}
          >
            <i className="bi bi-clock-fill"></i>
            <input
              type="text"
              value={dropoff}
              onChange={handleDropoffChange}
              placeholder="Enter Dropoff Location"
              className="mobile-input-field"
            />
          </div>

          {dropoffSuggestions.length > 0 && (
            <div className="mobile-suggestions">
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

      <div className="mobile-explore-routes">
        <div>
          <div className="text-lg">Explore routes near you</div>
          <div className="text-grayish text-sm">
            0+ routes available
          </div>
        </div>
        <button className="mobile-view-all text-sm">view all</button>
      </div>
    </div>
  );
};

export default Shuttle;
