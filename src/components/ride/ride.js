import React, { useState } from "react";
import "./ride.css";
import ForMeModal from "../forMeModal/ForMeModal"
import Reserve from "../desktopReserve/DesktopReserve"

const Ride = () => {
   const [pickupCoords, setPickupCoords] = useState(null);
   const [dropoffCoords, setDropoffCoords] = useState(null);
  const [isReserveClick, SetReserveClick] = useState(false)
  const [isForMeClicked, setIsForMeClicked ] = useState(false)
  const [focusedInput, setFocusedInput] = useState(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

  const handleReserveClick = () => {
    SetReserveClick(true);
  }

  const handleForMeClicked = () => {
    setIsForMeClicked(true);
  }

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
  setPickup(place.display_name);
  setPickupSuggestions([]);
  console.log("Selected Pickup Location:", place.display_name);
  console.log("Latitude:", place.lat, "Longitude:", place.lon);
  setPickupCoords({ lat: place.lat, lon: place.lon }); // Pass data to parent
};

const handleDropoffSuggestionClick = (place) => {
  setDropoff(place.display_name);
  setDropoffSuggestions([]);
  console.log("Selected Dropoff Location:", place.display_name);
  console.log("Latitude:", place.lat, "Longitude:", place.lon);
  setDropoffCoords({ lat: place.lat, lon: place.lon }); // Pass data to parent
};


  if(isReserveClick) {
    return (
      <div className="reserve-desktop-style">
        <Reserve />
      </div>
    );
  }

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
            placeholder="Pickup Location"
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
          className={`mb-4 ride-input flex justify-between ${
            focusedInput === "dropoff" ? "focused" : ""
          }`}
          onClick={() => handleFocus("dropoff")}
        >
        <span className="flex items-center gap-2"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
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
            placeholder="Dropoff Location"
            className="input-field"
          /></span>
          <span className="dropoff-btn">
            <svg
              width="0.8em"
              height="0.8em"
              viewBox="0 0 24 24"
              fill="none"
              color="backgroundPrimary"
            >
              <title>Add a stop</title>
              <path
                d="M23 10.5h-9.5V1h-3v9.5H1v3h9.5V23h3v-9.5H23v-3Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
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
        <div onClick={handleReserveClick} className="mb-4 ride-input">
          <i className="bi bi-clock-fill"></i>
          <div>Pickup now</div>
          <i className="bi bi-chevron-down ml-auto"></i>
        </div>
        <div onClick={handleForMeClicked} className="for-me">
          <i className="bi bi-person-fill"></i>For me
          <i className="bi bi-chevron-down"></i>
        </div>
        <button className="search text-grayish">Search</button>
      </div>
      {isForMeClicked && (
        <ForMeModal onClose={() => setIsForMeClicked(false)} />
      )}
      {/* {isReserveClick && <Reserve />} */}
    </div>
  );
};

export default Ride;
