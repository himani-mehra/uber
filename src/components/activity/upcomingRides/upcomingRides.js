// import React from "react";
// import "./upcomingRides.css";
// import taxi from "../../../assests/taxi.svg";
// import Past from "../past/past"
// import TravelHistory from "../travelHistory/travelHistory"

// const UpcomingRides = () => {
//   return (
//     <div className="upcoming-ride">
//       <div className="upcoming-ride-top">
//         <img className="cab-img" src={taxi} />
//         <div className="upcoming-ride-header">You have no upcoming trips</div>
//         <div className="upcoming-a-ride">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M18 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm3 7h-4V2h2v3h2v2Z"
//               fill="currentColor"
//             ></path>
//             <path
//               d="M18.2 14H18c-3.7 0-6.9-2.6-7.8-6H6.4c-.9 0-1.6.5-1.9 1.3L2.8 14H1v3h1v6h4v-1h9v1h4v-6h1v-3h-1.8ZM8 19H4v-2h4v2Zm9 0h-4v-2h4v2Z"
//               fill="currentColor"
//             ></path>
//           </svg>
//           Reserve ride
//         </div>
//       </div>
//       <Past />
//       <div className="text-2xl font-semibold">Dec 20 - Oct 23</div>
//       <TravelHistory />
//     </div>
//   );
// };

// export default UpcomingRides;


import React from "react";
import "./upcomingRides.css";
import taxi from "../../../assests/taxi.svg";
import Past from "../past/past";
import TravelHistory from "../travelHistory/travelHistory";
import travelDataSet from "../../../travelDataSet.js"

const UpcomingRides = () => {
  return (
    <div className="upcoming-ride">
      <div className="upcoming-ride-top">
        <img className="cab-img" src={taxi} alt="Taxi" />
        <div className="upcoming-ride-header">You have no upcoming trips</div>
        <div className="upcoming-a-ride">
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
          Reserve ride
        </div>
      </div>
      <Past />
      <div className="text-2xl font-semibold">Dec 20 - Oct 23</div>
      {travelDataSet.map((ride, index) => (
        <TravelHistory
          key={index}
          location={ride.location}
          date={ride.date}
          time={ride.time}
          amount={ride.amount}
        />
      ))}
      <button className="more-btn">
        more
      </button>
    </div>
  );
};

export default UpcomingRides;
