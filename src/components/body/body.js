
// import React from "react";
// import "./body.css";
// import Package from "../package/package";
// import Rentals from "../rentals/rentals";
// import Ride from "../ride/ride";
// import Map from "../map/map";
// import Shuttle from "../shuttle/shuttle";

// const Body = ({ activeOption }) => {
//   return (
//     <div className="body-component">
//       <div className="scrollable-content">
//         {activeOption === "ride" && <Ride />}
//         {activeOption === "packages" && <Package />}
//         {activeOption === "rentals" && <Rentals />}
//         {activeOption === "shuttle" && <Shuttle />}
//       </div>
//       <div className="fixed-content">
//         <Map />
//       </div>
//     </div>
//   );
// };

// export default Body;





// Body.js


import React from "react";
import "./body.css";
import Package from "../package/package";
import Rentals from "../rentals/rentals";
import Ride from "../ride/ride";
import Map from "../map/map";
import Shuttle from "../shuttle/shuttle";

const Body = ({ activeOption, userLocation }) => {
  return (
    <div className="body-component">
      <div className="scrollable-content">
        {activeOption === "ride" && <Ride />}
        {activeOption === "packages" && <Package />}
        {activeOption === "rentals" && <Rentals />}
        {activeOption === "shuttle" && <Shuttle />}
      </div>
      <div className="fixed-content">
        <Map userLocation={userLocation} />
      </div>
    </div>
  );
};

export default Body;
