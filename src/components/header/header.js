import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import person from "../../assests/perosn.jpeg"

const Header = ({onOptionClick}) => {
  const [manageAccount, setManageAccount] = useState("Manage account");
  const [wallet, setWallet] = useState("Wallet")
  const [activeOption, setActiveOption] = useState("ride");
   const handleOptionClicked = (option) => {
     setActiveOption(option);
     onOptionClick(option);
   };
   
    const toggleHeaderDropdown = () => {
      setIsHeaderDropdownOpen(!isHeaderDropdownOpen);
    };
    
  const navigate = useNavigate();
  const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false);

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
        <button className="gap-2 activity" onClick={handleActivityClick}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <title>Receipt</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
              fill="currentColor"
            ></path>
          </svg>
          Activity
        </button>
        <div onClick={toggleHeaderDropdown}>
          <button className="options">
            <img src={person} className="person-icon" />
            {isHeaderDropdownOpen ? (
              <i className="bi bi-chevron-up"></i>
            ) : (
              <i className="bi bi-chevron-down"></i>
            )}
          </button>

          {/* Dropdown menu */}
          <div
            className={`dropdown-menu ${isHeaderDropdownOpen ? "open" : ""}`}
          >
            <ul>
              <li
                onClick={() => {
                  navigate("/help");
                }}
                className="flex gap-2 items-center"
              >
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                  <title>Lifebuoy</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7c-.8 0-1.6.2-2.3.6L5.4 3.3C7.2 1.9 9.5 1.1 12 1.1s4.8.8 6.6 2.2l-4.3 4.3c-.7-.4-1.5-.6-2.3-.6Zm4.4 7.3c.4-.7.6-1.5.6-2.3 0-.8-.2-1.6-.6-2.3l4.3-4.3c1.4 1.8 2.2 4.1 2.2 6.6s-.8 4.8-2.2 6.6l-4.3-4.3Zm-2.1 2.1c-.7.4-1.5.6-2.3.6-.8 0-1.6-.2-2.3-.6l-4.3 4.3c1.8 1.4 4.1 2.2 6.6 2.2s4.8-.8 6.6-2.2l-4.3-4.3ZM1 12c0-2.5.8-4.8 2.2-6.6l4.3 4.3c-.4.7-.6 1.5-.6 2.3 0 .8.2 1.6.6 2.3l-4.3 4.3C1.8 16.8 1 14.5 1 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Help
              </li>
              <li
                onMouseEnter={() => {
                  setWallet("Not implemented");
                }}
                onMouseLeave={() => setWallet("Wallet")}
              >
                <i className="bi bi-wallet-fill mr-2"></i>
                {wallet}
              </li>
              <li>
                <i className="bi bi-tag-fill mr-2"></i>Promos
              </li>
              <li
                onMouseEnter={() => {
                  setManageAccount("Not implemented");
                }}
                onMouseLeave={() => setManageAccount("Manage account")}
              >
                <i className="bi bi-person-fill mr-2"></i>
                {manageAccount}
              </li>
              <li
                onClick={() => {
                  navigate("/setting");
                }}
              >
                <i className="bi bi-gear-fill mr-2"></i>Settings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
