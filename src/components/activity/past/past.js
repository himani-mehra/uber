import React, { useState } from "react";
import "./past.css";

const Past = () => {
  const [isPersonalDropdownOpen, setIsPersonalDropdownOpen] = useState(false);
  const [isAllTripsOpen, setIsAllTripsOpen] = useState(false);

  const togglePersonalDropdown = (e) => {
     e.stopPropagation();
    setIsPersonalDropdownOpen(!isPersonalDropdownOpen);
  };

  const toggleAllTripsDropdown = (e) => {
    e.stopPropagation();
    setIsAllTripsOpen(!isAllTripsOpen)
  }

  return (
    <div className="past">
      <div className="text-[32px] font-bold">Past</div>
      <div className="two-dropdown">
        <span className="right p-3">
          <button className="personal" onClick={togglePersonalDropdown}>
            <i className="bi bi-person-fill"></i>
            personal
            {isPersonalDropdownOpen ? (
              <i className="bi bi-chevron-up"></i>
            ) : (
              <i className="bi bi-chevron-down"></i>
            )}
          </button>

          {/* Dropdown menu */}
          <div className={`personal-menu ${isAllTripsOpen ? "open" : ""}`}>
            <ul>
              <li>
                <i className="bi bi-wallet-fill mr-2"></i>Wallet
              </li>
              <li>
                <i className="bi bi-tag-fill mr-2"></i>Promos
              </li>
              <li>
                <i className="bi bi-headset mr-2"></i>Support
              </li>
              <li>
                <i className="bi bi-person-fill mr-2"></i>Manage account
              </li>
              <li>
                <i className="bi bi-gear-fill mr-2"></i>Settings
              </li>
            </ul>
          </div>
        </span>

        <span className="right">
          <button className="personal" onClick={toggleAllTripsDropdown}>
            <i className="bi bi-calendar-event-fill"></i> personal
            {isAllTripsOpen ? (
              <i className="bi bi-chevron-up"></i>
            ) : (
              <i className="bi bi-chevron-down"></i>
            )}
          </button>

          {/* Dropdown menu */}
          <div className={`personal-menu ${isAllTripsOpen ? "open" : ""}`}>
            <ul>
              <li>
                <i className="bi bi-wallet-fill mr-2"></i>Wallet
              </li>
              <li>
                <i className="bi bi-tag-fill mr-2"></i>Promos
              </li>
              <li>
                <i className="bi bi-headset mr-2"></i>Support
              </li>
              <li>
                <i className="bi bi-person-fill mr-2"></i>Manage account
              </li>
              <li>
                <i className="bi bi-gear-fill mr-2"></i>Settings
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Past;
