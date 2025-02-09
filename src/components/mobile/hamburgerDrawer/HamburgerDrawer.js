import React from "react";
import "./HamburgerDrawer.css";
import person from "../../../assests/perosn.jpeg";
import OptionCard from "../optionCard/OptionCard";
import mobileRide from "../../../assests/mobile-ride.png";
import mobilePackage from "../../../assests/mobile-package.png";
import mobileRental from "../../../assests/mobile-rental.png";
import mobileShuttle from "../../../assests/mobile-shuttle.png";
import reserveRide from "../../../assests/reserve_clock.png";
import { useNavigate } from "react-router-dom";

const HamburgerDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={`drawer-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      />
      <div
        className={`left-drawer ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-btn-wrapper">
          <span className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" data-baseweb="icon">
              <title>Close</title>
              <path
                d="m18.1 8.1-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
        <div className="drawer-content">
          <span className="text-[32px] font-bold">Himani</span>
          <img src={person} className="person-icon" alt="profile" />
        </div>
        <div className="wallet-promo-div">
          <span className="wallet-promo">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Receipt</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                fill="currentColor"
              ></path>
            </svg>
            <span
              onClick={() => {
                navigate("/activity");
                onClose();
              }}
              className="text-lg font-semibold"
            >
              Activity
            </span>
          </span>
          <span
            onClick={() => {
              navigate("/help");
              onClose();
            }}
            className="wallet-promo"
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
            <span className="text-lg font-semibold">Help</span>
          </span>
          <span className="wallet-promo">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Wallet</title>
              <g fill="currentColor">
                <path d="M14.12 14H9.88l-3-3H1v9h22v-9h-5.88l-3 3ZM1 4v4h7.12l3 3h1.76l3-3H23V4H1Z"></path>
              </g>
            </svg>
            <span className="text-lg font-semibold">Wallet</span>
          </span>
        </div>
        <div className="uber-help flex flex-col">
          <span className="mb-6">
            <i className="bi bi-person-fill mr-2"></i>Manage account
          </span>
          <span
            onClick={() => {
              navigate("/promos");
              onClose();
            }}
            className="mb-6 flex gap-2"
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Tag</title>
              <path
                d="m10 24 12-12V2H12L0 14l10 10Z"
                fill="currentColor"
              ></path>
            </svg>
            Promotions
          </span>
          <span
            onClick={() => {
              navigate("/setting");
              onClose();
            }}
          >
            <i className="bi bi-gear-fill mr-2"></i>Settings
          </span>
        </div>
        <div className="hamburger-divider"></div>

        <div className="flex items-center justify-between px-4">
          <span className="text-xl font-bold py-[10px]">Suggestions</span>
        </div>
        <div className="option-grid px-4 mt-4">
          <div
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            <OptionCard image={mobileRide} title="Ride" />
          </div>
          <div
            onClick={() => {
              navigate("/package");
              onClose();
            }}
          >
            <OptionCard image={mobilePackage} title="Package" />
          </div>
          <div
            onClick={() => {
              navigate("/rental");
              onClose();
            }}
          >
            <OptionCard image={mobileRental} title="Rental" />
          </div>
          <div
            onClick={() => {
              navigate("/shuttle");
              onClose();
            }}
          >
            <OptionCard image={mobileShuttle} title="Shuttle" />
          </div>
          <div
            onClick={() => {
              navigate("/reserve");
              onClose();
            }}
          >
            <OptionCard image={reserveRide} title="Reserve" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerDrawer;
