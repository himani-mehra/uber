import React, { useState } from "react";
import "./SwitchRider.css";
import person from "../../../assests/perosn.jpeg";

const SwitchRider = ({ onClose }) => {
  const [isImplement, setIsImplement] = useState(false);
  const handleNotImplemented = () => {
    setIsImplement(true);
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pb-3 px-4 text-lg font-medium flex justify-between items-center">
          <span>Switch rider</span>
          <span onClick={onClose} className="p-1 cursor-pointer">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: "currentColor" }}
            >
              <path
                d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div className="highlight-rider py-3 px-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span>
              <img src={person} className="modal-person-icon" />
            </span>
            <span className="text-base font-medium">Me</span>
          </div>
          <div>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Radio button selected</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div
          onClick={handleNotImplemented}
          className="py-5 mb-4 pr-4 pl-6 flex gap-4 items-center someone"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Person add</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm13 5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3ZM1 23h12.1c-1-1.2-1.6-2.8-1.6-4.5 0-1.7.6-3.3 1.6-4.5H7c-3.3 0-6 2.7-6 6v3Z"
              fill="currentColor"
            ></path>
          </svg>
          {isImplement ? (
            <span className="text-base font-medium">NOT IMPLEMENTED YET</span>
          ) : (
            <span className="text-base font-medium">
              Order ride for someone else
            </span>
          )}
        </div>
        <button className="get-done" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

export default SwitchRider;
