// import React, { useState } from "react";
// import "./Promos.css";

// const Promos = () => {
//   const [promoCode, setPromoCode] = useState("");

//   const handleInputChange = (e) => {
//     setPromoCode(e.target.value);
//   };

//   return (
//     <div className="promos-container">
//       <div className="promo-title">Promotions</div>
//       <div className="mb-3 text-sm">Promo code</div>
//       <input
//         className="promo-input"
//         value={promoCode}
//         onChange={handleInputChange}
//       />
//       <button
//         className={`apply-btn ${promoCode.length >= 2 ? "apply-btn-active" : ""}`}
//       >
//         Apply
//       </button>
//       <div className="flex gap-5">
//         <div className="promo-tag-icon">
//           <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
//             <title>Tag</title>
//             <path d="m10 24 12-12V2H12L0 14l10 10Z" fill="currentColor"></path>
//           </svg>
//         </div>
//         <div className="promo-section">
//           <div className="text-md font-medium">
//             Congrats! You got 25% off upto INR 500 on your first Uber Rentals
//             trip.
//           </div>
//           <div>India - Mar 31, 2025</div>
//         </div>
//       </div>
//       <div className="flex gap-5">
//         <div className="promo-tag-icon">
//           <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
//             <title>Tag</title>
//             <path d="m10 24 12-12V2H12L0 14l10 10Z" fill="currentColor"></path>
//           </svg>
//         </div>
//         <div className="promo-section">
//           <div className="text-md font-medium">
//             Congrats! You got 15% off upto INR 1000 on your first Uber SUV trip.
//           </div>
//           <div>India - Feb 31, 2025</div>
//         </div>
//       </div>
//       <div className="flex gap-5">
//         <div className="promo-tag-icon">
//           <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
//             <title>Tag</title>
//             <path d="m10 24 12-12V2H12L0 14l10 10Z" fill="currentColor"></path>
//           </svg>
//         </div>
//         <div className="promo-section">
//           <div className="text-md font-medium">
//             Congrats! You got 15% off upto INR 1500 on your Uber XL Pro Rentals
//             trip.
//           </div>
//           <div>India - Feb 1, 2025</div>
//         </div>
//       </div>
//       <div className="flex gap-5">
//         <div className="promo-tag-icon">
//           <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
//             <title>Tag</title>
//             <path d="m10 24 12-12V2H12L0 14l10 10Z" fill="currentColor"></path>
//           </svg>
//         </div>
//         <div className="promo-section">
//           <div className="text-md font-medium">
//             5-25% off 20 trips up to ₹200
//           </div>
//           <div>India - Jan 19, 2025</div>
//         </div>
//       </div>
//       <button className="go-back">Go back</button>
//     </div>
//   );
// };

// export default Promos;


import React, { useState } from "react";
import "./Promos.css";

// Reusable Component for Promo History Item
const PromoHistoryItem = ({ message, date }) => (
  <div className="promo-history flex gap-5">
    <div className="promo-tag-icon">
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <title>Tag</title>
        <path d="m10 24 12-12V2H12L0 14l10 10Z" fill="currentColor"></path>
      </svg>
    </div>
    <div className="promo-section">
      <div className="text-md font-medium">{message}</div>
      <div>{date}</div>
    </div>
  </div>
);

const Promos = () => {
  const [promoCode, setPromoCode] = useState("");

  // Handle promo code input
  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
  };

  // List of promo history items
  const promoHistoryData = [
    {
      message:
        "Congrats! You got 25% off upto INR 500 on your first Uber Rentals trip.",
      date: "India - Mar 31, 2025",
    },
    {
      message:
        "Congrats! You got 15% off upto INR 1000 on your first Uber SUV trip.",
      date: "India - Feb 31, 2025",
    },
    {
      message:
        "Congrats! You got 15% off upto INR 1500 on your Uber XL Pro Rentals trip.",
      date: "India - Feb 1, 2025",
    },
    {
      message: "5-25% off on 20 trips up to ₹200, avail it.",
      date: "India - Jan 19, 2025",
    },
  ];

  return (
    <div className="promos-container">
      {/* Title */}
      <div className="promo-title">Promotions</div>

      {/* Promo Code Input */}
      <div className="mb-3 text-sm">Promo code</div>
      <input
        className="promo-input"
        value={promoCode}
        onChange={handleInputChange}
        placeholder="Enter promo code"
      />
      <button
        className={`apply-btn ${
          promoCode.length >= 2 ? "apply-btn-active" : ""
        }`}
        disabled={promoCode.length < 2} // Disable button for invalid promo code
      >
        Apply
      </button>

      {/* Scrollable Promo History Section */}
      <div className="promo-history-container">
        {promoHistoryData.map((promo, index) => (
          <PromoHistoryItem
            key={index}
            message={promo.message}
            date={promo.date}
          />
        ))}
      </div>

      {/* Go Back Button */}
      <div className="go-back-container">
        <button className="go-back" onClick={() => alert("Going back!")}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Promos;
