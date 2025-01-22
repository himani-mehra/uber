import React from "react";
import "./travelHistory.css";
import bike from "../../../assests/bike.png";

const TravelHistory = ({ location, time, amount }) => {
  return (
    <div className="history">
      <div className="vehical-img">
        <img style={{ width: "100px", height: "100px" }} src={bike} alt="Map" />
      </div>
      <div className="history-details">
        <div className="text-xl font-bold uppercase">{location}</div>
        <div className="text-sm">{time}</div>
        <div className="text-sm">{amount}</div>
        <div className="buttons">
          <button className="history-btn">
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
          </button>
          <button className="history-btn">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Receipt</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                fill="currentColor"
              ></path>
            </svg>
            Details
          </button>
          <button className="history-btn">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Arrow clockwise</title>
              <path
                d="M17.9 13c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.4 0 .9.1 1.3.2L9.7 12h3.7l4.4-6-4.4-6H9.7l3 4H12c-5 0-9 4-9 9s4 9 9 9 9-4 9-9h-3.1Z"
                fill="currentColor"
              ></path>
            </svg>
            Rebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelHistory;
