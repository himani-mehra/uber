import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import person from "../../assests/perosn.jpeg"

const Header = ({onOptionClick}) => {
  const [activeOption, setActiveOption] = useState("ride");
   const handleOptionClicked = (option) => {
     setActiveOption(option);
     onOptionClick(option);
   };
    
  const navigate = useNavigate();
  const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false);

  const toggleHeaderDropdown = () => {
    setIsHeaderDropdownOpen(!isHeaderDropdownOpen);
  };
  const handleActivityClick = () => {
    navigate("/activity");
  };

  return (
    <div className="header flex justify-between">
      <div className="left pl-16">
        <span className="title items-center mr-20 text-3xl font-semibold">
          Uber
        </span>
        <span
          onClick={() => {
            handleOptionClicked("ride");
          }}
          className={`options ${activeOption === "ride" ? "active" : ""}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <title>Car front</title>
            <path
              d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z"
              fill="currentColor"
            ></path>
          </svg>
          Ride
        </span>
        <span
          onClick={() => {
            handleOptionClicked("packages");
          }}
          className={`options ${activeOption === "packages" ? "active" : ""}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <title>Box isometric package</title>
            <g fill="currentColor">
              <path d="M21.9 6.4 12 1.5 8.1 3.4l9.9 5 3.9-2ZM2.1 6.4l3.8-1.9 9.9 5-3.8 1.9-9.9-5ZM11 23 1 18V8.1l10 5V23ZM19 13.8v-3.7l4-2V18l-10 5v-9.9l4-2v3.7l2-1Z"></path>
            </g>
          </svg>
          Packages
        </span>
        <span
          onClick={() => {
            handleOptionClicked("rentals");
          }}
          className={`options ${activeOption === "rentals" ? "active" : ""}`}
        >
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
          Rentals
        </span>
        <span
          onClick={() => {
            handleOptionClicked("shuttle");
          }}
          className={`options ${activeOption === "shuttle" ? "active" : ""}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <title>Bus</title>
            <path
              d="M23 9h-1V5c0-2.21-1.79-4-4-4H6C3.79 1 2 2.79 2 5v4H1v5h1v9h4v-2h12v2h4v-9h1V9Zm-4-3v7H5V6h14ZM9 18H5v-2h4v2Zm10-2v2h-4v-2h4Z"
              fill="currentColor"
            ></path>
          </svg>
          Shuttle
        </span>
      </div>
      <div className="right pr-16 activity-person">
        <button className="activity" onClick={handleActivityClick}>
          Activity
        </button>
        <button className="options" onClick={toggleHeaderDropdown}>
          <img src={person} className="person-icon" />
          {isHeaderDropdownOpen ? (
            <i className="bi bi-chevron-up"></i>
          ) : (
            <i className="bi bi-chevron-down"></i>
          )}
        </button>

        {/* Dropdown menu */}
        <div className={`dropdown-menu ${isHeaderDropdownOpen ? "open" : ""}`}>
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
      </div>
    </div>
  );
};

export default Header;
