import React from 'react'
import "./activity.css"
import UpcomingRides from './upcomingRides/upcomingRides'
import RideHistoryDetail from "./rideHistoryDetail/rideHistoryDetail"
import RequestRide from './requestRide/requestRide'

const Activity = () => {
  return (
    <div className="activity-section">
      <div className="left">Tax profile</div>
      <div className="middle">
        {/* <RideHistoryDetail /> */}
        <UpcomingRides />
      </div>
      <div className="right">
        <RequestRide />
      </div>
    </div>
  );
}

export default Activity;