import React from 'react'
import "./requestRide.css"
import taxi from "../../../assests/taxi.svg"

const RequestRide = () => {
  return (
    <div className="request-ride">
      <img src={taxi} />
      <div className="request-ride-header">Get a ride in minutes</div>
      <div className="text-grayish">
        Book an Uber from a web browser, no app install necessary.
      </div>
      <button className="request-a-ride">Request a ride</button>
    </div>
  );
}

export default RequestRide