import React, { useState, useEffect } from "react";
import "./body.css";
import Package from "../package/package";
import PackageMobile from "../mobile/mobilePackage/mobilePackage";
import Rentals from "../rentals/rentals";
import RentalsMobile from "../mobile/mobileRental/mobileRental";
import Ride from "../ride/ride";
import RideMobile from "../mobile/mobileRide/mobileRide";
import Shuttle from "../shuttle/shuttle";
import ShuttleMobile from "../mobile/mobileShuttle/mobileShuttle";
import Map from "../map/map";

const Body = ({ activeOption, userLocation }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="body-component">
      <div className="scrollable-content">
        {activeOption === "ride" &&
          (isMobile ? <RideMobile userLocation={userLocation} /> : <Ride />)}
        {activeOption === "packages" &&
          (isMobile ? <PackageMobile /> : <Package />)}
        {activeOption === "rentals" &&
          (isMobile ? <RentalsMobile /> : <Rentals />)}
        {activeOption === "shuttle" &&
          (isMobile ? <ShuttleMobile /> : <Shuttle />)}
      </div>
      {isMobile ? (
        " "
      ) : (
        <div className="fixed-content">
          {/* <Map userLocation={userLocation} /> */}
        </div>
      )}
    </div>
  );
};

export default Body;
